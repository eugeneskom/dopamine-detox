import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import Category from "../Category";
import { CategoryInt } from "../../types/types";
import { Route, Routes } from "react-router-dom";
import Addictions from "./Addictions";
import { NavItem } from "../Navigation";

interface HomeProps {
  categories: CategoryInt[];
  nextStep: () => void
}

const AddCategory = styled(AddIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Home({ categories,nextStep }: HomeProps) {


  return (
    <div>
      <FlexWrapper>
        <NavItem to="/addictions" label={<AddCategory />} />
      </FlexWrapper>
      <h1>Home page</h1>
      <Routes>
        <Route path="/addictions" element={<Addictions  nextStep={nextStep}/>} />
      </Routes>
    </div>
  );
}

export default Home;
