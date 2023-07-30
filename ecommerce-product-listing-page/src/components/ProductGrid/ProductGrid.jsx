/* eslint-disable react/prop-types */
import { Grid, GridItem, Spinner, Flex } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
        return ( products ? <Grid templateColumns="repeat(4, 1fr)" gap="6">
        {products.map((product) => {    
            return(
            <GridItem key={product.id}>
                <ProductCard product={product}/>
            </GridItem>
          )
        })}
      </Grid> : <Flex justifyContent='center' margin='3rem'><Spinner size="xl" color='blue.500' thickness='4px'/></Flex>

            
          );
    
  
};

export default ProductGrid;
