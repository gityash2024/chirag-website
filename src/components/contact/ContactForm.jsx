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
`;

const CompanyHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const CompanyName = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #16a34a;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
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
  z-index: 1;
  position: relative;

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
  z-index: 1;
  position: relative;

  &:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
  }
`;

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
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
  z-index: 1;
  position: relative;

  &:hover {
    background: #2c2c2c;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
        valid = false;
      }
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors({...errors, name: ""});
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({...errors, email: ""});
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors({...errors, message: ""});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Form data to be submitted
      const formData = {
        name,
        email,
        message
      };
      
      // Print form data to console (as requested)
      console.log("Form submitted with data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Message sent successfully!");
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <CompanyHeader>
          <CompanyName>SVRC TECHNO INNOVATIONS PRIVATE LIMITED</CompanyName>
        </CompanyHeader>
        <Title>Contact Us</Title>
        
        <InfoGrid>
          <InfoSection>
            <h4>GET IN TOUCH</h4>
            <p>+91 7838750472</p> 
            <h4>OUR ADDRESS</h4>
            <p>CHIRAG TECHNOLOGIES, Seedpur Khas,<br />
            Prayagraj, Uttar Pradesh-211012</p>
          </InfoSection>
          <InfoSection>
            <h4>OFFICE HOURS</h4>
            <p>Monday-Friday<br />9:00 am to 7:00 pm</p>
            <h4>OFFICES</h4>
            <p>IIT Mandi-Ihub and HCI Foundation,<br />
            IIT Mandi, VPO Kamand, Himachal Pradesh-175075</p>
          </InfoSection>
        </InfoGrid>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={handleNameChange}
              autoComplete="name"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="email"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <TextArea
              placeholder="Write us your question here..."
              value={message}
              onChange={handleMessageChange}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
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