import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'

import {ChevronDownIcon} from '@chakra-ui/icons'

// eslint-disable-next-line react/prop-types
const SortProducts = ({sortHandler}) => {

return (
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Sort by
  </MenuButton>
  <MenuList>
    <MenuItem onClick={sortHandler}>Alphabetical a-z</MenuItem>
    <MenuItem onClick={sortHandler}>Alphabetical z-a</MenuItem>
    <MenuItem onClick={sortHandler}>Price ascending</MenuItem>
    <MenuItem onClick={sortHandler}>Price descending</MenuItem>
  </MenuList>
</Menu>
    )
}

export default SortProducts