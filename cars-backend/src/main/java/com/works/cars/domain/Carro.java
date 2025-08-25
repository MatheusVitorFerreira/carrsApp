package com.works.cars.domain;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "carro")
public class Carro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "timestamp_cadastro")
    private Long timestampCadastro;

    @ManyToOne
    @JoinColumn(name = "modelo_id")
    private Modelo modelo;

    private Integer ano;
    private String combustivel;

    @Column(name = "num_portas")
    private Integer numPortas;

    private String cor;

    @Column(precision = 12, scale = 2)
    private BigDecimal valor;

}
