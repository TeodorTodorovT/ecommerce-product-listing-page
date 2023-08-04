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
import SortProducts from './components/SortProducts/SortProducts';

export const ProductsContext = createContext();

const pages = {
  1: "Clothes",
  3: "Shoes"
}

function App() {
  const [products, setProducts] = useState();
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loadedProductsNumber, setLoadedProductsNumber] = useState(10);
  const [loadedPage, setLoadedPage] = useState(1);
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);
  const [alertIsShown, setAlertIsShown] = useState(false);
  const [sortMethod, setSortMethod] = useState('Alphabetical a-z');

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
    }else {
      setLoadMoreDisabled(false);
    }
  },[products, loadedProducts])

  useEffect(() => {
    if(sortMethod === 'Alphabetical a-z'){
      setLoadedProducts(currentProducts => currentProducts ? [...currentProducts].sort((a,b) => a.title.localeCompare(b.title)) : [])
    }else if(sortMethod === 'Alphabetical z-a'){
      setLoadedProducts(currentProducts => currentProducts ? [...currentProducts].sort((a,b) => b.title.localeCompare(a.title)) : [])
    }else if(sortMethod === 'Price ascending'){
      setLoadedProducts(currentProducts => currentProducts ? [...currentProducts].sort((a,b) => a.price - b.price) : [])
    }else if(sortMethod === 'Price descending'){
      setLoadedProducts(currentProducts => currentProducts ? [...currentProducts].sort((a,b) => b.price - a.price) : [])
    }
  }, [sortMethod, loadedProductsNumber])

  const loadMoreHandler = () =>{
    setLoadedProductsNumber(current => current + 10)
  }

  const toggleAlert = () => {
    setAlertIsShown(!alertIsShown)
  }
   
  const sortHandler = (e) =>{
    setSortMethod(e.target.textContent)
  }

  console.log("rerender");

  return (
    <BrowserRouter>
      <NavBar />
      <Flex>
        <ProductHeading pageName={pages[loadedPage]} />
        <Spacer />
        <ProductCounter products={products?.length} loadedProducts={loadedProducts?.length} />
      </Flex>
      <Flex margin='1rem' justifyContent='right'>
        <SortProducts sortHandler={sortHandler}/>
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
