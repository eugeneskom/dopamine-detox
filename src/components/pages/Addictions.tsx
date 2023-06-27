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
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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

const StyledNavigateBeforeIcon = styled(NavigateBeforeIcon)`
  &.back-arrow {
    cursor: pointer;
    font-size: 40px;
  }
`;

let initialDateTime = new Date();

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
    console.log("initialDateTime", initialDateTime.getTime());
    now.setDate(now.getDate() + 1); // Add one day
    return now;
  });
  const [timeSpan, setTimeSpan] = useState<number>(0);
  const [dateSelected, setDateSelected] = useState(false);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      console.log("handleDateChange", date, initialDateTime, selectedDate);
      console.log("chosen date: ", date.getTime(), "initial date: ", initialDateTime.getTime());
      const timeDiff = Math.abs(date.getTime() - initialDateTime.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      console.log("daysDiff", daysDiff);
      setTimeSpan(daysDiff);
      setSelectedDate(date);
      setDateSelected(true);
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
      <StyledNavigateBeforeIcon className="back-arrow" onClick={handleGoBack} />

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
              <Category key={category.id} category={category} active={activeCategory === category.name} onClick={() => handleActiveCategory(category.name)} />
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
        </>
      )}

      {stepsCount === 2 ? (
        <>
          <h2>Are ou ready?</h2>
          <p>{dateSelected ? `${timeSpan} days` : "1 day"}</p>
          <p>No {activeCategory}</p>
        </>
      ) : (
        ""
      )}

      <button onClick={nextStep}>Next step</button>
    </>
  );
}

export default Addictions;
