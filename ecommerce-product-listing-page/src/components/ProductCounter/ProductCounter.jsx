import { Flex, Text } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const ProductCounter = ({products, loadedProducts}) => {
  return (
    <Flex justifyContent='flex-end' margin='1rem'>
        <Text as='b'>{loadedProducts} loaded out of {products}</Text>
    </Flex>
  )
}

export default ProductCounter