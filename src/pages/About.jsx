import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import chiragbackgroundimage from "../assets/chiragbackgroundimage.png";
import acres_1 from "../assets/acres_1.png";
import acres_2 from "../assets/acres_2.png";
import acres_3 from "../assets/acres_3.png";
import acres_4 from "../assets/acres_4.png";
import acres_5 from "../assets/acres_5.png";
import acres_6 from "../assets/acres_6.png";
import acres_7 from "../assets/acres_7.png";
import acres_8 from "../assets/acres_8.png";
import acres_9 from "../assets/acres_9.png";
import acres_10 from "../assets/acres_10.png";
import chiragtechnologies from "../assets/chiragtechnologies.png";
import nextchirag from "../assets/nextchirag.png";
import  recognition_1 from "../assets/recognition_1.png";
import recognition_2 from "../assets/recognition_2.png";
import AboutTwo from "../pages/AboutTwo";



const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${chiragbackgroundimage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TransformSection = styled.section`
  padding: 80px 0;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const TransformContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 2rem;
  }
`;

// const SliderContainer = styled.div`
//   position: relative;
//   background: #f8f9fa;
//   border-radius: 20px;
//   padding: 1.5rem;
//   overflow: hidden;
// `;

// const SlideImage = styled(motion.img)`
//   width: 100%;
//   height: 300px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const SliderButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: white;
//   border: 1px solid #e5e7eb;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 2;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #f3f4f6;
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   &.prev {
//     left: 1rem;
//   }

//   &.next {
//     right: 1rem;
//   }
// `;
// const Section = styled.section`
//   padding: 80px 0;
//   max-width: 1280px;
//   margin: 0 auto;
// `;

const TopCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 18px;
    color: #4b5563;
    line-height: 1.6;
  }
`;

const BottomSection = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 18px;
    color: #4b5563;
    max-width: 800px;
    margin: 0 auto 3rem;
  }
`;

const FeatureSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 18px;
    color: #1a1a1a;

    &:before {
      content: "✓";
      color: #16a34a;
      font-weight: bold;
    }
  }
`;

const FeatureImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &:after {
    content: "Revolutionizing Agriculture with AI-Driven Precision Spraying";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 1rem;
    font-size: 16px;
  }
`;
const Section = styled.section`
  padding: 60px 0;
  background: #fafafa;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    color: #666;
    font-size: 18px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

const SlideWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const SliderButton = styled.button`
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
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: -20px;
  }

  &.next {
    right: -20px;
  }
`;
const SlidesWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
const SlideItem = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
    display: block;
  }
`;

const HeroWithSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPair, setCurrentPair] = useState(0);

  const slides = [
    acres_1, acres_2, acres_3, acres_4, acres_5,
    acres_6, acres_7, acres_8, acres_9, acres_10
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  
  const slide = [
    [recognition_1, recognition_2],
    [recognition_2, recognition_1] // You can add more pairs here
  ];

  const nextSlide_1 = () => {
    setCurrentPair((prev) => (prev + 1) % slide.length);
  };

  const prevSlide_1 = () => {
    setCurrentPair((prev) => (prev - 1 + slide.length) % slide.length);
  };
  return (
    <>
      <HeroSection>
        <BackgroundImage />
      </HeroSection>

      <TransformSection>
        <TransformContent>
          <TextContent>
            <h2>Transforming Indian Agriculture – One Drone At A Time</h2>
            <p>With A Focus On Innovation And Sustainability, We Have Achieved Remarkable Milestones</p>
          </TextContent>

          <SliderContainer>
            <AnimatePresence mode="wait">
              <SlideImage
                key={currentSlide}
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <SliderButton 
              className="prev" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} />
            </SliderButton>
            <SliderButton 
              className="next" 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight size={20} />
            </SliderButton>
          </SliderContainer>
        </TransformContent>
        <TopCard>
        <ImageContainer>
          <img src={chiragtechnologies} alt="CHIRAG Technologies" />
        </ImageContainer>
        <ContentContainer>
          <h2>C.H.I.R.A.G. Technologies - The Agriculture Drone Intelligence Company</h2>
          <p>
            At CHIRAG Technologies, We Are Redefining Indian Agriculture Through Cutting-Edge Innovation. 
            With A Mission To Revolutionize Drone Spraying Services, We Combine Robotics, Automation, 
            And AI To Bring Smarter, Sustainable Solutions To Farmers And Agribusinesses.
          </p>
        </ContentContainer>
      </TopCard>

      <BottomSection>
        <h2>What's Next For CHIRAG Technologies</h2>
        <p>
          We are working to revolutionize precision agriculture through "CHIRAG CONNECT.AI", an
          AI-driven platform for data insights and precision spraying
        </p>

        <FeatureSection>
          <FeatureList>
            <ul>
              <li>AI/ML-powered disease detection and yield prediction.</li>
              <li>UAV imaging for optimized crop protection.</li>
              <li>Smart farming insights using translational research.</li>
            </ul>
          </FeatureList>
          <FeatureImage>
            <img src={nextchirag} alt="Next CHIRAG" />
          </FeatureImage>
        </FeatureSection>
      </BottomSection>
      <Header>
          <h2>Recognition, Achievements & Awards</h2>
          <p>C.H.I.R.A.G. Technologies is Recognized by Leaders in Technology and Innovation</p>
        </Header>

        <SliderContainer>
          <SliderButton 
            className="prev" 
            onClick={prevSlide_1} 
            disabled={currentPair === 0}
          >
            <ChevronLeft size={20} />
          </SliderButton>

          <AnimatePresence mode="wait">
            <SlidesWrapper
              key={currentPair}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {slide[currentPair].map((slide, index) => (
                <SlideItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={slide} alt={`Recognition ${currentPair * 2 + index + 1}`} />
                </SlideItem>
              ))}
            </SlidesWrapper>
          </AnimatePresence>

          <SliderButton 
            className="next" 
            onClick={nextSlide_1} 
            disabled={currentPair === slide.length - 1}
          >
            <ChevronRight size={20} />
          </SliderButton>
        </SliderContainer>


      </TransformSection>

      < AboutTwo/>

    </>
  );
};

export default HeroWithSlider;