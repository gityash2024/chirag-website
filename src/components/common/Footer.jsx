import React from 'react';
import styled from 'styled-components';
import chirag_logo from "../../assets/chirag_logo.svg";
import Playstores from "../../assets/Playstores.png";
import { Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import { Link, useNavigate } from 'react-router-dom';

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

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  padding-right: 35px;
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
const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterSection>
            <LogoSection>
              <LogoSection>
                <LogoImage src={chirag_logo} alt="CHIRAG CONNECT" />
              </LogoSection>
            </LogoSection>
          </FooterSection>

          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><a onClick={() => navigate("/about")}>About Us</a></li>
              <li><a onClick={() => navigate("/terms")}>Terms & Conditions</a></li>
              <li><a onClick={() => navigate("/privacy")}>Privacy Policy</a></li>
              <li><a onClick={() => navigate("/")}>CC Impact</a></li>
              <li><a onClick={() => navigate("/")}>Careers</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>For Farmers</h3>
            <ul>
              <li><a onClick={() => navigate("/")}>CC Testimonials</a></li>
              <li><a onClick={() => navigate("/")}>Download Farmer App</a></li>
              <li><a onClick={() => navigate("/contact")}>Contact Us</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>For Vendors</h3>
            <ul>
              <li><a onClick={() => navigate("/")}>Register as CC Vendor</a></li>
            </ul>
          </FooterSection>

          <SocialSection>
            <h3>Social Links</h3>
            <div className="social-icons">
  <SocialIcon src={facebook} alt="Facebook" />
  <SocialIcon src={insta} alt="Instagram" />
  <SocialIcon src={linkedin} alt="LinkedIn" />
  <SocialIcon src={twitter} alt="Twitter" />
</div>
            <a onClick={() => navigate("/")} className="playstore-button">
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