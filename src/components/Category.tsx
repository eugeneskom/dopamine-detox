import React from "react";
import { CategoryInt } from "../types/types";
import styled from "@emotion/styled";

type OnClickHandler = (categoryName: string) => void;

// Example usage:
interface CategoryProps {
  category: CategoryInt;
  active: boolean;
  onClick: () => void;
}

const Item = styled.div`
  width: calc(33.33% - 10px);
  margin-bottom: 10px;
  background-color: #ccc;
  &.active{
    font-weight: bold;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 119, 204);
  }
`;

const Title = styled.h2`
  font-size: 16px;

`;

function Category({ category: { name, image, id }, active, onClick }: CategoryProps) {
  return (
    <Item 
    key={id}
     className={`${active ? "active" : ""}`}
     onClick={onClick}
     >
      <Title>{name}</Title>
      <img src={image} alt="" />
    </Item>
  );
}

export default Category;
