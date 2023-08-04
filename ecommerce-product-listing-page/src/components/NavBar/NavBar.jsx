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
        <Heading size="lg">My Shop</Heading>
        <Spacer />
        <ButtonGroup display={{ base: "none", md: "flex" }}>
          <Button colorScheme="blackAlpha" variant="ghost" size="lg">
            <Link to={`clothes`}>Clothes</Link>
          </Button>
          <Button colorScheme="blackAlpha" variant="ghost" size="lg">
            <Link to={`shoes`}>Shoes</Link>
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
              <Link to={`clothes`} width="100px">Clothes</Link>
            </MenuItem>
            <MenuItem >
            <Link to={`shoes`}>Shoes</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default NavBar;
