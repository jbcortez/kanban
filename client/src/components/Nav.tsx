import { Button, Stack, Flex, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <Flex as={"nav"} justify={"space-between"}>
      <Stack direction={"row"}>
        <Button colorScheme="teal" variant="ghost">
          <Link to={"/kanban"}>Your Work</Link>
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Projects
        </Button>
        <Button colorScheme="teal" variant="solid">
          Create
        </Button>
      </Stack>
      <Flex align={"center"}>
        <Avatar as={"button"} size={"sm"} cursor={"pointer"} tabIndex={0} />
      </Flex>
    </Flex>
  );
}
