/**
 * A select drop down for the different sorts. Uses onSelectSortType
 * to pass sortType state to App component.
 */

import { Select } from "@chakra-ui/react";

const SortTypeSelect = ({ sortType, onSelectSortType }) => {
  return (
    <Select
      value={sortType}
      onChange={(e) => onSelectSortType(e.target.value)}
      size="sm"
      fontSize="16px"
      borderRadius="5px"
    >
      <option value="bubble">Bubble</option>
      <option value="selection">Selection</option>
      <option value="insertion">Insertion</option>
      <option value="heap">Heap</option>
      <option value="merge">Merge</option>
      <option value="quick">Quick</option>
      <option value="dutch-flag">Dutch Flag</option>
    </Select>
  );
};

export default SortTypeSelect;
