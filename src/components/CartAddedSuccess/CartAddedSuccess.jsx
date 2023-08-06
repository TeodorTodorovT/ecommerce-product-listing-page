import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
  } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const CartAddedSuccess = ({alertIsShown}) => {
    
    
      return alertIsShown ? (
        <Alert status='success' position='fixed' zIndex='1' right='0' maxWidth='300px' borderLeftRadius='10'>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Item added to your cart!
            </AlertDescription>
          </Box>
        </Alert>
      ) : (null)
}

export default CartAddedSuccess;