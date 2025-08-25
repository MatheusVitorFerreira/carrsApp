package com.works.cars.dto.records;

import java.math.BigDecimal;

public record ModeloRequest(
        String nome,
        BigDecimal valorFipe,
        String marcaNome
) { }
