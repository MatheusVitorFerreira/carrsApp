import { useNavigate } from "react-router-dom";
import CarroForm from "../CarroForm";
import {
  Subtitle,
  BoxTitle

} from "./styles";
function NovoCarro() {
  const navigate = useNavigate();

  function createVeiculo(carro) {
    fetch("http://localhost:8080/cars/api/v1/carro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carro)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao criar veículo");
        return res.json();
      })
      .then((data) => {
        console.log("Carro criado:", data);
        navigate("/carros");
      })
      .catch((err) => console.error("Erro:", err));
  }

  return (
    <div>
      <BoxTitle>Adicionar Novo Veículo</BoxTitle>
      <Subtitle>Preencha as informações do veículo para cadastrar no sistema</Subtitle>
      <CarroForm onSubmit={createVeiculo} />
    </div>
  );
}

export default NovoCarro;
