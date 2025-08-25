
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 8px;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: white;

  ${({ variant }) => variant === "carro" && css`
    background-color: #28a745;
  `}
  ${({ variant }) => variant === "marca" && css`
    background-color: #007bff;
  `}
  ${({ variant }) => variant === "modelo" && css`
    background-color: #fd7e14;
  `}

  &:hover {
    opacity: 0.9;
  }
`;
