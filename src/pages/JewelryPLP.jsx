import { useContext, useEffect } from "react";
import {ProductsContext} from "../App";
import ProductGrid from "../components/ProductGrid/ProductGrid";

// eslint-disable-next-line react/prop-types
const JewelryPLP = ({setLoadedPage, setLoadedProductsNumber, toggleAlert}) => {
  const jewelry = useContext(ProductsContext);
  useEffect(() =>{
    setLoadedPage("Jewelery");
    setLoadedProductsNumber(4);
  }, [])
  


    return (
      <ProductGrid products={jewelry} toggleAlert={toggleAlert}/>
    )
  }
  
  export default JewelryPLP