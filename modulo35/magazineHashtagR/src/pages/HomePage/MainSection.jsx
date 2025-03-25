import { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import ProductFilters from "./ProductFilters";

const MainSection = () => {
  // femaleProducts<Boolean | null>
  const [femaleProducts, setFemaleProducts] = useState(null);

  return (
    <>
      <ProductFilters setFemaleProducts={setFemaleProducts} />
      <ProductsContainer femaleProducts={femaleProducts} />
    </>
  )
};

export default MainSection;