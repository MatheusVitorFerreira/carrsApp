package com.works.cars.repository;

import com.works.cars.domain.Carro;
import com.works.cars.domain.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;

public interface CarroRepository  extends JpaRepository<Carro, Long> {
    @Query("SELECT COALESCE(SUM(c.valor), 0) FROM Carro c")
    BigDecimal somaValoresCarros();

    boolean existsByModeloAndAnoAndCombustivelAndNumPortasAndCorAndValor
            (
            Modelo modelo,
            Integer ano,
            String combustivel,
            Integer num_portas,
            String cor,
            BigDecimal valor);
}
