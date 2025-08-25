import styled, { css } from 'styled-components';

const baseWrapperStyles = css`
  display: flex;
  height: 100vh;
`;

export const ContainerWrapper = styled.div`
  ${baseWrapperStyles};
  flex: 1;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  box-sizing: border-box;
`;

export const LayoutWrapper = styled.div`
  ${baseWrapperStyles};
  width: 100vw;
  background-color: #161c2bff;
`;

export const Box = styled.section`
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  background-color: #FFFFFF; 

  h2 {
    margin-bottom: 8px;
    margin-top: 5px;
  }

  p {
    margin-bottom: 12px;
  }
`;

