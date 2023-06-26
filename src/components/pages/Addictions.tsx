import React, { useEffect, useState } from "react";
import categories from "../../libs/categories";
import styled from "styled-components";
import Category from "../Category";
import { useNavigate } from "react-router-dom";
import Circle from "../Circle";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

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
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const now = new Date();
    now.setDate(now.getDate() + 1); // Add one day
    return now;
  });

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

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

  useEffect(() => {
    if (stepsCount === 1) {
      // setDateTime("10/02/10");
    }
    return () => {};
  }, [stepsCount]);

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      <Pagination>
        {steps?.map((circle) => (
          <Circle key={circle.id} active={circle.id <= stepsCount} />
        ))}
      </Pagination>
      {stepsCount === 0 ? (
        <>
          <div>{activeCategory}</div>
          <h2>Select category({`${categories.length}`})</h2>
          <CategoryWrapper>
            {categories?.map((category) => (
              <Category
                key={category.id}
                category={category}
                active={activeCategory === category.name}
                onClick={() => handleActiveCategory(category.name)}
              />
            ))}
          </CategoryWrapper>
        </>
      ) : (
        ""
      )}

      {stepsCount === 1 && (
        <>
          <h2>Finish Date</h2>
          <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          'test'
        </>
      )}

{stepsCount === 2 && (
  <h2>Are ou ready?</h2>
)}

      <button onClick={nextStep}>Next step</button>
    </>
  );
}

export default Addictions;
