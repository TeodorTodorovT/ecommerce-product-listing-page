import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext, useEffect } from "react";
import api from './services/api'
import NavBar from "./components/NavBar/NavBar"
import { Flex, Spacer, useToast } from '@chakra-ui/react'

import ElectronicsPLP from "./pages/ElectronicsPLP";
import JewelryPLP from "./pages/JewelryPLP";
import LoadMore from './components/LoadMore/LoadMore';
import ProductCounter from './components/ProductCounter/ProductCounter';
import ProductHeading from './components/ProductHeading/ProductHeading';
// import CartAddedSuccess from './components/CartAddedSuccess/CartAddedSuccess';
import SortProducts from './components/SortProducts/SortProducts';
import Footer from './components/Footer/Footer';

export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState();
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loadedProductsNumber, setLoadedProductsNumber] = useState(4);
  const [loadedPage, setLoadedPage] = useState("Electronics");
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);
  const [sortMethod, setSortMethod] = useState('');
  const toast = useToast();

  useEffect(() =>{
      api.getProducts(loadedPage).then((res) => {
        setProducts(res)
        setLoadedProducts(res.slice(0,4))
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
    setLoadedProductsNumber(current => current + 4)
  }

  const toggleAlert = () => {
    toast({
      title: 'Success',
      description: "Product added to your cart!",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
   
  const sortHandler = (e) =>{
    setSortMethod(e.target.textContent)
  }

  return (
    <>
    <BrowserRouter>
      <NavBar />
      {/* <CartAddedSuccess alertIsShown={alertIsShown} toggleAlert={toggleAlert}/> */}
      <Flex>
        <ProductHeading pageName={loadedPage} />
        <Spacer />
        <ProductCounter products={products?.length} loadedProducts={loadedProducts?.length} />
      </Flex>
      <Flex margin='1rem' justifyContent='right'>
        <SortProducts sortHandler={sortHandler}/>
      </Flex>
      
      <ProductsContext.Provider value={loadedProducts}>
        <Routes>
          <Route path="/" element={<Navigate to="/electronics" />} />        
            <Route path="/electronics" element={<ElectronicsPLP setLoadedPage={setLoadedPage} setLoadedProductsNumber={setLoadedProductsNumber} toggleAlert={toggleAlert}/>}/>    
          <Route path="/jewelry" element={<JewelryPLP setLoadedPage={setLoadedPage} setLoadedProductsNumber={setLoadedProductsNumber} toggleAlert={toggleAlert}/>} />
        </Routes>
        </ProductsContext.Provider>
        <LoadMore loadMoreHandler={loadMoreHandler} loadMoreDisabled={loadMoreDisabled}/>
      </BrowserRouter>
      <Footer/>
      </>
  )
}



export default App
