package com.works.cars.repository;

import com.works.cars.domain.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MarcaRepository extends JpaRepository<Marca, Long> {
    boolean existsByNome(String nome);
    Optional<Marca> findByNome(String nome);
}
