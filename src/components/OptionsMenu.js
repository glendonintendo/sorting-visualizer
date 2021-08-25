import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";
import { FaDiceThree } from "react-icons/fa"
import {ImShuffle} from "react-icons/im"


const OptionsMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Data Set Options"
        icon={<IoChevronUp />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<FaDiceThree />}>
          New Random Data Set
        </MenuItem>
        <MenuItem>
          New Nearly Sorted Data Set
        </MenuItem>
        <MenuItem>
          New Few Unique Values Data Set
        </MenuItem>
        <MenuItem>
          New Reverse Sorted Data Set
        </MenuItem>
        <MenuItem icon={<ImShuffle />}>
          Shuffle Current Data Set
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default OptionsMenu;
