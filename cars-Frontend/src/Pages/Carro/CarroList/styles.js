import styled from "styled-components";

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
