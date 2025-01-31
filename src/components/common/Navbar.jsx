import React, { useState } from 'react';
import styled from 'styled-components';
import chirag_logo from "../../assets/chirag_logo.svg";
import { Circle, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.71);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
  max-height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    right: 0;
    top: 0;
    width: 100%;
    border-radius: 0;
    padding: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: ${props => props.$isOpen ? '1.5rem' : '0'};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #4B5563;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
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

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4B5563;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  padding-left: 1.5rem;

  &:hover {
    color: #111827;
  }

  ${props => props.$isActive && `
    color: #111827;
    font-weight: 500;
  `}

  .circle-icon {
    position: absolute;
    left: ${props => props.$isActive ? '0' : '-0.5rem'};
    opacity: ${props => props.$isActive ? '1' : '0'};
    transition: all 0.3s ease;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'grid' : 'none'};
  }
`;

const GridItem = styled.span`
  color: #D1D5DB;
  font-size: 0.75rem;
  user-select: none;
`;

const VerticalNavbar = ({ 
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/ourservice" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuToggle>
      
      <LogoWrapper $isOpen={isOpen}>
        <Logo src={chirag_logo} alt="CHIRAG CONNECT" />
      </LogoWrapper>
      
      <Nav $isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <NavLink 
            key={index} 
            onClick={() => handleNavClick(item.href)}
            $isActive={location.pathname === item.href}
          >
            <Circle 
              size={16} 
              className="circle-icon fill-current"
            />
            {item.label}
          </NavLink>
        ))}
      </Nav>

      <GridContainer $isOpen={isOpen}>
        {Array(60).fill(null).map((_, i) => (
          <GridItem key={i}>+</GridItem>
        ))}
      </GridContainer>
    </NavbarContainer>
  );
};

export default VerticalNavbar;