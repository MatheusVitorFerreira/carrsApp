package com.works.cars.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstatisticaDashboard {

    private long totalDeVeiculos;
    private long totalDeModelos;
    private long marcasCadastradas;
    private BigDecimal valorTotalAvaliado;
}
