import { useContext, useEffect } from "react";
import {ProductsContext} from "../App";
import ProductGrid from "../components/ProductGrid/ProductGrid";

// eslint-disable-next-line react/prop-types
const ShoesPLP = ({setLoadedPage}) => {
  const shoes = useContext(ProductsContext);
  useEffect(() =>{
    setLoadedPage(3);
  }, [])
  


    return (
      <ProductGrid products={shoes} />
    )
  }
  
  export default ShoesPLP