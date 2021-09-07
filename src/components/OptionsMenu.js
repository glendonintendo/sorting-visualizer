import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuOptionGroup,
  MenuItemOption,
  MenuItem,
} from "@chakra-ui/react";
import { FaAsterisk } from "react-icons/fa";
import { ImShuffle } from "react-icons/im";
import { IoChevronUp } from "react-icons/io5";

const OptionsMenu = ({
  initializeArrayState,
  shuffleArrayBars,
  setBarHeights,
  setSortedOrder,
}) => {
  const barHeightOnChange = (target) => {
    setBarHeights(target);
  };

  const sortedOrderOnChange = (target) => {
    setSortedOrder(target);
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        icon={<IoChevronUp />}
        colorScheme="blue"
      ></MenuButton>
      <MenuList>
        <MenuItem icon={<FaAsterisk />} onClick={initializeArrayState}>
          Create New Data
        </MenuItem>
        <MenuItem icon={<ImShuffle />} onClick={shuffleArrayBars}>
          Shuffle Current Data
        </MenuItem>
        <MenuOptionGroup
          defaultValue="random"
          title="Bar Sizes"
          type="radio"
          onChange={barHeightOnChange}
        >
          <MenuItemOption value="random">Random</MenuItemOption>
          <MenuItemOption value="equal-step">Equal Step</MenuItemOption>
          <MenuItemOption value="homogenous">Homogenous</MenuItemOption>
        </MenuOptionGroup>
        <MenuOptionGroup
          defaultValue="random"
          title="Initial Order"
          type="radio"
          onChange={sortedOrderOnChange}
        >
          <MenuItemOption value="random">Random</MenuItemOption>
          <MenuItemOption value="nearly-sorted">Nearly Sorted</MenuItemOption>
          <MenuItemOption value="reverse-sorted">Reverse Sorted</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default OptionsMenu;
