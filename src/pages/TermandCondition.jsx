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

const TermAndCondition = () => {
  return (
    <Container>
      <Header>
        <Title>Terms and Conditions</Title>
        <LastUpdated>Last Updated: January 27, 2025</LastUpdated>
      </Header>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Content>
          <p>By accessing and using C.H.I.R.A.G. CONNECT services, you agree to these terms and conditions. These terms govern your use of our platform, including drone services, agricultural solutions, and related features.</p>
        </Content>
      </Section>

      <Section>
        <SectionTitle>2. Service Terms</SectionTitle>
        <Content>
          <p>Our services include:</p>
          <ul>
            <li>Drone-based agricultural services</li>
            <li>Crop monitoring and analysis</li>
            <li>Service provider connections</li>
            <li>Digital payment processing</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>3. User Responsibilities</SectionTitle>
        <Content>
          <ul>
            <li>Provide accurate information during registration</li>
            <li>Maintain confidentiality of account credentials</li>
            <li>Comply with agricultural regulations</li>
            <li>Use services only for lawful purposes</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>4. Service Provider Terms</SectionTitle>
        <Content>
          <ul>
            <li>Maintain valid licenses and certifications</li>
            <li>Follow safety protocols and guidelines</li>
            <li>Provide services as per agreed specifications</li>
            <li>Maintain appropriate insurance coverage</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>5. Payment Terms</SectionTitle>
        <Content>
          <ul>
            <li>Payment processing through secure channels</li>
            <li>Service fees and applicable taxes</li>
            <li>Refund policies for service cancellations</li>
            <li>Payment dispute resolution process</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>6. Liability and Insurance</SectionTitle>
        <Content>
          <p>We maintain comprehensive insurance coverage for drone operations. Users acknowledge:</p>
          <ul>
            <li>Inherent risks in agricultural operations</li>
            <li>Damage liability limitations</li>
            <li>Force majeure conditions</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>7. Data Usage</SectionTitle>
        <Content>
          <p>We collect and process data in accordance with our Privacy Policy, including:</p>
          <ul>
            <li>Farm data collection and storage</li>
            <li>Analysis for service improvement</li>
            <li>Data sharing with authorized partners</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>8. Termination</SectionTitle>
        <Content>
          <p>We reserve the right to terminate services for:</p>
          <ul>
            <li>Violation of terms</li>
            <li>Fraudulent activities</li>
            <li>Non-payment of services</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>9. Contact Information</SectionTitle>
        <Content>
          <p>For inquiries about these terms:</p>
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

export default TermAndCondition;