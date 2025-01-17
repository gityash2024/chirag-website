import React, { useState } from "react";
import styled from "styled-components";
import farmer_1 from "../assets/farmer_1.png";
import farmer_2 from "../assets/farmer_2.png";
import farmer_3 from "../assets/farmer_3.png";
import farmer_4 from "../assets/farmer_4.png";
import drop_1 from "../assets/drop_1.png";
import drop_2 from "../assets/drop_2.png";
import drop_3 from "../assets/drop_3.png";
import drop_4 from "../assets/drop_4.png";
import drop_5 from "../assets/drop_5.png";
import transformingagriculturebackground from "../assets/transformingagriculturebackground.png";
import acres from "../assets/acres.png";
import Framers from "../assets/Framers.png";
import water from "../assets/water.png";
import chemical from "../assets/chemical.png";
import co from "../assets/co.png";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
const WorksTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 50px;
`;
const Column = styled.div`
  flex: 1;
`;

const ImpactSection = styled.div`
  background-image: url(${transformingagriculturebackground});
  background-size: cover;
  background-position: center;
  padding: 60px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
  }
`;

const ImpactContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const ImpactTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
`;

const ImpactSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsCard = styled.div`
  background: ${props => `rgba(76, 175, 80, ${0.1 + props.index * 0.05})`};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StatInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StatIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const StatText = styled.div``;

const StatTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
`;

const StatDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const StatValue = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #4CAF50;
`;
const WorksSection = styled.div`
  background-color: rgba(220, 237, 200, 0.3);
  padding: 80px 0;
  border-radius: 300px 300px 0 0;
  margin-top: 40px;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;
const StepIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const StepDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#4CAF50' : '#ddd'};
  transition: all 0.3s ease;
  cursor: pointer;
`;

const CategoryTitle = styled.h3`
  background-color: #1a1a1a;
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 500;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const WorksContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const Slide = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepNumber = styled.div`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
`;

const StepTitle = styled.h4`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 30px;
  font-weight: 500;
`;

const StepImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: auto;
  object-fit: contain;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  &.prev {
    left: -25px;
  }

  &.next {
    right: -25px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2;
  }
`;
const HomeTwo = () => {
    const [farmerCurrentStep, setFarmerCurrentStep] = useState(0);
    const [droneCurrentStep, setDroneCurrentStep] = useState(0);
  
    const farmerSteps = [
      { image: farmer_1, title: "Log In", step: "Step 1" },
      { image: farmer_2, title: "Book Service", step: "Step 2" },
      { image: farmer_3, title: "Receive Assistance", step: "Step 3" },
      { image: farmer_4, title: "Provide Feedback", step: "Step 4" }
    ];
  
    const droneSteps = [
      { image: drop_1, title: "Sign Up", step: "Step 1" },
      { image: drop_2, title: "Set Availability", step: "Step 2" },
      { image: drop_3, title: "Receive Orders", step: "Step 3" },
      { image: drop_4, title: "Complete Task", step: "Step 4" },
      { image: drop_5, title: "Get Paid", step: "Step 5" }
    ];
  
    const handlePrev = (type) => {
      if (type === 'farmer') {
        setFarmerCurrentStep(prev => 
          prev === 0 ? farmerSteps.length - 1 : prev - 1
        );
      } else {
        setDroneCurrentStep(prev => 
          prev === 0 ? droneSteps.length - 1 : prev - 1
        );
      }
    };
  
    const handleNext = (type) => {
      if (type === 'farmer') {
        setFarmerCurrentStep(prev => 
          prev === farmerSteps.length - 1 ? 0 : prev + 1
        );
      } else {
        setDroneCurrentStep(prev => 
          prev === droneSteps.length - 1 ? 0 : prev + 1
        );
      }
    };
    const ArrowLeft = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      
      const ArrowRight = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      

  const impactStats = [
    { icon: acres, title: "Acres Sprayed", value: "10,000+", description: "Over 10,000 acres sprayed." },
    { icon: Framers, title: "Farmers And Cooperatives Served", value: "5,000+", description: "farmers and cooperatives connected through the platform." },
    { icon: water, title: "Water Saved", value: "30%", description: "water saved per acre with precision spraying." },
    { icon: chemical, title: "Chemical Usage Reduced", value: "15%", description: "reduction in chemical usage, improving environmental safety." },
    { icon: co, title: "CO2 Emissions Reduced", value: "10 Tons", description: "tons of CO2 saved through efficient drone operations." }
  ];

  return (
    <Container>
    <WorksSection>
      <WorksTitle>How C.H.I.R.A.G. CONNECT™ Works</WorksTitle>
      <WorksContent>
        <Column>
          <CategoryTitle>For Farmers</CategoryTitle>
          <SliderContainer>
  <NavigationButton className="prev" onClick={() => handlePrev('farmer')}>
    <ArrowLeft />
  </NavigationButton>
  <Slide>
    <StepNumber>{farmerSteps[farmerCurrentStep].step}</StepNumber>
    <StepTitle>{farmerSteps[farmerCurrentStep].title}</StepTitle>
    <StepImage 
      src={farmerSteps[farmerCurrentStep].image} 
      alt={farmerSteps[farmerCurrentStep].title} 
    />
  </Slide>
  <NavigationButton className="next" onClick={() => handleNext('farmer')}>
    <ArrowRight />
  </NavigationButton>
  <StepIndicators>
    {farmerSteps.map((_, index) => (
      <StepDot 
        key={index} 
        active={index === farmerCurrentStep}
        onClick={() => setFarmerCurrentStep(index)}
      />
    ))}
  </StepIndicators>
</SliderContainer>

        </Column>

        <Column>
  <CategoryTitle>For Drone Service Providers</CategoryTitle>
  <SliderContainer>
    <NavigationButton className="prev" onClick={() => handlePrev('drone')}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </NavigationButton>
    <Slide>
      <StepNumber>{droneSteps[droneCurrentStep].step}</StepNumber>
      <StepTitle>{droneSteps[droneCurrentStep].title}</StepTitle>
      <StepImage 
        src={droneSteps[droneCurrentStep].image} 
        alt={droneSteps[droneCurrentStep].title} 
      />
    </Slide>
    <NavigationButton className="next" onClick={() => handleNext('drone')}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </NavigationButton>
    <StepIndicators>
      {droneSteps.map((_, index) => (
        <StepDot 
          key={index} 
          active={index === droneCurrentStep}
          onClick={() => setDroneCurrentStep(index)}
        />
      ))}
    </StepIndicators>
  </SliderContainer>
</Column>

      </WorksContent>
    </WorksSection>


      <ImpactSection>
        <ImpactContent>
          <ImpactTitle>Transforming Agriculture, One Spray At A Time.</ImpactTitle>
          <ImpactSubtitle>
            C.H.I.R.A.G. CONNECT™ is redefining agricultural services with measurable results that
            benefit farmers, vendors, and the environment.
          </ImpactSubtitle>
          
          {impactStats.map((stat, index) => (
            <StatsCard key={index} index={index}>
              <StatInfo>
                <StatIcon src={stat.icon} alt={stat.title} />
                <StatText>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatDescription>{stat.description}</StatDescription>
                </StatText>
              </StatInfo>
              <StatValue>{stat.value}</StatValue>
            </StatsCard>
          ))}
        </ImpactContent>
      </ImpactSection>
    </Container>
  );
};

export default HomeTwo;