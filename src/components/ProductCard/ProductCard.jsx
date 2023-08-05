/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image, Heading, Text, Divider, ButtonGroup, Button, Stack, Box } from '@chakra-ui/react'

import { StarIcon } from '@chakra-ui/icons'

const ProductCard = ({product, toggleAlert}) => {

  return (
<Card maxW='sm'>
  <CardBody>
    <Image
      src={product.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title}</Heading>
      <Text>{product.description}</Text>
      <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating.rate ? 'blue.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {product.rating.count} reviews
          </Box>
        </Box>
      <Text color='blue.600' fontSize='2xl'>
        ${product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={toggleAlert}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProductCard