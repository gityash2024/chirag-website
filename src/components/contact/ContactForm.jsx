import { useState } from "react";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import contactusbackgroundimage from "../../assets/contactusbackgroundimage.jpeg";

const Container = styled.div`
  background-image: url(${contactusbackgroundimage});
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.5rem;
    border: 2px solid transparent;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2)) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoSection = styled.div`
  h4 {
    color: #16a34a;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  p {
    color: #4b5563;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2c2c2c;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Contact Us</Title>
        
        <InfoGrid>
          <InfoSection>
            <h4>OFFICE HOURS</h4>
            <p>Monday-Friday<br />9:00 am to 7:00 pm</p>
            
            <h4>OFFICES</h4>
            <p>IIT Mandi-Ihub and HCI Foundation,<br />
            IIT Mandi, VPO Kamand, Himachal Pradesh-175075</p>
          </InfoSection>

          <InfoSection>
            <h4>OUR ADDRESS</h4>
            <p>CHIRAG TECHNOLOGIES, Seedpur Khas,<br />
            Prayagraj, Uttar Pradesh-211012</p>
            
            <h4>GET IN TOUCH</h4>
            <p>+91 7838750472</p>
          </InfoSection>
        </InfoGrid>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </InputGroup>

          <InputGroup>
            <TextArea
              placeholder="Write us your question here..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </InputGroup>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactForm;