import React from "react";
import {
  GroupBox,
  ModeloBox,
  ModeloItem,
  CarCard,
  CarInfo,
  CarTitle,
  CarText,
  CarPrice,
  DateText,
} from "./styles";

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("pt-BR");
};

function CarList({ modelos, expandedModelo, setExpandedModelo, searchTerm }) {
  return (
    <>
      {modelos.map((modelo) => {
        const carrosFiltrados = modelo.carros.filter(
          (c) =>
            modelo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.combustivel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.cor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(c.ano).includes(searchTerm)
        );

        return (
          <GroupBox key={modelo.id}>
            <ModeloBox
              onClick={() =>
                setExpandedModelo(expandedModelo === modelo.id ? null : modelo.id)
              }
            >
              <ModeloItem>
                {modelo.nome} ({carrosFiltrados.length} veículos)
              </ModeloItem>
            </ModeloBox>

            {expandedModelo === modelo.id &&
              carrosFiltrados.map((car) => (
                <CarCard key={car.id}>
                  <CarInfo>
                    <CarTitle>{modelo.nome}</CarTitle>
                    <CarText>Ano: {car.ano}</CarText>
                    <CarText>Combustível: {car.combustivel}</CarText>
                    <CarText>{car.num_portas} portas</CarText>
                    <CarText>Cor: {car.cor}</CarText>
                    <DateText>
                      Cadastrado em: {formatDate(car.timestampCadastro)}
                    </DateText>
                  </CarInfo>
                  <CarPrice>
                    R$ {car.valor.toLocaleString("pt-BR")}
                  </CarPrice>
                </CarCard>
              ))}
          </GroupBox>
        );
      })}
    </>
  );
}

export default CarList;
