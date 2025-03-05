import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #1a1a1a;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const LastUpdated = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: #2e7d32;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  color: #333;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const PrivacyPage = () => {
  return (
    <Container>
      <Header>
        <Title>Privacy Policy</Title>
        <LastUpdated>Last Updated: January 27, 2025</LastUpdated>
      </Header>

      <Section>
        <SectionTitle>Information We Collect</SectionTitle>
        <Content>
          <p>At C.H.I.R.A.G. CONNECT, we collect and process the following information:</p>
          <ul>
            <li>Basic account information (name, contact details)</li>
            <li>Farm location and size details</li>
            <li>Crop management data</li>
            <li>Service booking history</li>
            <li>Device information and usage analytics</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>How We Use Your Information</SectionTitle>
        <Content>
          <p>Your information helps us provide and improve our agricultural services:</p>
          <ul>
            <li>Facilitate service bookings and drone operations</li>
            <li>Provide personalized crop recommendations</li>
            <li>Improve our platform and services</li>
            <li>Communicate important updates and offers</li>
            <li>Ensure compliance with agricultural regulations</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Data Security</SectionTitle>
        <Content>
          <p>We implement robust security measures to protect your data:</p>
          <ul>
            <li>End-to-end encryption for sensitive information</li>
            <li>Regular security audits and updates</li>
            <li>Secure data storage and backup systems</li>
            <li>Access controls and authentication protocols</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Data Sharing</SectionTitle>
        <Content>
          <p>We share your information only with:</p>
          <ul>
            <li>Authorized service providers and partners</li>
            <li>Regulatory authorities when required by law</li>
            <li>Third-party analytics services (anonymized data only)</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Your Rights</SectionTitle>
        <Content>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request data correction or deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data in a portable format</li>
            <li>Lodge privacy-related complaints</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Content>
          <p>For privacy-related inquiries, contact our Data Protection Officer:</p>
          <p><strong>Email:</strong> privacy@chiragconnect.com</p>
          <p><strong>Phone:</strong> +91 7838750472</p>
          <p><strong>Address:</strong> <br/><span>
          CHIRAG TECHNOLOGIES, i-Hub IIT Mandi & HCI Foundation, VPO Kamand, Himachal Pradesh-175075
            </span><br/><span>CHIRAG TECHNOLOGIES, Saeedpur Khas, Prayagraj, Uttar Pradesh-211011</span><br/><span>CHIRAG TECHNOLOGIES, AwADH IIT Ropar, Rupnagar, Punjab-140001

</span></p>
        </Content>
      </Section>
    </Container>
  );
};

export default PrivacyPage;