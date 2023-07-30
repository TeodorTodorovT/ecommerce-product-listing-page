import { useContext, useEffect } from "react";
import {ProductsContext} from "../App";
import ProductGrid from "../components/ProductGrid/ProductGrid";

// eslint-disable-next-line react/prop-types
const ShoesPLP = ({setLoadedPage, setLoadedProductsNumber, toggleAlert}) => {
  const shoes = useContext(ProductsContext);
  useEffect(() =>{
    setLoadedPage(3);
    setLoadedProductsNumber(10);
  }, [])
  


    return (
      <ProductGrid products={shoes} toggleAlert={toggleAlert}/>
    )
  }
  
  export default ShoesPLP