import { ContainerWrapper } from "../../Components/Atoms/Container/styles";
import QuickActions from "../../Components/Atoms/Quick";
import Dashboard from "../Dashboard";

function Inicio() {
  return (
    <ContainerWrapper>
      <Dashboard />
      <QuickActions />
    </ContainerWrapper>

  );
}

export default Inicio;
