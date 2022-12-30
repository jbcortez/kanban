import { Container, Flex } from "@chakra-ui/react";
import useGetColumns from "../hooks/useGetColumns";
import Column from "../components/Column";

export default function Kanban() {
  const columns = useGetColumns();

  return (
    <Container maxW={1200}>
      <Flex p={5}>
        {columns.map((col) => {
          return (
            <Column
              key={col.id}
              tasks={col.tasks}
              id={col.id}
              title={col.title}
            />
          );
        })}
      </Flex>
    </Container>
  );
}
