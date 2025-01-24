import React from 'react';
import styled from 'styled-components';
import Playstores from "../../assets/Playstores.png";
import { Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';

const FooterContainer = styled.footer`
  background: #E1F0D1;
  padding: 4rem 2rem 2rem;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const BrandText = styled.div`
  h2 {
    font-weight: 600;
    font-size: 1.2rem;
  }
  p {
    font-size: 0.9rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: inherit;
        text-decoration: none;
        font-size: 0.9rem;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SocialSection = styled(FooterSection)`
  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .social-icon {
    background: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: #555;
    }
  }

  .playstore-button {
    display: block;
    max-width: 180px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterSection>
            <LogoSection>
              <X size={24} />
              <BrandText>
                <h2>C.H.I.R.A.G.</h2>
                <p>CONNECT</p>
              </BrandText>
            </LogoSection>
          </FooterSection>

          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">CC Impact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>For Farmers</h3>
            <ul>
              <li><a href="#">CC Testimonials</a></li>
              <li><a href="#">Download Farmer App</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>For Vendors</h3>
            <ul>
              <li><a href="#">Register as CC Vendor</a></li>
            </ul>
          </FooterSection>

          <SocialSection>
            <h3>Social Links</h3>
            <div className="social-icons">
              <Facebook className="social-icon" size={20} />
              <Instagram className="social-icon" size={20} />
              <Linkedin className="social-icon" size={20} />
              <Twitter className="social-icon" size={20} />
            </div>
            <a href="#" className="playstore-button">
              <img src={Playstores} alt="Get it on Google Play" />
            </a>
          </SocialSection>
        </FooterContent>

        <FooterBottom>
          <div>
            Copyright © {currentYear} C.H.I.R.A.G Technologies. All Rights Reserved
          </div>
          <div>
            Web Design by colladome.com
          </div>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;