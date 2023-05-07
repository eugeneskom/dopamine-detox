import React, { useState } from "react";
import categories from "../../libs/categories";
import styled from "styled-components";
import Category from "../Category";
import { useNavigate } from "react-router-dom";
import Circle from "../Circle";

interface AddictionsProps {
  nextStep: () => void;
}

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 300px;
  overflow: auto;
`;

const Pagination = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

function Addictions() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name);
  const navigate = useNavigate();
  const [steps, setSteps] = useState([
    { id: 0, active: true },
    { id: 1, active: false },
    { id: 2, active: false },
  ]);
  const [stepsCount, setStepsCount] = useState(0);

  const nextStep = () => {
    console.log("nextStep");
    setStepsCount((prevStepsCount) => {
      if (prevStepsCount === steps.length) {
        return prevStepsCount;
      } else {
        return prevStepsCount + 1;
      }
    });
  };

  console.log(stepsCount, "stepsCount");

  const handleGoBack = () => {
    navigate("/");
  };

  const handleActiveCategory = (name: string): void => {
    setActiveCategory(name);
    console.log(name);
  };

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      <Pagination>
        {steps?.map((circle) => (
          <Circle key={circle.id} active={circle.id <= stepsCount} />
        ))}
      </Pagination>
      <div>{activeCategory}</div>
      <h2>Select category({`${categories.length}`})</h2>
      <CategoryWrapper>
        {categories?.map((category) => (
          <Category category={category} active={activeCategory === category.name} onClick={() => handleActiveCategory(category.name)} />
        ))}
      </CategoryWrapper>

      <button onClick={nextStep}>Next step</button>
    </>
  );
}

export default Addictions;
