import React, { useEffect, useState } from "react";
import { FilterBox, SearchBar, SelectMarca } from "./styles";
import { ContainerWrapper } from "../../../Components/Atoms/Container/styles";
import CarList from "../CarroList";


const Carros = () => {
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [expandedModelo, setExpandedModelo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/cars/api/v1/marca")
      .then((res) => res.json())
      .then((data) => setMarcas(data))
      .catch((err) => console.error(err));

    fetch("http://localhost:8080/cars/api/v1/modelo")
      .then((res) => res.json())
      .then((data) => setModelos(data))
      .catch((err) => console.error(err));
  }, []);

  const modelosFiltrados = modelos.filter(
    (m) => !selectedMarca || m.marca_id === Number(selectedMarca)
  );

  return (
    <ContainerWrapper>
      <FilterBox>
        <SearchBar
          type="text"
          placeholder="Pesquisar por modelo, ano, combustível ou cor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <SelectMarca
          value={selectedMarca}
          onChange={(e) => {
            setSelectedMarca(e.target.value);
            setExpandedModelo(null);
          }}
        >
          <option value="">Todas as marcas</option>
          {marcas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nome}
            </option>
          ))}
        </SelectMarca>
      </FilterBox>

      <CarList
        modelos={modelosFiltrados}
        expandedModelo={expandedModelo}
        setExpandedModelo={setExpandedModelo}
        searchTerm={searchTerm}
      />
    </ContainerWrapper>
  );
};

export default Carros;
