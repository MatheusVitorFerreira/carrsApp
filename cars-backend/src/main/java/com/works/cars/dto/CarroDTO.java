package com.works.cars.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.works.cars.domain.Carro;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import com.works.cars.dto.records.CarroResponse;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarroDTO {
    private Long id;
    private Long timestampCadastro;
    private Integer ano;
    private String combustivel;

    @JsonProperty("num_portas")
    private Integer numPortas;
    private String cor;


    private BigDecimal valor;

    public Carro toCarro() {
        Carro carro = new Carro();
        carro.setId(this.id);
        carro.setTimestampCadastro(this.timestampCadastro);
        carro.setAno(this.ano);
        carro.setCombustivel(this.combustivel);
        carro.setNumPortas(this.numPortas);
        carro.setCor(this.cor);
        carro.setValor(this.valor);
        return carro;
    }

    public static CarroDTO fromCarro(Carro carro) {
        CarroDTO dto = new CarroDTO();
        dto.setId(carro.getId());
        dto.setTimestampCadastro(carro.getTimestampCadastro());
        dto.setAno(carro.getAno());
        dto.setCombustivel(carro.getCombustivel());
        dto.setNumPortas(carro.getNumPortas());
        dto.setCor(carro.getCor());
        dto.setValor(carro.getValor());
        return dto;
    }
}
