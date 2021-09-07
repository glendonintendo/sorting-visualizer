import { Menu, MenuButton, MenuList, IconButton, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";

const OptionsMenu = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={IconButton} icon={<IoChevronUp />} variant="outline">
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue="random" title="Bar Sizes" type="radio">
          <MenuItemOption value="random">Random</MenuItemOption>
          <MenuItemOption value="equal-step">Equal Step</MenuItemOption>
          <MenuItemOption value="homogenous">Homogenous</MenuItemOption>
        </MenuOptionGroup>
        <MenuOptionGroup defaultValue="random" title="Sorted Order" type="radio">
          <MenuItemOption value="random">Random</MenuItemOption>
          <MenuItemOption value="nearly-sorted">Nearly Sorted</MenuItemOption>
          <MenuItemOption value="reverse-sorted">Reverse Sorted</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default OptionsMenu;
