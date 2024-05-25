import React from 'react';
import styled from 'styled-components';


const AboutContainer = styled.div`
  max-width: 1300px;
  height: 400px;
  margin: 0 auto;
  padding: 0 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const AboutTitle = styled.h2`
  font-size: 32px;
  margin-top:20px;
  margin-bottom: 20px;
  color: #17282Fff;
  animation: slideIn 1.5s ease-in-out;

  @keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

const AboutText = styled.p`
  font-size: 18px;
  color: #2B3F4Eff;
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 600px;
  animation: fadeInText 2s ease-in-out;

  @keyframes fadeInText {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const AboutImage = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeInImage 2s ease-in-out;

  @keyframes fadeInImage {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

// Componenta AboutSection
const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutTitle>Despre Noi</AboutTitle>
      <AboutContent>
        <AboutImage src="/photo/photo1.png" alt="Handmade products" />
        <AboutText>
          Hand-Made Boutique a luat naștere din dorința de a aduce laolaltă pasiunea pentru artizanat și dorința de a oferi produse unice, realizate cu dragoste și atenție la detalii. Fiecare piesă din colecția noastră este creată manual, reflectând creativitatea și măiestria artizanilor noștri. Ne străduim să oferim clienților noștri nu doar produse, ci experiențe de neuitat, transformând fiecare achiziție într-o poveste aparte.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
