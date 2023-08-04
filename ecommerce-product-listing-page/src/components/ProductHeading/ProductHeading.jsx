import { Flex, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ProductHeading = ({pageName}) => {
  return (
    <Flex margin='1rem'>
        <Text as='h2' fontSize="6xl">{pageName}</Text>
        <Text as='p' fontSize='lg' alignSelf='center' paddingLeft='0.5rem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Text>
    </Flex>
  )
}

export default ProductHeading