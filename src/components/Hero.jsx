import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  max-width: 1300px;
  height: 360px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 200px;
  align-items: center;
  background-color: #C0B2A9;
`;

const HeroContainerText = styled.div`
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #555;
`;

const HeroText = styled.h2`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 48px;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
`;

const CategoriesSection = styled.div`
max-width: 1300px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 280px;
  align-items: center;
  background-color: hsla(23, 15%, 88%, 1);
`;

const CategoriesText = styled.h2`
  font-size: 24px;
  color: #33515Bff;
  margin: 0;

  
`;

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroContainerText>
          <HeroText>Welcome to Hand-Made Boutique</HeroText>
          <HeroDescription>
            Discover unique and beautiful handmade items crafted with love.
          </HeroDescription>
        </HeroContainerText>
        <HeroImage src="/photo/mainphoto.png" />
      </HeroSection>
      <CategoriesSection>
        <CategoriesText>Categorii de Produse</CategoriesText>
      </CategoriesSection>
    </>
  );
};

export default Hero;
