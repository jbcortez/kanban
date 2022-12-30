import { Tasks } from "../types";
import Task from "./Task";
import { Text, Button, Flex } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import Kanban from "../util/kanban";
import { useAppDispatch } from "../redux/hooks";
import { Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";

interface Props {
  tasks: Tasks;
  id: string;
  title: string;
}

export default function Column({ tasks, id, title }: Props) {
  const dispatch = useAppDispatch();

  return (
    <Flex
      p={2}
      borderRadius={"10px"}
      backgroundColor={"gray.100"}
      w={300}
      minH={400}
      direction={"column"}
      mr={4}
    >
      <Text p={3} fontSize={"lg"} fontWeight={700}>
        {title}
      </Text>

      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <Flex
            ref={provided.innerRef}
            {...provided.droppableProps}
            direction={"column"}
          >
            {tasks.map((task, i) => (
              <Task
                key={task.id}
                content={task.description}
                id={task.id}
                index={i}
              />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
      <Flex
        direction={"column"}
        flexGrow={1}
        align={"flex-start"}
        justify={"flex-end"}
      >
        <Button
          onClick={() => Kanban.createTaskHandler(dispatch, id)}
          leftIcon={<AiOutlinePlus />}
        >
          Create Issue
        </Button>
      </Flex>
    </Flex>
  );
}
