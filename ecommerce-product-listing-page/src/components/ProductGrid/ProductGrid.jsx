/* eslint-disable react/prop-types */
import { Grid, GridItem, Spinner, Flex } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, toggleAlert }) => {
        return ( products ? <Grid templateColumns={{base:'1fr', sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(4, 1fr)' }} gap="6" justifyItems="center">
        {products.map((product) => {    
            return(
            <GridItem key={product.id}>
                <ProductCard product={product} toggleAlert={toggleAlert}/>
            </GridItem>
          )
        })}
      </Grid> : <Flex justifyContent='center' margin='3rem'><Spinner size="xl" color='blue.500' thickness='4px'/></Flex>

            
          );
    
  
};

export default ProductGrid;
