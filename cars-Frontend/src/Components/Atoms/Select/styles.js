import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  margin-top: 1em;
  margin-bottom: 0.6em;
  font-weight: bold;
`;

export const SelectContainer = styled.select`
  padding: 0.7em;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;
