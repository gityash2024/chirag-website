import React from 'react';
import styled from 'styled-components';
import chirag_logo from "../../assets/chirag_logo.svg";
import { Circle } from 'lucide-react';

const NavbarContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
  max-height: calc(100vh - 4rem);
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  height: 32px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4B5563;
  transition: color 0.2s;
  font-size: 0.95rem;
  
  &:hover {
    color: #111827;
  }
  
  &:first-child {
    font-weight: 500;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`;

const GridItem = styled.span`
  color: #D1D5DB;
  font-size: 0.75rem;
  user-select: none;
`;

const VerticalNavbar = ({ 
  menuItems = [
    { label: "Home", href: "/", },
    { label: "Product", href: "/ourservice" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}) => {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <Logo src={chirag_logo} alt="CHIRAG CONNECT" />
      </LogoWrapper>
      
      <Nav>
        {menuItems.map((item, index) => (
          <NavLink key={index} href={item.href}>
            {index === 0 && <Circle size={16} className="fill-current" />}
            {item.label}
          </NavLink>
        ))}
      </Nav>

      <GridContainer>
        {Array(60).fill(null).map((_, i) => (
          <GridItem key={i}>+</GridItem>
        ))}
      </GridContainer>
    </NavbarContainer>
  );
};

export default VerticalNavbar;