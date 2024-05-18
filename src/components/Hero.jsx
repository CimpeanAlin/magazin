import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  background-color:#C0B2A9ff;
`;

const HeroText = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 80px;
  height: auto;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>Welcome to Hand-Made Boutique</HeroText>
      <HeroImage src="src\annie-spratt-TywjkDHf0Ps-unsplash.jpg" alt="Hand-Made Boutique" />
    </HeroSection>
  );
};

export default Hero;
