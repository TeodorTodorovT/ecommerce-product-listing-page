import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext, useEffect } from "react";
import api from './services/api'
import NavBar from "./components/NavBar/NavBar"
import { Flex, Spacer } from '@chakra-ui/react'

import ClothesPLP from "./pages/ClothesPLP";
import ShoesPLP from "./pages/ShoesPLP";
import LoadMore from './components/LoadMore/LoadMore';
import ProductCounter from './components/ProductCounter/ProductCounter';
import ProductHeading from './components/ProductHeading/ProductHeading';
import CartAddedSuccess from './components/CartAddedSuccess/CartAddedSuccess';

export const ProductsContext = createContext();

const pages = {
  1: "Clothes",
  3: "Shoes"
}

function App() {
  const [products, setProducts] = useState();
  const [loadedProducts, setLoadedProducts] = useState();
  const [loadedProductsNumber, setLoadedProductsNumber] = useState(10);
  const [loadedPage, setLoadedPage] = useState(1);
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);
  const [alertIsShown, setAlertIsShown] = useState(false);

  useEffect(() =>{
      api.getProducts(loadedPage).then((res) => {
        setProducts(res.data)
        setLoadedProducts(res.data.slice(0,10))
      })
  },[loadedPage]);

  useEffect(() =>{
    setLoadedProducts(products?.slice(0, loadedProductsNumber))

  },[products, loadedProductsNumber])

  useEffect(() => {
    if(products?.length <= loadedProducts?.length){
      setLoadMoreDisabled(true);
    }
  },[products, loadedProducts])

  const loadMoreHandler = () =>{
    setLoadedProductsNumber(current => current + 10)
  }

  const toggleAlert = () => {
    setAlertIsShown(!alertIsShown)
  }
   


  return (
    <BrowserRouter>
      <NavBar />
      <Flex>
        <ProductHeading pageName={pages[loadedPage]} />
        <Spacer />
        <ProductCounter products={products?.length} loadedProducts={loadedProducts?.length} />
      </Flex>
      <CartAddedSuccess alertIsShown={alertIsShown} toggleAlert={toggleAlert}/>
      <ProductsContext.Provider value={loadedProducts}>
        <Routes>
          <Route path="/" element={<Navigate to="/clothes" />} />        
            <Route path="/clothes" element={<ClothesPLP setLoadedPage={setLoadedPage} setLoadedProductsNumber={setLoadedProductsNumber} toggleAlert={toggleAlert}/>}/>    
          <Route path="/shoes" element={<ShoesPLP setLoadedPage={setLoadedPage} setLoadedProductsNumber={setLoadedProductsNumber} toggleAlert={toggleAlert}/>} />
        </Routes>
        </ProductsContext.Provider>
        <LoadMore loadMoreHandler={loadMoreHandler} loadMoreDisabled={loadMoreDisabled}/>
      </BrowserRouter>
  )
}



export default App
