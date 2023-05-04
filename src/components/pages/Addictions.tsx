import React, { useState } from 'react'
import categories from '../../libs/categories';
import styled from 'styled-components';
import Category from '../Category';
import { useNavigate } from "react-router-dom";


function Addictions() {

  const [activeCategory, setActiveCategory] = useState(categories[0]?.name);
  const navigate = useNavigate()

  const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 300px;
  overflow: auto;
`;

const handleGoBack = () => {
  navigate('/');
};


const handleActiveCategory = (name: string): void => {
  setActiveCategory(name);
  console.log(name);
};

  return (
    <>
    <button onClick={handleGoBack}>Go back</button>
    <div>{activeCategory}</div>
    <h2>Select category({`${categories.length}`})</h2>
    <CategoryWrapper>
      {categories?.map((category) => (
        <Category category={category} active={activeCategory === category.name} onClick={() => handleActiveCategory(category.name)} />
      ))}
    </CategoryWrapper>
  </>
  )
}

export default Addictions