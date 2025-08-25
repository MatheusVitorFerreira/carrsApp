import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.nav`
  width: 260px;
  height: 100vh;
  position: flex;
  top: 0;
  left: 0;
  flex-shrink: 0;
  background: linear-gradient(145deg, #1a1d23 0%, #2d3748 100%);
  box-shadow: 4px 0 25px rgba(0, 0, 0, 0.2);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  border-top-right-radius: 0; 
  border-bottom-right-radius: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(86, 109, 240, 0.08) 0%, transparent 60%),
      radial-gradient(circle at 80% 70%, rgba(100, 181, 246, 0.06) 0%, transparent 60%);
    pointer-events: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 12px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 12px rgba(86, 109, 240, 0.2));
  flex-shrink: 0;

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 6px 20px rgba(86, 109, 240, 0.35));
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.5px;
  
  &::after {
    content: '';
    display: flex;
    width: 35px;
    height: 2px;
    background: linear-gradient(90deg, #556DF0, #64B5F6);
    margin-top: 6px;
    border-radius: 2px;
  }
`;

export const SubHeader = styled.p`
  font-size: 0.75rem;
  color: #94A3B8;
  margin: 0;
  margin-top: 10px;
  font-weight: 400;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  opacity: 0.8;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 1;
  flex: 1;
`;

export const ListItemLink = styled(Link)`
  text-decoration: none;
  font-size: 0.95rem;
  color: #E2E8F0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(86, 109, 240, 0.25), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(86, 109, 240, 0.18) 0%, rgba(100, 181, 246, 0.12) 100%);
    color: #FFFFFF;
    transform: translateX(6px);
    border-color: rgba(86, 109, 240, 0.4);

    &::before {
      left: 100%;
    }

    .navIcon {
      transform: scale(1.1);
      color: #64B5F6;
      filter: drop-shadow(0 0 6px rgba(100, 181, 246, 0.6));
    }
  }

  &.active {
    background: linear-gradient(135deg, #556DF0 0%, #64B5F6 100%);
    color: #FFFFFF;
    transform: translateX(4px);

    .navIcon {
      color: #FFFFFF;
    }
  }

  .navIcon {
    font-size: 22px;
    transition: all 0.3s ease;
    color: #94A3B8;
    min-width: 22px;
    text-align: center;
  }
`;

export const ContentArea = styled.main`
  flex: 1;
  margin-left: 260px; /* colado na sidebar */
  padding: 2rem;
  min-height: 100vh;
  background: #f8fafc;
`;
