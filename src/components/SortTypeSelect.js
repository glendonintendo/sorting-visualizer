import { Select } from "@chakra-ui/react";

const SortTypeSelect = ({ sortType, onSelectSortType }) => {
  return (
    <Select value={sortType} onChange={(e) => onSelectSortType(e.target.value)}>
      <option value="bubble">Bubble</option>
      <option value="selection">Selection</option>
      <option value="insertion">Insertion</option>
      <option value="heap">Heap</option>
      <option value="merge">Merge</option>
      <option value="quick">Quick</option>
    </Select>
  );
};

export default SortTypeSelect;
