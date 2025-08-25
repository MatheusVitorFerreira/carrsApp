package com.works.cars.service;

import com.works.cars.Excepetion.erros.CarroNotFoundException;
import com.works.cars.Excepetion.erros.DatabaseNegatedAccessException;
import com.works.cars.Excepetion.erros.DuplicateEntityException;
import com.works.cars.domain.Carro;
import com.works.cars.domain.Modelo;
import com.works.cars.dto.records.CarroRequest;
import com.works.cars.dto.records.CarroResponse;
import com.works.cars.repository.CarroRepository;
import com.works.cars.repository.ModeloRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarroService {

    private final CarroRepository carroRepository;
    private final ModeloRepository modeloRepository;
    private final EstatisticaDashboardService estatisticaService;


    public List<CarroResponse> findAll() {
        try {
            return carroRepository.findAll()
                    .stream()
                    .map(this::toResponse)
                    .toList();
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Falha ao acessar o banco de dados: " + e.getMessage());
        }
    }

    public CarroResponse findById(Long id) {
        try {
            Carro carro = carroRepository.findById(id)
                    .orElseThrow(() -> new CarroNotFoundException("Carro não encontrado com id: " + id));
            return toResponse(carro);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Falha ao acessar o banco de dados: " + e.getMessage());
        }
    }

    @Transactional
    public CarroResponse createCarro(CarroRequest request) {
        try {
            if (request.modelo_id() == null) {
                throw new IllegalArgumentException("modeloId não pode ser nulo");
            }

            Modelo modelo = modeloRepository.findById(request.modelo_id())
                    .orElseThrow(() -> new CarroNotFoundException("Modelo não encontrado com id: " + request.modelo_id()));

            boolean exists = carroRepository.existsByModeloAndAnoAndCombustivelAndNumPortasAndCorAndValor(
                    modelo, request.ano(), request.combustivel(), request.num_portas(), request.cor(), request.valor()
            );
            if (exists) {
                throw new DuplicateEntityException("Já existe um carro com as mesmas informações");
            }

            Carro carro = new Carro();
            carro.setTimestampCadastro(request.timestampCadastro());
            carro.setAno(request.ano());
            carro.setCombustivel(request.combustivel());
            carro.setNumPortas(request.num_portas());
            carro.setCor(request.cor());
            carro.setValor(request.valor());
            carro.setModelo(modelo);

            Carro saved = carroRepository.save(carro);
            return toResponse(saved);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Falha ao salvar carro no banco: " + e.getMessage());
        }
    }

    @Transactional
    public CarroResponse updateCarro(Long id, CarroRequest request) {
        try {
            Carro existing = carroRepository.findById(id)
                    .orElseThrow(() -> new CarroNotFoundException("Carro não encontrado com id: " + id));

            if (request.modelo_id() == null) {
                throw new IllegalArgumentException("modeloId não pode ser nulo");
            }

            Modelo modelo = modeloRepository.findById(request.modelo_id())
                    .orElseThrow(() -> new CarroNotFoundException("Modelo não encontrado com id: " + request.modelo_id()));

            existing.setTimestampCadastro(request.timestampCadastro());
            existing.setAno(request.ano());
            existing.setCombustivel(request.combustivel());
            existing.setNumPortas(request.num_portas());
            existing.setCor(request.cor());
            existing.setValor(request.valor());
            existing.setModelo(modelo);
            return toResponse(carroRepository.save(existing));
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Falha ao atualizar carro no banco: " + e.getMessage());
        }
    }

    @Transactional
    public void deleteCarro(Long id) {
        try {
            Carro existing = carroRepository.findById(id)
                    .orElseThrow(() -> new CarroNotFoundException("Carro não encontrado com id: " + id));
            carroRepository.delete(existing);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Falha ao deletar carro no banco: " + e.getMessage());
        }
    }

    private CarroResponse toResponse(Carro carro) {
        return new CarroResponse(
                carro.getId(),
                carro.getTimestampCadastro(),
                carro.getModelo() != null ? carro.getModelo().getId() : null,
                carro.getAno(),
                carro.getCombustivel(),
                carro.getNumPortas(),
                carro.getCor(),
                carro.getModelo() != null ? carro.getModelo().getNome() : null,
                carro.getValor()
        );
    }
}
