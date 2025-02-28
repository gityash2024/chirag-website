import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import chiraglogo from "../assets/chiraglogo.png";
import connectingtechnlogy from "../assets/connectingtechnlogy.png";
import chiragbackgroundimage from "../assets/chiragbackgroundimage.png";
import farmers from "../assets/farmers.png";
import calender from "../assets/calender.png";
import setting from "../assets/setting.png";
import download from "../assets/download.png";
import database from "../assets/database.png";
import flexibility from "../assets/flexibility.png";
import drop from "../assets/drop.png";
import grow from "../assets/grow.png";
import vendor from "../assets/vendor.png";
import prices from "../assets/prices.png";
import filedtested from "../assets/filedtested.png";
import effortless from "../assets/effortless.png";
import HomeTwo from "../pages/HomeTwo";
import HomeThree from "../pages/HomeThree";
import HomeFour from "../pages/HomeFour";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url(${chiragbackgroundimage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px 5%;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 15px;
  max-width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

const Title = styled.h1`
  color: #4CAF50;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TechnologyIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.p`
  color: rgb(75, 85, 99);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ContactButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.95rem;
  &:hover {
    background-color: #2c2c2c;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ArrowIcon = styled.span`
  margin-left: 0.5rem;
`;

const StatsContainer = styled.div`
  margin-top: 2rem;
`;

const StatItem = styled.div`
  margin-bottom: 0.75rem;
  background-color: rgba(76, 175, 80, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #2e7d32;
`;

const StatValue = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const StatLabel = styled.span`
  color: #2e7d32;
`;

const FeaturesSection = styled.section`
  padding: 4rem 5%;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 2rem 20px;
  }
`;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const featureTitleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6 }
  }
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#c8e6c9",
    transition: { duration: 0.3 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5 }
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.6 }
  }
};

const MotionFeatureTitle = motion.h2;
const MotionStandOutButton = motion.button;
const MotionFeatureCard = motion(styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`);

const MotionFarmerImage = motion(styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`);

const MotionDroneImage = motion(styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
`);

const MotionSectionTitle = motion.h3;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StandOutButton = styled.button`
  display: block;
  margin: 0 auto 3rem;
  padding: 0.5rem 1.5rem;
  background-color: #e8f5e9;
  color: #2e7d32;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #c8e6c9;
  }
`;

const FarmerSection = styled.div`
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: row; 
    align-items: center;
  }
`;

const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const AdditionalFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MotionDroneServiceSection = motion(styled.div`
  margin-bottom: 3rem;
`);

const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  return { ref, controls, inView };
};

const Home = () => {
  const navigate = useNavigate();
  const stats = [
    { value: "25%", label: "Increase in crop yield" },
    { value: "1000+", label: "successful service bookings completed" },
    { value: "20%", label: "Cost reductions" }
  ];

  const farmerFeatures = [
    {
      title: "Streamlined Service Booking",
      description: "Quick and easy access to agricultural services—book from anywhere!",
      icon: calender
    },
    {
      title: "AI/ML-Powered Recommendation",
      description: "Personalized crop insights for better decision-making.",
      icon: setting
    }
  ];

  const additionalFeatures = [
    {
      title: "Compare and Save",
      description: "View and compare prices from multiple DSPs for services like spraying and harvesting.",
      icon: download
    },
    {
      title: "Transparency Through Data",
      description: "Monitor service performance and payment history with ease.",
      icon: database
    },
    {
      title: "Flexibility",
      description: "Schedule services at your convenience with complete control over timing.",
      icon: flexibility
    }
  ];

  const droneFeatures = [
    {
      title: "Grow Across India",
      description: "Reach a larger audience for your business and manage agri-service tasks with flexible timings.",
      icon: grow
    },
    {
      title: "Vendor Dashboard",
      description: "Track orders, manage availability, and analyze performance effortlessly.",
      icon: vendor
    },
    {
      title: "Set Your Own Prices",
      description: "Control your pricing and attract more customers.",
      icon: prices
    },
    {
      title: "Field-Tested Reliability",
      description: "Reach a larger audience and manage tasks with flexible timing.",
      icon: filedtested
    },
    {
      title: "Effortless Payment System",
      description: "Use a credit-based wallet for smooth transactions and order fulfillment.",
      icon: effortless
    }
  ];

  const whyChooseSectionAnimation = useScrollAnimation();
  const droneServiceSectionAnimation = useScrollAnimation();

  return (
    <Container>
      <HeroSection>
        <ContentCard>
          <Logo src={chiraglogo} alt="CHIRAG Logo" />
          <Title>
            Connecting Agriculture with Technology
            <TechnologyIcon src={connectingtechnlogy} alt="Technology Icon" />
          </Title>
          <Subtitle>
            C.H.I.R.A.G. CONNECT™
            <br />
            Connecting Farmers, Vendors, and Solutions Seamlessly.
          </Subtitle>
          <ContactButton onClick={() => navigate("/contact")}>
            Contact Us Now
            <ArrowIcon>→</ArrowIcon>
          </ContactButton>
          <StatsContainer>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsContainer>
        </ContentCard>
      </HeroSection>

      <FeaturesSection>
        <motion.div
          ref={whyChooseSectionAnimation.ref}
          initial="hidden"
          animate={whyChooseSectionAnimation.controls}
          variants={sectionVariants}
        >
          <MotionFeatureTitle 
            variants={featureTitleVariants}
            style={{ 
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 600,
              color: "#1a1a1a",
              marginBottom: "1rem"
            }}
          >
            Why Choose C.H.I.R.A.G CONNECT?
          </MotionFeatureTitle>
          
          <MotionStandOutButton
            variants={buttonVariants}
            whileHover="hover"
            style={{
              display: "block",
              margin: "0 auto 3rem",
              padding: "0.5rem 1.5rem",
              backgroundColor: "#e8f5e9",
              color: "#2e7d32",
              border: "none",
              borderRadius: "20px",
              fontSize: "0.9rem",
              cursor: "pointer"
            }}
          >
            See What Makes Us Stand Out
          </MotionStandOutButton>

          <FarmerSection>
            <SectionTitle>For Farmers</SectionTitle>
            <FeaturesGrid>
              <MotionFarmerImage 
                src={farmers} 
                alt="Farmer" 
                variants={imageVariants}
              />
              {farmerFeatures.map((feature, index) => (
                <MotionFeatureCard 
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <FeatureHeader>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureIcon src={feature.icon} alt={feature.title} />
                  </FeatureHeader>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </MotionFeatureCard>
              ))}
            </FeaturesGrid>
          </FarmerSection>

          <AdditionalFeaturesGrid>
            {additionalFeatures.map((feature, index) => (
              <MotionFeatureCard 
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <FeatureHeader>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureIcon src={feature.icon} alt={feature.title} />
                </FeatureHeader>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </MotionFeatureCard>
            ))}
          </AdditionalFeaturesGrid>
        </motion.div>

        <MotionDroneServiceSection
          ref={droneServiceSectionAnimation.ref}
          initial="hidden"
          animate={droneServiceSectionAnimation.controls}
          variants={sectionVariants}
        >
          <MotionSectionTitle
            variants={featureTitleVariants}
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "2rem",
              color: "#1a1a1a"
            }}
          >
            For Drone Service <br /> Providers
          </MotionSectionTitle>
          
          <FeaturesGrid>
            <MotionDroneImage 
              src={drop} 
              alt="Drone Service" 
              variants={imageVariants}
            />
            {droneFeatures.map((feature, index) => (
              <MotionFeatureCard 
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <FeatureHeader>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureIcon src={feature.icon} alt={feature.title} />
                </FeatureHeader>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </MotionFeatureCard>
            ))}
          </FeaturesGrid>
        </MotionDroneServiceSection>
      </FeaturesSection>

      <HomeTwo />
      <HomeThree />
      <HomeFour />
    </Container>
  );
};

export default Home;