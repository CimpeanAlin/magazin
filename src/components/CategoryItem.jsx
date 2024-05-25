import React from 'react'
import styled from 'styled-components';

const CategorySection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  align-items: center;
  background-color: hsla(23, 15%, 88%, 1);
`;

const Container = styled.div`
  flex: 1;
  height: 400px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 0.8;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    
   <CategorySection>
   <Container>
      <Image src={item.img} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <Button>More</Button>
      </Info>
    </Container>
    </CategorySection>
  );
};

export default CategoryItem
