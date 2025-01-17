import React from "react";
import styled from "styled-components";
import exploredronebackground from "../assets/exploredronebackground.png";
import exploredrone_1 from "../assets/exploredrone_1.png";
import exploredrone_2 from "../assets/exploredrone_2.png";
import exploredrone_3 from "../assets/exploredrone_3.png";
import compreshensive_1 from "../assets/compreshensive_1.png";
import compreshensive_2 from "../assets/compreshensive_2.png";
import compreshensive_3 from "../assets/compreshensive_3.png";
import compreshensive_4 from "../assets/compreshensive_4.png";
import compreshensive_5 from "../assets/compreshensive_5.png";
import compreshensive_6 from "../assets/compreshensive_6.png";
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
  margin-bottom: ${props => props.hasSubtitle ? '15px' : '50px'};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  max-width: 800px;
  margin: 0 auto 50px;
`;

const DroneTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
`;

const DroneCard = styled.div`
  background: #f9f9f9;
  border-radius: 15px;
  overflow: hidden;
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

const CropTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-bottom: 80px;
`;

const CropCard = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
`;

const CropImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CropTitle = styled.h4`
  font-size: 1rem;
  color: #333;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const TestimonialCard = styled.div`
  background: #f9fff9;
  border-radius: 15px;
  padding: 30px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Stars = styled.div`
  color: #ffd700;
  margin-bottom: 15px;
`;

const FarmerInfo = styled.div`
  border-top: 1px solid #eee;
  padding-top: 15px;
`;

const FarmerName = styled.h4`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
`;

const FarmerLocation = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const HomeThree = () => {
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
        "RTK Technology: Ensures precise navigation and spray coverage",
        "Wide Spray Boom: Covers up to 6-8 meters in one pass",
        "Ideal for crops like wheat, rice, maize, and sugarcane"
      ]
    },
    {
      title: "Orchard and Plantation Drones",
      image: exploredrone_3,
      features: [
        "Payload:10L-20L for high-altitude and dense orchards",
        "ULV Spraying Technology: Ultra-low volume spraying for precision",
        "Specialized Sensors: Detect canopy gaps and optimize coverage"
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
      name: "Rajendra Singh",
      location: "Muzaffarnagar, Uttar Pradesh",
      crop: "Sugarcane",
      rating: 4
    },
    {
      image: testimonial_2,
      text: "Spraying pesticides manually was a challenging and time-consuming task for me. C.H.I.R.A.G CONNECT made it so simple. I booked a licensed drone pilot who sprayed my entire mustard field in just two hours. I've seen healthier plants and a reduction in costs for chemicals because of the accuracy of the drone. I highly recommend it to fellow farmers!",
      name: "Preeti Kumari",
      location: "Bharatpur, Rajasthan",
      crop: "Mustard",
      rating: 4
    },
    {
      image: testimonial_3,
      text: "As a rice farmer, managing pests and weeds is critical. With C.H.I.R.A.G CONNECT, I found a certified drone pilot who used the perfect drone for my low-height crop. The uniform coverage of the spraying was amazing, and the platform's tracking system kept me informed throughout. My yields this season have been better, and I feel confident relying on this platform for future needs.",
      name: "Suresh Reddy",
      location: "Guntur, Andhra Pradesh",
      crop: "Rice",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Explore Drone Types For Every Crop</SectionTitle>
        <DroneTypesGrid>
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
        </DroneTypesGrid>

        <SectionTitle hasSubtitle>Comprehensive Coverage Across Crop Types.</SectionTitle>
        <SectionSubtitle>
          From small-scale farmers to large cooperatives, C.H.I.R.A.G. CONNECT™ offers services for
          a wide variety of crops
        </SectionSubtitle>
        <CropTypesGrid>
          {cropTypes.map((crop, index) => (
            <CropCard key={index}>
              <CropImage src={crop.image} alt={crop.title} />
              <CropTitle>{crop.title}</CropTitle>
            </CropCard>
          ))}
        </CropTypesGrid>

        <SectionTitle>Testimonials</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              <TestimonialText>{testimonial.text}</TestimonialText>
              <Stars>{renderStars(testimonial.rating)}</Stars>
              <FarmerInfo>
                <FarmerName>{testimonial.name}</FarmerName>
                <FarmerLocation>{testimonial.location}</FarmerLocation>
                <FarmerLocation>Crop: {testimonial.crop}</FarmerLocation>
              </FarmerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Section>
    </Container>
  );
};

export default HomeThree;