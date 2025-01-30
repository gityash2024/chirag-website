import React, { useState, useRef } from 'react';
import styled from "styled-components";
import exploredronebackground from "../assets/exploredronebackground.png";
import exploredrone_1 from "../assets/exploredrone_1.png";
import exploredrone_2 from "../assets/exploredrone_2.png";
import exploredrone_3 from "../assets/exploredrone_3.png";
import exploredrone_4 from "../assets/exploredrone_4.png";
import exploredrone_5 from "../assets/exploredrone_5.png";
import exploredrone_6 from "../assets/exploredrone_6.png";
import compreshensive_1 from "../assets/compreshensive_1.svg";
import compreshensive_2 from "../assets/compreshensive_2.svg";
import compreshensive_3 from "../assets/compreshensive_3.svg";
import compreshensive_4 from "../assets/compreshensive_4.svg";
import compreshensive_5 from "../assets/compreshensive_5.svg";
import compreshensive_6 from "../assets/compreshensive_6.svg";
import testimonial_1 from "../assets/testimonial_1.png";
import testimonial_2 from "../assets/testimonial_2.png";
import testimonial_3 from "../assets/testimonial_3.png";


const Container = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: ${props => props.hasSubtitle ? '15px' : '50px'};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  max-width: 800px;
  margin: 0 auto 50px;
`;

const DroneSliderContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const DroneSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DroneCard = styled.div`
  flex: 0 0 auto;
  width: 380px;
  margin-right: 20px;
  background: #f9f9f9;
  border-radius: 15px;
  overflow: hidden;
  scroll-snap-align: start;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }
`;

const DroneImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DroneContent = styled.div`
  padding: 20px;
`;

const DroneTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #666;

  &:before {
    content: "✓";
    color: #4CAF50;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const PaginationDot = styled.div`
  width: ${props => props.active ? '20px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background-color: ${props => props.active ? '#000000' : '#D0D0D0'};
  transition: all 0.3s ease;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 50px 0;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 20px;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SlideGroup = styled.div`
  display: flex;
  flex: 0 0 100%;
  scroll-snap-align: start;
  gap: 20px;
  padding: 0 calc((100% - (33.333% * 3 + 40px)) / 2);
`;

const CropCard = styled.div`
  flex: 0 0 33.333%;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CropImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CropTitle = styled.h4`
  font-size: 1.1rem;
  color: #333;
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: ${props => props.active ? '20px' : '8px'};
  height: 8px;
  background-color: ${props => props.active ? '#000000' : '#D0D0D0'};
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const TestimonialsSection = styled.section`
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #000;
  margin-bottom: 50px;
  font-weight: bold;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: #F8FFF8;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Image = styled.img`
  width: 106%;
  height: 190%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TestimonialText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #000;
  margin-bottom: 20px;
  flex: 1;
`;

const StarRating = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#FFD700' : '#D3D3D3'};
  font-size: 20px;
`;

const FarmerInfo = styled.div`
  border-top: 1px solid #E5E5E5;
  padding-top: 16px;
`;

const FarmerType = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
`;

const FarmerName = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const Location = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const CropInfo = styled.p`
  font-size: 14px;
  color: #333;
`;

const HomeThree = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const droneTypes = [
    {
      title: "High Altitude Drone",
      image: exploredrone_1,
      features: [
        "Payload: 20L (Fertilizers, Chemicals)",
        "Crops: Wheat, Rice, Sugarcane",
        "Spraying Efficiency: 6 acres/hour",
        "Benefit: Saves 40% water and 25% chemicals"
      ]
    },
    {
      title: "Large-Field Crop Spraying Drones",
      image: exploredrone_2,
      features: [
        "Payload: 10L-30L (Fertilizers, Chemicals)",
        "RTK Technology: Ensures precise navigation",
        "Wide Spray Boom: Covers up to 6-8 meters",
        "Ideal for wheat, rice, maize, sugarcane"
      ]
    },
    {
      title: "Orchard and Plantation Drones",
      image: exploredrone_3,
      features: [
        "Payload: 10L-20L for high-altitude",
        "ULV Spraying Technology",
        "Specialized Sensors: Detect canopy gaps"
      ]
    },
    {
      title: "Monitoring & Mapping Drones",
      image: exploredrone_4,
      features: [
        "Multispectral and LIDAR Surveying",
        "Vegetation health data collection",
        "RTK-GPS Modules for precision"
      ]
    },
    {
      title: "Seeding and Fertilizer Drones",
      image: exploredrone_5,
      features: [
        "Payload: 10L-25L uniform coverage",
        "Circular Rotating Sprayer Module",
        "Multi-Crop Compatibility"
      ]
    },
    {
      title: "Precision Spraying Drones",
      image: exploredrone_6,
      features: [
        "Payload: 5L–15L for precision tasks",
        "Advanced Nozzles: Adjustable spray",
        "AI-Powered Navigation"
      ]
    }
  ];

  const cropTypes = [
    { title: "Cereals", image: compreshensive_1 },
    { title: "Pulses", image: compreshensive_2 },
    { title: "Oilseeds", image: compreshensive_3 },
    { title: "Fruits", image: compreshensive_4 },
    { title: "Vegetables", image: compreshensive_5 },
    { title: "Plantation Crops", image: compreshensive_6 }
  ];

  const testimonials = [
    {
      image: testimonial_1,
      text: "Using C.H.I.R.A.G CONNECT, I saved almost 20% on water and chemicals for my sugarcane fields. The drone spraying service was so precise that I noticed a significant reduction in pest attacks. The vendor I chose was professional, and the service was completed in half the time I would have taken manually. Thanks to CHIRAG CONNECT, I am now able to manage my fields more efficiently",
      rating: 4,
      farmerType: "Sugarcane Farmer",
      name: "Rajendra Singh",
      location: "Muzaffarnagar, Uttar Pradesh",
      crop: "Sugarcane"
    },
    {
      image: testimonial_2,
      text: "Spraying pesticides manually was a challenging and time-consuming task for me. C.H.I.R.A.G CONNECT made it so simple. I booked a licensed drone pilot who sprayed my entire mustard field in just two hours. I've seen healthier plants and a reduction in costs for chemicals because of the accuracy of the drone. I highly recommend it to fellow farmers!",
      rating: 4,
      farmerType: "Mustard Farmer",
      name: "Preeti Kumari",
      location: "Bharatpur, Rajasthan",
      crop: "Mustard"
    },
    {
      image: testimonial_3,
      text: "As a rice farmer, managing pests and weeds is critical. With C.H.I.R.A.G CONNECT, I found a certified drone pilot who used the perfect drone for my low-height crop. The uniform coverage of the spraying was amazing, and the platform's tracking system kept me informed throughout. My yields this season have been better, and I feel confident relying on this platform for future needs.",
      rating: 4,
      farmerType: "Rice Farmer",
      name: "Suresh Reddy",
      location: "Guntur, Andhra Pradesh",
      crop: "Rice"
    }
  ];
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} filled={index < rating}>★</Star>
    ));
  };
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = 400;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = 400;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const CropTypesSlider = ({ cropTypes }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollRef = useRef(null);
    const groupedCrops = [];
  
    for (let i = 0; i < cropTypes.length; i += 3) {
      groupedCrops.push(cropTypes.slice(i, i + 3));
    }
  
    const handleScrolls = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const slideWidth = scrollRef.current.offsetWidth;
        const newActiveSlide = Math.round(scrollPosition / slideWidth);
        setActiveSlide(newActiveSlide);
      }
    };
  
    const scrollToSlides = (index) => {
      if (scrollRef.current) {
        const slideWidth = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
          left: slideWidth * index,
          behavior: 'smooth'
        });
        setActiveSlide(index);
      }
    };
  
    return (
      <SliderContainer>
        <ScrollContainer
          ref={scrollRef}
          onScroll={handleScrolls}
        >
          {groupedCrops.map((group, groupIndex) => (
            <SlideGroup key={groupIndex}>
              {group.map((crop, index) => (
                <CropCard key={index}>
                  <CropImage src={crop.image} alt={crop.title} />
                  <CropTitle>{crop.title}</CropTitle>
                </CropCard>
              ))}
            </SlideGroup>
          ))}
        </ScrollContainer>
  
        <PaginationDots>
          {groupedCrops.map((_, index) => (
            <Dot
              key={index}
              active={activeSlide === index}
              onClick={() => scrollToSlides(index)}
            />
          ))}
        </PaginationDots>
      </SliderContainer>
    );
  };
  return (
    <Container>
      <Section>
        <SectionTitle>Explore Drone Types For Every Crop</SectionTitle>
        <DroneSliderContainer>
          <DroneSlider ref={sliderRef} onScroll={handleScroll}>
            {droneTypes.map((drone, index) => (
              <DroneCard key={index}>
                <DroneImage src={drone.image} alt={drone.title} />
                <DroneContent>
                  <DroneTitle>{drone.title}</DroneTitle>
                  <FeatureList>
                    {drone.features.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </DroneContent>
              </DroneCard>
            ))}
          </DroneSlider>
          <PaginationContainer>
            {droneTypes.map((_, index) => (
              <PaginationDot
                key={index}
                active={index === activeSlide}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </PaginationContainer>
        </DroneSliderContainer>

        <SectionTitle hasSubtitle>Comprehensive Coverage Across Crop Types</SectionTitle>
        <SectionSubtitle>
          From small-scale farmers to large cooperatives, C.H.I.R.A.G. CONNECT™ offers services for a wide variety of crops
        </SectionSubtitle>
        <CropTypesSlider cropTypes={cropTypes} />

             <TestimonialsSection>
      <Title>Testimonials</Title>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <ImageContainer>
              <Image src={testimonial.image} alt={testimonial.farmerType} />
            </ImageContainer>
            <Content>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <StarRating>
                {renderStars(testimonial.rating)}
              </StarRating>
              <FarmerInfo>
                <FarmerType>{testimonial.farmerType}</FarmerType>
                <FarmerName>{testimonial.name}</FarmerName>
                <Location>{testimonial.location}</Location>
                <CropInfo>Crop: {testimonial.crop}</CropInfo>
              </FarmerInfo>
            </Content>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>

      </Section>
    </Container>
  );
};

export default HomeThree;
 
