import { Flex, Spacer, Button, ButtonGroup, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<>

<Flex as='nav' minWidth='max-content' gap='5' padding='2rem' backgroundColor='gray.100' position='sticky' width='100%' top='0' zIndex='1'>
    <Heading size='lg'>My Shop</Heading>
    <Spacer/>
  <ButtonGroup >
    <Button colorScheme='blackAlpha' variant='ghost' size='lg'>
        <Link to={`clothes`}>Clothes</Link>
    </Button>
    <Button colorScheme='blackAlpha' variant='ghost' size='lg'>
      <Link to={`shoes`}>Shoes</Link>
    </Button>
  </ButtonGroup>
</Flex>
</>
  )
}

export default NavBar