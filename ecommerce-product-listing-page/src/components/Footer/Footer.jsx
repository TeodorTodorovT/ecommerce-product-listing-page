import { Flex, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex gap="3rem" justifyContent="center" padding="2rem" backgroundColor="gray.100" width="100%" direction={{base: 'column', md: 'row'}}>
        <Button variant="link" color>About Us</Button>
        <Button variant="link" color>T&C</Button>
        <Button variant="link" color>Privecy Policy</Button>
        <Button variant="link" color>Contact Us</Button>
    </Flex>
  )
}

export default Footer