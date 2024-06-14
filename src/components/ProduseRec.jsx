import React from 'react';
import styled from 'styled-components';


const SectionTitle = styled.h2`
  font-size: 28px;
  color: #12497d;
  margin-bottom: 10px;
  padding: 10px;
  text-align: left;
 
`; 

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;   
  background-color: #c0b2a9;   
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
`;

const RecommendedProducts = () => {
  return (
    <CenteredContainer>
      <SectionTitle>Produse recomandate</SectionTitle>
    </CenteredContainer>
  );
};

export default RecommendedProducts;






