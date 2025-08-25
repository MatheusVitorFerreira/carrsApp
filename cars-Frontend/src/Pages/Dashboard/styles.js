import styled from "styled-components";


export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 0.5rem;
`;
export const Subtitle = styled.p`
  color: #ddd;
  text-align: center;
  margin-bottom: 2rem;
`;
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;     
`;


export const Card = styled.div`
  background: #2f2b2bff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30px;  
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;


export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const CardValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffffff;
`;

export const CardLabel = styled.div`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: #eee;
`;
