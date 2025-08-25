import logoImg from '../../../assets/logo.png';
import { IoHomeOutline, IoCarSportOutline } from "react-icons/io5";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { FiBox } from "react-icons/fi";


import {
  SideBarContainer,
  LogoContainer,
  Logo,
  Header,
  SubHeader,
  List,
  ListItemLink
} from './styles';

function SideBar() {
  return (
    <SideBarContainer>
        <LogoContainer>
          <Logo src={logoImg} alt="Logo" />
          <div>
            <Header>CarsAPP </Header>
            <SubHeader>gestão de veículos</SubHeader>
          </div>
        </LogoContainer>
        <List>
          <li>
            <ListItemLink to="/inicio">
              <IoHomeOutline className="navIcon" /> Início
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/marcas">
              <PiBuildingOfficeThin className="navIcon" /> Marcas
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/modelos">
              <FiBox className="navIcon" /> Modelos
            </ListItemLink>
          </li>
          <li>
            <ListItemLink to="/carros">
              <IoCarSportOutline className="navIcon" /> Carros
            </ListItemLink>
          </li>
        </List>
    </SideBarContainer>
  );
}

export default SideBar;
