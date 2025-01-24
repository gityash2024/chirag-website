import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Playstores from "../assets/Playstores.png";
import manageyourbackgourd from "../assets/manageyourbackgourd.png";
import contactusbackgroundimage from "../assets/contactusbackgroundimage.jpeg";


const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AppInfo = styled(motion.div)`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .app-stats {
    margin: 1.5rem 0;
    font-size: 0.9rem;
  }

  .rating {
    color: #FFD700;
  }
`;

const AppPreview = styled(motion.div)`
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContactSection = styled.section`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactInfo = styled.div`
  h4 {
    color: #16a34a;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  width: 100%;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  background: #1a1a1a;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #333;
  }
`;

const OurServiceTwo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('YOUR_GOOGLE_SHEET_WEB_APP_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };
  function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return (
    <Container>
      <Section>
        <AppInfo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Manage your farm with ease and precision using the C.H.I.R.A.G CONNECT™ mobile app.</h2>
          <img src={Playstores} alt="Get it on Google Play" style={{ maxWidth: "200px" }} />
          <div className="app-stats">
            <p>C.H.I.R.A.G. CONNECT™ - "Connecting Farmers, Vendors, and Solutions Seamlessly."</p>
            <p>50K + Downloads | Rated 4.4 <span className="rating">★★★★☆</span></p>
          </div>
        </AppInfo>
        
        <AppPreview
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={manageyourbackgourd} alt="App Preview" />
        </AppPreview>
      </Section>

      <ContactSection bgImage={contactusbackgroundimage}>
        <ContactCard>
          <h2 style={{ marginBottom: "2rem" }}>Contact Us</h2>
          
          <ContactGrid>
            <ContactInfo>
              <h4>OFFICE HOURS</h4>
              <p>Monday-Friday<br />9:00 am to 7:00 pm</p>
              
              <h4>OFFICES</h4>
              <p>IIT Mandi-Ihub and HCI Foundation,<br />
              IIT Mandi, VPO Kamand, Himachal Pradesh-175075</p>
              
              <h4>OUR ADDRESS</h4>
              <p>CHIRAG TECHNOLOGIES, Seedpur Khas,<br />
              Prayagraj, Uttar Pradesh-211012</p>
              
              <h4>GET IN TOUCH</h4>
              <p>+91 7838750472</p>
            </ContactInfo>

            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <TextArea
                placeholder="Write us your question here..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          </ContactGrid>
        </ContactCard>
      </ContactSection>
    </Container>
  );
};

export default OurServiceTwo;