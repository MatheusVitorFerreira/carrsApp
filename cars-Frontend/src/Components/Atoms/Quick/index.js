import { Title, Grid } from "./styles"; 
import LinkButton from "../LinkButton";
import { FaCar, FaTag, FaWrench } from "react-icons/fa";
import { ContainerWrapper } from "../Container/styles";

function QuickActions() {
  return (
    <ContainerWrapper>
      <Title>Ações Rápidas</Title>
      <Grid>
        <LinkButton to="/carros/novo" variant="carro">
          <FaCar /> Adicionar Veículo
        </LinkButton>
        <LinkButton to="/marcas" variant="marca">
          <FaTag /> Nova Marca
        </LinkButton>
        <LinkButton to="/modelos" variant="modelo">
          <FaWrench /> Novo Modelo
        </LinkButton>
      </Grid>
    </ContainerWrapper>
  );
}

export default QuickActions;
