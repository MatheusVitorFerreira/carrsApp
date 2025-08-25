import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  Box,
  BoxTitle,
  BoxText,
  Field,
  Select,
  ButtonGroup,
  Button,
  StyledDatePicker,
  DatePickerWrapper
} from "./styles";
import LinkButton from "../../../Components/Atoms/LinkButton";
import Input from "../../../Components/Atoms/Input";

function CarroForm({ onSubmit }) {
  const [carro, setCarro] = useState({
    modelo_id: "",
    ano: null,
    combustivel: "",
    num_portas: "",
    cor: "",
    valor: "",
    observacoes: ""
  });

  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cars/api/v1/modelo/lista")
      .then((res) => res.json())
      .then((data) => setModelos(data))
      .catch((err) => console.error("Erro ao carregar modelos:", err));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setCarro((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleReset() {
    setCarro({
      modelo_id: "",
      ano: null,
      combustivel: "",
      num_portas: "",
      cor: "",
      valor: "",
      observacoes: ""
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      timestamp_cadastro: Math.floor(Date.now() / 1000),
      modelo_id: Number(carro.modelo_id),
      ano: carro.ano ? carro.ano.getFullYear() : null,
      combustivel: carro.combustivel.trim(),
      num_portas: Number(carro.num_portas),
      cor: carro.cor.trim(),
      valor: Number(carro.valor.replace(",", ".")),
      observacoes: carro.observacoes.trim()
    };

    if (onSubmit) {
      onSubmit(payload);
    }

    handleReset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <BoxTitle>Informações do Veículo</BoxTitle>
        <BoxText>Preencha todos os campos obrigatórios (*)</BoxText>

        <Field>
          <label>Modelo *</label>
          <Select
            name="modelo_id"
            value={carro.modelo_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um modelo</option>
            {modelos.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nome}
              </option>
            ))}
          </Select>
        </Field>

        <Field>
          <label>Ano *</label>
          <DatePickerWrapper>
            <StyledDatePicker
              selected={carro.ano}
              onChange={(date) => setCarro((prev) => ({ ...prev, ano: date }))}
              dateFormat="yyyy"
              showYearPicker
              placeholderText="Selecione o ano"
              popperPlacement="bottom-start"
              modifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [0, 8],
                  },
                },
              ]}
              required
            />
          </DatePickerWrapper>
        </Field>

        <Field>
          <Input
            type="text"
            text="Combustível *"
            name="combustivel"
            value={carro.combustivel}
            handleOnChange={handleChange}
            required
            placeholder="Ex: GASOLINA"
          />
        </Field>

        <Field>
          <Input
            type="number"
            text="Nº Portas *"
            name="num_portas"
            value={carro.num_portas}
            handleOnChange={handleChange}
            required
            placeholder="Ex: 2"
          />
        </Field>

        <Field>
          <Input
            type="text"
            text="Cor"
            name="cor"
            value={carro.cor}
            handleOnChange={handleChange}
            placeholder="Ex: VERMELHO"
          />
        </Field>

        <Field>
          <Input
            type="text"
            text="Valor (R$) *"
            name="valor"
            value={carro.valor}
            handleOnChange={handleChange}
            required
            placeholder="Ex: 75000.00"
          />
        </Field>
      </Box>

      <ButtonGroup>
        <Button type="button" secondary onClick={handleReset}>
          Limpar Formulário
        </Button>

        <Button type="submit">Salvar Veículo</Button>

        <LinkButton to="/inicio" variant="modelo">
          Voltar
        </LinkButton>
      </ButtonGroup>
    </Form>
  );
}

export default CarroForm;
