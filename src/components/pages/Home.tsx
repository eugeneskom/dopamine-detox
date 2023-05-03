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
  const [isActiveCat, setIsActiveCat] = useState("");

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleActiveCategory = (name: string): void => {
    setIsActiveCat(name);
    console.log(name)
  };

  return (
    <div>
      <FlexWrapper>
        <AddCategory onClick={toggleCategories} />
      </FlexWrapper>
      {showCategories ? (
        <CategoryWrapper>
          {categories?.map((category) => (
            <Category category={category} 
            active={isActiveCat === category.name}
            onClick={()=> handleActiveCategory(category.name)}
            />
          ))}
        </CategoryWrapper>
      ) : (
        ""
      )}
      <h1>Home</h1>
    </div>
  );
}

export default Home;
