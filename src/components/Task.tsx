import { Box } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  id: string;
  content: string;
  index: number;
}

export default function Task({ id, content, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          p={3}
          backgroundColor={"white"}
          borderRadius={5}
          shadow={"md"}
          id={id}
          mb={3}
        >
          {content}
        </Box>
      )}
    </Draggable>
  );
}
