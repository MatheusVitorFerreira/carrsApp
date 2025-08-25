package com.works.cars.repository;

import com.works.cars.domain.Carro;
import com.works.cars.domain.Marca;
import com.works.cars.domain.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModeloRepository extends JpaRepository<Modelo, Long> {
    boolean existsByNomeAndMarca(String nome, Marca marca);
    Optional<Modelo> findByNome(String nome);
}
