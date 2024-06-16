import React from 'react'
import styled from 'styled-components';
import { categories } from "./data.js";
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  width: 66%; /* Set the container width to half the screen */
  margin: 0 auto; /* Center the container on the page */

  & > * {
    flex: 1;
    margin: 0 22px; /* Adjust margins to bring items closer */
  }
`;


const Categories = () => {
  return (
    <Container>
          {categories.map(item => (  
              <CategoryItem item={item} key={ item.id } />
      ))}
    </Container>
  )
}

export default Categories
