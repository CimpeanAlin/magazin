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

const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: #17282Fff;;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color:#0D1E25ff;
    color: #F5F5F5ff;
  }
`;



const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroContainerText>
          <HeroText>Welcome to Hand-Made Boutique</HeroText>
          <HeroDescription>
          Bucurați-vă de o colecție unică de produse hand made create cu pasiune și atenție la detalii.
           Fiecare piesă spune o poveste și va adauga un strop de magie în viața dumneavoastră.
          </HeroDescription>
          <Button>Toate Produsele</Button>
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
