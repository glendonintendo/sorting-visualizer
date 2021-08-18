import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

import SortDescription from "./SortDescription";
import { getSortInfo } from "../utils/getSortInfo";

const SortInfoModal = ({ isOpen, onClose, sortType }) => {
  const { title, description, code, timeComplexity, spaceComplexity, badges } =
    getSortInfo(sortType);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["full", "md"]}
      top={["0", "3.75rem"]}
    >
      <ModalOverlay />
      <ModalContent
        my={["0", "10vh"]}
        w={["100%", "90%", "90%", "80%", "60%"]}
        maxWidth="1000px"
      >
        <SortDescription
          title={title}
          description={description}
          code={code}
          timeComplexity={timeComplexity}
          spaceComplexity={spaceComplexity}
          badges={badges}
        />
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SortInfoModal;
