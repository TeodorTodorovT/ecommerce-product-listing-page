import { useContext, useEffect } from "react";
import {ProductsContext} from "../App";
import ProductGrid from "../components/ProductGrid/ProductGrid";


// eslint-disable-next-line react/prop-types
const ClothesPLP = ({setLoadedPage, setLoadedProductsNumber}) => {
  const clothes = useContext(ProductsContext);
  useEffect(() =>{
    setLoadedPage(1);
    setLoadedProductsNumber(10);
  }, [])


  return (
      <ProductGrid products={clothes} />
  )
}

export default ClothesPLP