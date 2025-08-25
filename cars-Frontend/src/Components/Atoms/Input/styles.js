import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-size: 13px;
  margin-bottom: 6px;
  font-weight: 500;
  color: #E0E0E0;
`;

export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #2C3E50;
  border-radius: 8px;
  background: #2C3E50;
  color: #E0E0E0;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #4A90E2;
    box-shadow: 0 0 6px rgba(74,144,226,0.3);
  }
`;
