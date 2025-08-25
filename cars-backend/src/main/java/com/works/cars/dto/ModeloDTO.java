package com.works.cars.dto;

import com.works.cars.domain.Modelo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModeloDTO {

    private Long id;
    private String nome;
    private BigDecimal valorFipe;
    private List<CarroDTO> carros;

    public Modelo toModelo() {
        Modelo modelo = new Modelo();
        modelo.setId(this.id);
        modelo.setNome(this.nome);
        modelo.setValorFipe(this.valorFipe);
        return modelo;
    }

    public static ModeloDTO fromModelo(Modelo modelo) {
        ModeloDTO dto = new ModeloDTO();
        dto.setId(modelo.getId());
        dto.setNome(modelo.getNome());
        dto.setValorFipe(modelo.getValorFipe());

        List<CarroDTO> carrosDTO = modelo.getCarros() != null
                ? modelo.getCarros().stream().map(CarroDTO::fromCarro).toList()
                : List.of();
        dto.setCarros(carrosDTO);

        return dto;
    }
}
