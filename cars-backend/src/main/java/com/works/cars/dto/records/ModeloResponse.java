package com.works.cars.dto.records;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.works.cars.domain.Modelo;
import com.works.cars.dto.CarroDTO;

import java.math.BigDecimal;
import java.util.List;

public record ModeloResponse(
        Long id,
        String nome,
        @JsonProperty("valor_fipe")
        BigDecimal valorFipe,
        @JsonProperty("marca_id")
        Long marcaId,
        @JsonProperty("nome_marca")
        String nomeMarca,
        List<CarroDTO> carros

) {
    public static ModeloResponse fromModelo(Modelo modelo) {
        List<CarroDTO> carroList = modelo.getCarros() != null
                ? modelo.getCarros().stream().map(CarroDTO::fromCarro).toList()
                : List.of();

        return new ModeloResponse(
                modelo.getId(),
                modelo.getNome(),
                modelo.getValorFipe(),
                modelo.getMarca() != null ? modelo.getMarca().getId() : null,
                modelo.getMarca() != null ? modelo.getMarca().getNome() : null,
                carroList
        );
    }
}
