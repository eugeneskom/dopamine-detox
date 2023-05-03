import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import Category from "../Category";
import { CategoryInt } from "../../types/types";

interface HomeProps {
  categories: CategoryInt[];
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

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 300px;
  overflow: auto;
`;

function Home({ categories }: HomeProps) {
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleActiveCategory = (name: string): void => {
    setActiveCategory(name);
    console.log(name);
  };

  return (
    <div>
      <FlexWrapper>
        <AddCategory onClick={toggleCategories} />
      </FlexWrapper>
      {showCategories ? (
        <>
          <div>{activeCategory}</div>
          <h2>Select category({`${categories.length}`})</h2>
          <CategoryWrapper>
            {categories?.map((category) => (
              <Category category={category} active={activeCategory === category.name} onClick={() => handleActiveCategory(category.name)} />
            ))}
          </CategoryWrapper>
        </>
      ) : (
        ""
      )}
      <h1>Home</h1>
    </div>
  );
}

export default Home;
