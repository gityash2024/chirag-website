import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import serviceimage from "../assets/serviceimage.png";
import exploringchiragconnection_1 from "../assets/exploringchiragconnection_1.png";
import exploringchiragconnection_2 from "../assets/exploringchiragconnection_2.png";
import tractor from "../assets/tractor.svg";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import group from "../assets/group.svg";
import chemicals from "../assets/chemicals.svg";
import dronepiolts from "../assets/dronepiolts.svg";
import tailored_1 from "../assets/tailored_1.png";
import tailored_2 from "../assets/tailored_2.png";
import tailored_3 from "../assets/tailored_3.png";
import ourservice from "../assets/ourservices.png";
import OurSerivceTwo from "../pages/OurSerivceTwo";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${serviceimage});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  display: flex;
  align-items: center;
`;
const ExploreSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const ExploreHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const StatusBadge = styled.div`
  background: #f3f4f6;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background: ${(props) => (props.active ? "#dcfce7" : "#f3f4f6")};
  color: ${(props) => (props.active ? "#166534" : "#666")};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#dcfce7" : "#e5e7eb")};
  }
`;

const ExploreContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PhoneImage = styled.div`
  background: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;

  img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: block;
  }
`;

const ContentInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  p {
    color: #4b5563;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: flex-start;

    &:before {
      content: "•";
      color: #166534;
      font-weight: bold;
    }
  }
`;
const BenefitsSection = styled.section`
  padding: 60px 0;
  background: #fff;
`;

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BenefitsHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 8px 20px;
  background: #dcfce7;
  border-radius: 30px;
  color: #166534;
  font-size: 14px;
  margin-bottom: 20px;
`;

const BenefitsTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0;
`;

const BenefitsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BenefitCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  background: #f0fdf4;
  padding: 24px;
  border-radius: 16px;
  max-width: 600px;
  ${(props) => (props.align === "right" ? "margin-left: auto;" : "")}

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
`;

const CardContent = styled.div`
  flex: 1;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 16px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 8px;

    &:before {
      content: "✓";
      color: #166534;
      font-weight: bold;
      margin-top: 2px;
    }
  }
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a1a;
`;

const SliderWrapper = styled.div`
  position: relative;
  padding: 0 40px;
`;

const SliderContainer = styled(motion.div)`
  display: flex;
  gap: 24px;
  align-items: stretch;
`;

const Card = styled(motion.div)`
  flex: 0 0 100%;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex: 0 0 calc(33.333% - 16px);
  }
`;
const ContentContainer = styled.div`
  padding: 24px;
  background: #f8f9fa;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.5;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #166534;
      font-weight: bold;
    }
  }
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #dcfce7;
  color: #166534;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #bbf7d0;
  }
`;

const SliderButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  &:left {
    left: 0;
  }

  &:right {
    right: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const HeroSections = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${ourservice}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  z-index: 2;
`;

const OurService = () => {
  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("farmers");
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefitsData = [
    {
      title: "For Farmers",
      image: tractor,
      align: "left",
      points: [
        "Access affordable spraying, sowing, and harvesting services.",
        "Compare DSP prices and reviews to choose the best option.",
        "AI/ML-based crop recommendations for better yields.",
      ],
    },
    {
      title: "For FPOs and Cooperatives",
      image: group,
      align: "right",
      imageRight: true,
      points: [
        "Provide services to member farmers efficiently.",
        "Monitor service quality and track payments.",
        "Optimize operations with detailed analytics.",
      ],
    },
    {
      title: "For Pesticide /Seed Companies",
      image: chemicals,
      align: "left",
      points: [
        "Promote products directly to target farmers.",
        "Leverage data insights for R&D and marketing.",
        "Contract DSPs for large-scale spraying operations.",
      ],
    },
    {
      title: "For Drone Pilots (DSPs)",
      image: dronepiolts,
      align: "right",
      imageRight: true,
      points: [
        "Reach more farmers and grow your business.",
        "Set competitive pricing and track performance.",
        "Manage services efficiently through a dedicated dashboard.",
      ],
    },
  ];
  const cardData = [
    {
      title: "C.H.I.R.A.G. CONNECT – Farmer App",
      image: tailored_1,
      features: [
        "Book agricultural services like spraying, sowing, and harvesting with ease.",
        "Compare service prices and choose the best-performing vendors near you.",
        "Get AI-powered crop recommendations and insights for better yields.",
      ],
      buttonText: "Get Farmer's App",
    },
    {
      title: "C.H.I.R.A.G. CONNECT – Vendor App",
      image: tailored_2,
      features: [
        "Manage service bookings, track orders, and analyze performance.",
        "Set your own pricing and attract more customers through verified profiles.",
        "Access all tools for real-time updates and efficient service delivery.",
      ],
      buttonText: "Get Vendor's Web App",
    },
    {
      title: "C.H.I.R.A.G. CONNECT – Runner App",
      image: tailored_3,
      features: [
        "Get task assignments and live notifications for upcoming jobs.",
        "Optimize routes and schedules for maximum efficiency.",
        "Seamlessly communicate with vendors and farmers for smooth operations.",
      ],
      buttonText: "Get Runner's App",
    },
  ];
  const slideLeft = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideRight = () => {
    setCurrentSlide((prev) => (prev < cardData.length - 1 ? prev + 1 : prev));
  };

  return (
    <Container>
      <HeroSection>
     
      </HeroSection>

      <ExploreSection>
        <ExploreHeader>
          <StatusBadge>so how does it look ?</StatusBadge>
          <TabContainer>
            <Tab
              active={activeTab === "farmers"}
              onClick={() => setActiveTab("farmers")}
            >
              For Farmers
            </Tab>
            <Tab
              active={activeTab === "vendors"}
              onClick={() => setActiveTab("vendors")}
            >
              For Vendors
            </Tab>
            <Tab
              active={activeTab === "runners"}
              onClick={() => setActiveTab("runners")}
            >
              For Runners
            </Tab>
          </TabContainer>
        </ExploreHeader>

        <ExploreContent>
          <PhoneImage>
            <img src={exploringchiragconnection_1} alt="CHIRAG Connect App" />
          </PhoneImage>
          <ContentInfo>
            <h2>Explore C.H.I.R.A.G. CONNECT</h2>
            <p>
              Gain access to essential services like spraying, sowing, and
              harvesting to streamline farming activities. Receive personalized
              recommendations tailored to your crops and conditions for improved
              yields. Empowering farmers with the right tools and insights for
              better productivity.
            </p>
            <ul>
              <li>Access to services like spraying, sowing, and harvesting.</li>
              <li>Personalized recommendations for better yield.</li>
            </ul>
          </ContentInfo>
        </ExploreContent>
      </ExploreSection>
      <BenefitsSection>
        <BenefitsContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BenefitsHeader>
              <Badge>What do you get ?</Badge>
              <BenefitsTitle>
                Who can benefit from C.H.I.R.A.G CONNECT?
              </BenefitsTitle>
            </BenefitsHeader>
          </motion.div>

          <BenefitsContent>
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                align={benefit.align}
                initial={{
                  opacity: 0,
                  x: benefit.align === "right" ? 100 : -100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {!benefit.imageRight && (
                  <img src={benefit.image} alt={benefit.title} />
                )}
                <CardContent>
                  <h3>{benefit.title}</h3>
                  <ul>
                    {benefit.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
                {benefit.imageRight && (
                  <img src={benefit.image} alt={benefit.title} />
                )}
              </BenefitCard>
            ))}
          </BenefitsContent>
        </BenefitsContainer>
      </BenefitsSection>

      <Title>Access C.H.I.R.A.G. CONNECT – Tailored For Every User</Title>
      <SliderWrapper>
        <SliderButton
          onClick={slideLeft}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ left: 0 }}
        >
          <ChevronLeft size={20} />
        </SliderButton>

        <SliderContainer
          animate={{ x: `${-currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {cardData.map((card, index) => (
            <Card key={index}>
              <ImageContainer>
                <img src={card.image} alt={card.title} />
              </ImageContainer>
              <ContentContainer>
                <CardTitle>{card.title}</CardTitle>
                <FeatureList>
                  {card.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </FeatureList>
                <ActionButton
                 onClick={() => navigate("/")}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {card.buttonText}
                  <ArrowRight size={18} />
                </ActionButton>
              </ContentContainer>
            </Card>
          ))}
        </SliderContainer>

        <SliderButton
          onClick={slideRight}
          disabled={currentSlide === cardData.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ right: 0 }}
        >
          <ChevronRight size={20} />
        </SliderButton>
      </SliderWrapper>
      <HeroSections>
        <ImageContainer>
          <img src={ourservice} alt="Hero" style={{ visibility: "hidden" }} />
        </ImageContainer>
      </HeroSections>

      < OurSerivceTwo/>
    </Container>
  );
};

export default OurService;
