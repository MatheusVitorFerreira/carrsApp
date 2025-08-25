package com.works.cars.dto;

import com.works.cars.domain.Marca;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MarcaDTO {
    private Long id;
    private String nome;

    public Marca toMarca() {
        Marca marca = new Marca();
        marca.setId(this.id);
        marca.setNome(this.nome);
        return marca;
    }
    public static MarcaDTO fromMarca(Marca marca) {
        return new MarcaDTO(
                marca.getId(),
                marca.getNome());

    }
}

