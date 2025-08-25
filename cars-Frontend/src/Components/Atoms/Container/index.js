import { ContainerWrapper } from './styles.js'; 

function Container({ children, className }) {
  return (
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  );
}

export default Container;
