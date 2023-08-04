import { Flex, Text } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const ProductCounter = ({products, loadedProducts}) => {
  return (
    <Flex justifyContent='flex-end' margin='1rem' position='fixed' zIndex='1' right='0' backgroundColor='gray.500' padding='0.5rem' borderRadius='50' bottom='0'>
        <Text as='p'><Text as='b' fontSize='lg'>{loadedProducts}</Text> out of <Text as='b'>{products}</Text></Text>
    </Flex>
  )
}

export default ProductCounter