import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  min-height: 100vh;
  color: #fff;
`;

export const FilterBox = styled.div`
  background: #1e293b;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SearchBar = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #2c3e50;
  background: #0f172a;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 6px rgba(74, 144, 226, 0.4);
  }
`;

export const SelectMarca = styled.select`
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #2c3e50;
  background: #0f172a;
  color: #fff; 
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 6px rgba(74, 144, 226, 0.4);
  }

  option {
    background: #0f172a; 
    color: #fff;        
  }
`;

export const GroupBox = styled.div`
  margin-bottom: 30px;
`;

export const ModeloBox = styled.div`
  background: #2d3748;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #374151;
  }
`;

export const ModeloItem = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`;

export const CarCard = styled.div`
  background: #1e293b;
  padding: 15px 20px;
  border-radius: 0 0 12px 12px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CarTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

export const CarText = styled.p`
  font-size: 14px;
  color: #ddd;
  margin: 0;
`;

export const DateText = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 6px;
`;

export const CarPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #22c55e;
  white-space: nowrap;
`;
