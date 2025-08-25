import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './Pages/Inicio';


import Modelos from './Pages/Modelos';

import { ContainerWrapper, LayoutWrapper } from './Components/Atoms/Container/styles'; 
import Marca from './Pages/Marca';
import Carro from './Pages/Carro';
import SideBar from './Components/Organism/SideBar';
import GlobalStyle from './Styles/styles';
import NovoCarro from './Pages/Carro/NovoCarro';

function App() {
  return (
    <LayoutWrapper>
      <GlobalStyle/>
      <Router>
        <SideBar/>
        <ContainerWrapper>
            <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/modelos" element={<Modelos />} />
            <Route path="/carros" element={<Carro />} />
            <Route path="/carros/novo" element={<NovoCarro />}/> 
            <Route path="/marcas" element={<Marca />} />
          </Routes>
        </ContainerWrapper>
      </Router>
    </LayoutWrapper>
  );
}

export default App;
