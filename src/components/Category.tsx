import React from "react";
import { CategoryInt } from "../types/types";
import styled from "@emotion/styled";

interface CategoryProps {
  category: CategoryInt;
}

const Item = styled.div`
  width: calc(33.33% - 10px);
    margin-bottom: 10px;
    background-color: #ccc;
`

const Title = styled.h2`
  font-size: 16px;
`

function Category({ category: { name, image } }: CategoryProps) {
  return (
    <Item>
      <Title>{name}</Title>
      <img src={image} alt="" />
    </Item>
  );
}

export default Category;
