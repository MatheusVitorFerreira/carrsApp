package com.works.cars.dto.records;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public record CarroRequest(
        Long modelo_id,
        @JsonProperty("timestamp_cadastro")
        Long timestampCadastro,
        int ano,
        String combustivel,
        int num_portas,
        String cor,
        BigDecimal valor
) { }
