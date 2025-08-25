package com.works.cars.dto.records;

import com.works.cars.domain.Modelo;

public record ModeloList(Long id, String nome) {
        public static ModeloList fromModelo(Modelo modelo) {
                return new ModeloList(modelo.getId(), modelo.getNome());
        }
}
