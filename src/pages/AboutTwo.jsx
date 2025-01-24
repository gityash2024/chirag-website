import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import manageyourbackgourd from "../assets/manageyourbackgourd.png";
import Playstores from "../assets/Playstores.png";
import supported_1 from "../assets/supported_1.png";
import supported_2 from "../assets/supported_2.png";
import supported_3 from "../assets/supported_3.png";
import supported_4 from "../assets/supported_4.png";
import supported_5 from "../assets/supported_5.png";
import supported_6 from "../assets/supported_6.png";
import supported_7 from "../assets/supported_7.png";
import supported_8 from "../assets/supported_8.png";
import supported_9 from "../assets/supported_9.png";
import supported_10 from "../assets/supported_10.png";
import supported_11 from "../assets/supported_11.png";
import supported_12 from "../assets/supported_12.png";
import contactusbackgroundimage from "../assets/contactusbackgroundimage.jpeg";
import { Plus, Minus } from 'lucide-react';


const Container = styled.div`
  width: 100%;
  background: white;
  overflow: hidden;
`;

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.125rem;
  margin-top: 1rem;
`;

const PlayStoreButton = styled(motion.div)`
  cursor: pointer;
  width: fit-content;
  
  img {
    height: 56px;
    width: auto;
  }
`;

const AppStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #4a5568;
`;

const Stars = styled.div`
  display: flex;
  color: #fbbf24;
  margin-left: 0.5rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  
  img {
    width: 130%;
    max-width: none;
    height: auto;
    display: block;
    margin-left: -15%;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;

const PartnersSection = styled.section`
  background: #f9fafb;
  padding: 4rem 0;
`;

const PartnersContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PartnersHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const PartnersTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const GreenBadge = styled.div`
  background: #dcfce7;
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  color: #166534;
  font-size: 1rem;
  margin-bottom: 3rem;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const PartnerCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
// const Container = styled.div`
//   width: 100%;
//   background: white;
// `;

// FAQ Section Styles
const FAQSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #1a1a1a;
//   margin-bottom: 1rem;
// `;

// const GreenBadge = styled.div`
//   background: #dcfce7;
//   display: inline-block;
//   padding: 0.75rem 2rem;
//   border-radius: 9999px;
//   color: #166534;
//   font-size: 1rem;
//   margin-bottom: 3rem;
// `;

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const FAQHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: white;
`;

const Question = styled.h3`
  font-size: 1.125rem;
  color: #1a1a1a;
  font-weight: 500;
  text-align: left;
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: #4b5563;
  text-align: left;
  line-height: 1.6;
`;

const LoadMoreButton = styled.button`
  background: #1a1a1a;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem auto 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2d2d2d;
  }
`;

// Contact Section Styles
const ContactSection = styled.section`
  position: relative;
  background-image: url(${contactusbackgroundimage});
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  border-radius: 40px;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h4 {
    color: #22c55e;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`;

const SubmitButton = styled.button`
  background: #1a1a1a;
  color: white;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2d2d2d;
  }
`;
const AboutTwo = () => {
  const partners = [
    { id: 1, img: supported_1 },
    { id: 2, img: supported_2 },
    { id: 3, img: supported_3 },
    { id: 4, img: supported_4 },
    { id: 5, img: supported_5 },
    { id: 6, img: supported_6 },
    { id: 7, img: supported_7 },
    { id: 8, img: supported_8 },
    { id: 9, img: supported_9 },
    { id: 10, img: supported_10 },
    { id: 11, img: supported_11 },
    { id: 12, img: supported_12 },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqData = [
    {
      question: "What is C.H.I.R.A.G. CONNECT?",
      answer: "CHIRAG CONNECT is a digital platform that connects farmers, drone service providers (DSPs), and other agricultural stakeholders to streamline services like spraying, sowing, and harvesting. It enables efficient service booking and management with data-driven agronomic insights."
    },
    {
      question: "How does C.H.I.R.A.G. CONNECT work?",
      answer: "The platform connects farmers with service providers, enabling easy booking and management of agricultural services."
    },
    {
      question: "Who can use C.H.I.R.A.G. CONNECT?",
      answer: "Farmers, drone service providers, and agricultural stakeholders can use the platform."
    },
    {
      question: "Do you provide drones or services directly?",
      answer: "We facilitate connections between service providers and farmers but don't provide drones directly."
    },
    {
      question: "How can I book a service through C.H.I.R.A.G. CONNECT?",
      answer: "You can book services through our mobile app or website by selecting your required service and preferred provider."
    },
    {
      question: "Are the drone pilots certified?",
      answer: "Yes, all drone pilots on our platform are certified and comply with regulatory requirements."
    }
  ];

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Section>
        <Grid>
          <Content
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>
              Manage your farm with ease and precision using the C.H.I.R.A.G.
              CONNECT™ mobile app.
            </Title>
            <Subtitle>
              C.H.I.R.A.G. CONNECT™ - "Connecting Farmers, Vendors, and Solutions
              Seamlessly."
            </Subtitle>
            <PlayStoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://play.google.com/store/apps', '_blank')}
            >
              <img src={Playstores} alt="Get it on Google Play" />
            </PlayStoreButton>
            <AppStats>
              <span>50K + Downloads | Rated 4.4</span>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill={i < 4 ? "currentColor" : "none"}
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </Stars>
            </AppStats>
          </Content>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={manageyourbackgourd} alt="App Screenshots" />
          </ImageContainer>
        </Grid>
      </Section>
      
      <FAQSection>
        <Title>Frequently Asked Questions</Title>
        <GreenBadge>See What People Frequently Asked</GreenBadge>
        
        <FAQContainer>
          {visibleFAQs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQHeader onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                <Question>{faq.question}</Question>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </FAQHeader>
              <AnimatePresence>
                {activeIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
        
        {!showAll && (
          <LoadMoreButton onClick={() => setShowAll(true)}>
            Load More <Plus size={16} />
          </LoadMoreButton>
        )}
      </FAQSection>

      <ContactSection>
        <ContactCard>
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <ContactGrid>
            <div>
              <ContactInfo>
                <h4>OFFICE HOURS</h4>
                <p>Monday-Friday<br />8:00 am to 7:00 pm</p>
                
                <h4>OFFICE 2</h4>
                <p>IIT Mandi iHub and HCI Foundation,<br />
                IIT Mandi, VPO Kamand, Himachal Pradesh-175075</p>
                
                <h4>OUR ADDRESS</h4>
                <p>CHIRAG TECHNOLOGIES, Saeedpur Khas,<br />
                Prayagraj, Uttar Pradesh-211012</p>
                
                <h4>GET IN TOUCH</h4>
                <p>+91 7838750472</p>
              </ContactInfo>
            </div>
            
            <ContactForm onSubmit={handleSubmit}>
              <Input 
                type="text" 
                placeholder="Enter your full name" 
                required 
              />
              <Input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <TextArea 
                placeholder="Write us your question here..." 
                required 
              />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactGrid>
        </ContactCard>
      </ContactSection>
    </Container>
  );
};

export default AboutTwo;