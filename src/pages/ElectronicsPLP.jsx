import { useContext, useEffect } from "react";
import {ProductsContext} from "../App";
import ProductGrid from "../components/ProductGrid/ProductGrid";


// eslint-disable-next-line react/prop-types
const ElectronicsPLP = ({setLoadedPage, setLoadedProductsNumber, toggleAlert}) => {
  const electronics = useContext(ProductsContext);
  useEffect(() =>{
    setLoadedPage("Electronics");
    setLoadedProductsNumber(4);
  }, [])


  return (
      <ProductGrid products={electronics} toggleAlert={toggleAlert}/>
  )
}

export default ElectronicsPLP