import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton,
  } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const CartAddedSuccess = ({alertIsShown, toggleAlert}) => {
    
    
      return alertIsShown ? (
        <Alert status='success' position='fixed' zIndex='1' right='0' maxWidth='300px' borderLeftRadius='10'>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Item added to your cart!
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={toggleAlert}
          />
        </Alert>
      ) : (null)
}

export default CartAddedSuccess