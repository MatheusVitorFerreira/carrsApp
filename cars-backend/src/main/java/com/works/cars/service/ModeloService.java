package com.works.cars.service;

import com.works.cars.Excepetion.erros.DuplicateEntityException;
import com.works.cars.Excepetion.erros.MarcaNotFoundException;
import com.works.cars.Excepetion.erros.ModeloNotFoundException;
import com.works.cars.domain.Marca;
import com.works.cars.domain.Modelo;
import com.works.cars.dto.ModeloDTO;
import com.works.cars.dto.records.ModeloList;
import com.works.cars.dto.records.ModeloRequest;
import com.works.cars.dto.records.ModeloResponse;
import com.works.cars.repository.MarcaRepository;
import com.works.cars.repository.ModeloRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ModeloService {

    private final ModeloRepository modeloRepository;
    private final MarcaRepository marcaRepository;
    private final EstatisticaDashboardService estatisticaDashboardService;

    public List<ModeloResponse> findAll() {
        return modeloRepository.findAll()
                .stream()
                .map(ModeloResponse::fromModelo)
                .toList();
    }

    public ModeloDTO findById(Long id) {
        Modelo modelo = modeloRepository.findById(id)
                .orElseThrow(() -> new ModeloNotFoundException("Modelo não encontrado com id: " + id));
        return ModeloDTO.fromModelo(modelo);
    }
    public List<ModeloList> findAllSimplificado() {
        return modeloRepository.findAll()
                .stream()
                .map(ModeloList::fromModelo)
                .toList();
    }

    @Transactional
    public ModeloResponse createModelo(ModeloRequest request) {
        Marca marca = marcaRepository.findByNome(request.marcaNome())
                .orElseGet(() -> {
                    Marca novaMarca = new Marca();
                    novaMarca.setNome(request.marcaNome());
                    return marcaRepository.save(novaMarca);
                });

        boolean exists = modeloRepository.existsByNomeAndMarca(request.nome(), marca);
        if (exists) {
            throw new DuplicateEntityException("Modelo com o mesmo nome já existe para esta marca.");
        }

        Modelo modelo = new Modelo();
        modelo.setNome(request.nome());
        modelo.setValorFipe(request.valorFipe());
        modelo.setMarca(marca);

        Modelo saved = modeloRepository.save(modelo);
        return ModeloResponse.fromModelo(saved);
    }

    @Transactional
    public ModeloResponse updateModelo(Long id, ModeloRequest request) {
        Modelo existing = modeloRepository.findById(id)
                .orElseThrow(() -> new ModeloNotFoundException("Modelo não encontrado com id: " + id));

        Marca marca = marcaRepository.findByNome(request.marcaNome())
                .orElseThrow(() -> new MarcaNotFoundException("Marca não encontrada: " + request.marcaNome()));

        existing.setNome(request.nome());
        existing.setValorFipe(request.valorFipe());
        existing.setMarca(marca);

        Modelo updated = modeloRepository.save(existing);
        return ModeloResponse.fromModelo(updated);
    }

    @Transactional
    public void deleteModelo(Long id) {
        Modelo existing = modeloRepository.findById(id)
                .orElseThrow(() -> new ModeloNotFoundException("Modelo não encontrado com id: " + id));
        modeloRepository.delete(existing);
    }


}
