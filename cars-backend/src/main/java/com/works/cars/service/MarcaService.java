package com.works.cars.service;

import com.works.cars.Excepetion.erros.DatabaseNegatedAccessException;
import com.works.cars.Excepetion.erros.DuplicateEntityException;
import com.works.cars.Excepetion.erros.MarcaNotFoundException;
import com.works.cars.domain.Marca;
import com.works.cars.dto.MarcaDTO;
import com.works.cars.repository.MarcaRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarcaService {

    private final MarcaRepository marcaRepository;
    private final EstatisticaDashboardService estatisticaDashboardService;


    public List<MarcaDTO> findAll() {
        return marcaRepository.findAll()
                .stream()
                .map(MarcaDTO::fromMarca)
                .toList();
    }

    public MarcaDTO findById(Long id) {
        try {
            Marca marca = marcaRepository.findById(id)
                    .orElseThrow(() -> new MarcaNotFoundException("Marca não encontrada com id: " + id));

            return MarcaDTO.fromMarca(marca);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Falha ao acessar o banco de dados: " + e.getMessage());
        }
    }

    @Transactional
    public MarcaDTO createMarca( MarcaDTO obj) {
        try {
            Marca marca = obj.toMarca();
            boolean exists = marcaRepository.existsByNome(marca.getNome());
            if (exists) {
                throw new DuplicateEntityException("Discipline with the same name already exists.");
            }
            Marca savedMarca = marcaRepository.save(marca);
            return MarcaDTO.fromMarca(savedMarca);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Failed to save discipline to the database: " + e.getMessage());
        }
    }

    @Transactional
    public MarcaDTO updateMarca(MarcaDTO obj ,long id ) {
        try {
            Marca existingMarca = marcaRepository.findById(id)
                    .orElseThrow(() -> new MarcaNotFoundException("Marca não encontrada com id: " + id));
            existingMarca.setNome(obj.getNome());
            Marca updatedMarca = marcaRepository.save(existingMarca);
            return MarcaDTO.fromMarca(updatedMarca);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Failed to update discipline in the database: " + e.getMessage());
        }
    }
    @Transactional
    public void deleteMarca(Long id) {
        try {
            Marca existingMarca = marcaRepository.findById(id)
                    .orElseThrow(() -> new MarcaNotFoundException("Marca não encontrada com id: " + id));
            marcaRepository.delete(existingMarca);
        } catch (Exception e) {
            throw new DatabaseNegatedAccessException("Failed to delete Marca from the database: " + e.getMessage());
        }
    }
}
