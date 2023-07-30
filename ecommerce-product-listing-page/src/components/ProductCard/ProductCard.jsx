import { Card, CardBody, CardFooter, Image, Heading, Text, Divider, ButtonGroup, Button, Stack } from '@chakra-ui/react'

const ProductCard = (product) => {
  return (
<Card maxW='sm'>
  <CardBody>
    <Image
      src={product.product.images[0]}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.product.title}</Heading>
      <Text>{product.product.description}</Text>
      <Text color='blue.600' fontSize='2xl'>
        ${product.product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProductCard