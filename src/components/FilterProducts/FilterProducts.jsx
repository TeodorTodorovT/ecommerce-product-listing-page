import {
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    Button
  } from '@chakra-ui/react'

  import {ChevronDownIcon} from '@chakra-ui/icons'

// eslint-disable-next-line react/prop-types
const FilterProducts = ({filterHandler}) => {
  return (
    <Menu closeOnSelect={false}>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Filter By
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup type='checkbox' onChange={filterHandler}>
      <MenuItemOption value='cheap' >Under $100</MenuItemOption>
      <MenuItemOption value='tested'>Over 200 reviews</MenuItemOption>
      <MenuItemOption value='popular'>Over 3 stars</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
  )
}

export default FilterProducts