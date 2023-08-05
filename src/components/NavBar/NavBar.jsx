import { Flex, Spacer, Button, ButtonGroup, Heading, Menu, MenuItem, MenuButton, IconButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Flex
        as="nav"
        minWidth="max-content"
        gap="5"
        padding="2rem"
        backgroundColor="gray.100"
        position="sticky"
        width="100%"
        top="0"
        zIndex="1"
      >
        <Heading size="lg" color="blue.600"><Link to={`electronics`}>My Shop</Link></Heading>
        <Spacer />
        <ButtonGroup display={{ base: "none", md: "flex" }} gap="2rem">
          <Button colorScheme="black" variant="link" size="lg">
            <Link to={`electronics`}>Electronics</Link>
          </Button>
          <Button colorScheme="black" variant="link" size="lg">
            <Link to={`jewelry`}>Jewelry</Link>
          </Button>
        </ButtonGroup>
        
        <Menu >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            display={{ base: "flex", md: "none" }}
          />
          <MenuList display={{ md: "none" }}>
            <MenuItem>
              <Link to={`electronics`}>Electronics</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`jewelry`}>Jewelry</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default NavBar;
