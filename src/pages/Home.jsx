import React from "react";
import styled from "styled-components";
import chiraglogo from "../assets/chiraglogo.png";
import backgroud_1 from "../assets/backgroud_1.png";
import backgroud_2 from "../assets/backgroud_2.png";
import backgroud_3 from "../assets/backgroud_3.png";
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
  height: 100vh;
  background-image: url(${chiragbackgroundimage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 5%;
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 15px;
  max-width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #4CAF50;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
`;

const FeatureTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
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

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FarmerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FeatureIcon = styled.img`
  width: 24px;
  height: 24px;
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
`;

const DroneServiceSection = styled.div`
  margin-bottom: 3rem;
`;

const DroneImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const Home = () => {
  const navigate=useNavigate();
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
        <FeatureTitle>Why Choose C.H.I.R.A.G CONNECT?</FeatureTitle>
        <StandOutButton>See What Makes Us Stand Out</StandOutButton>

        <FarmerSection>
          <SectionTitle>For Farmers</SectionTitle>
          <FeaturesGrid>
            <FarmerImage src={farmers} alt="Farmer" />
            {farmerFeatures.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureHeader>
                  <FeatureIcon src={feature.icon} alt={feature.title} />
                  <FeatureTitle>{feature.title}</FeatureTitle>
                </FeatureHeader>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FarmerSection>

        <AdditionalFeaturesGrid>
          {additionalFeatures.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureHeader>
                <FeatureIcon src={feature.icon} alt={feature.title} />
                <FeatureTitle>{feature.title}</FeatureTitle>
              </FeatureHeader>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </AdditionalFeaturesGrid>

        <DroneServiceSection>
          <SectionTitle>For Drone Service <br /> Providers</SectionTitle>
          <FeaturesGrid>
            <DroneImage src={drop} alt="Drone Service" />
            {droneFeatures.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureHeader>
                  <FeatureIcon src={feature.icon} alt={feature.title} />
                  <FeatureTitle>{feature.title}</FeatureTitle>
                </FeatureHeader>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </DroneServiceSection>
      </FeaturesSection>

      <HomeTwo />

      <HomeThree />

      <HomeFour />
    </Container>
  );
};

export default Home;