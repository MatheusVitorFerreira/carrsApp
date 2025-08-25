package com.works.cars.dto.records;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public record CarroResponse(
        Long id,
        Long timestampCadastro,
        @JsonProperty("modelo_id")
        Long modeloId,
        int ano,
        String combustivel,
        @JsonProperty("num_portas")
        int numPortas,
        String cor,
        String nomeModelo,
        BigDecimal valor
) {
}
