import { useState, useEffect } from 'react';
import axios from "axios";
import { ContainerWrapper } from '../../Components/Atoms/Container/styles'; 

import {
  Title,
  Subtitle,
  CardsGrid,
  Card,
  CardIcon,
  CardValue,
  CardLabel,
} from "./styles"; 


const Dashboard = () => {
  const [stats, setStats] = useState({
    totalDeVeiculos: 0,
    totalDeModelos: 0,
    marcasCadastradas: 0,
    valorTotalAvaliado: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/cars/api/v1/estatisticas")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ContainerWrapper>
      <Title>Dashboard</Title>
      <Subtitle>Visão geral do seu sistema de veículos</Subtitle>

      <CardsGrid>
        <Card>
          <CardIcon>🚗</CardIcon>
          <CardValue>{stats.totalDeVeiculos}</CardValue>
          <CardLabel>Total de Veículos</CardLabel>
        </Card>

        <Card>
          <CardIcon>🏷️</CardIcon>
          <CardValue>{stats.marcasCadastradas}</CardValue>
          <CardLabel>Marcas Cadastradas</CardLabel>
        </Card>

        <Card>
          <CardIcon>🔧</CardIcon>
          <CardValue>{stats.totalDeModelos}</CardValue>
          <CardLabel>Modelos Ativos</CardLabel>
        </Card>
        <Card>
          <CardIcon>💰</CardIcon>
          <CardValue>
            {Number(stats.valorTotalAvaliado).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </CardValue>
          <CardLabel>Valor Total Avaliado</CardLabel>
        </Card>
      </CardsGrid>
    </ContainerWrapper>
  );
};

export default Dashboard;
