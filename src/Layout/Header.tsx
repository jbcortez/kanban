import { Box } from "@chakra-ui/react";
import { Nav } from "../components/Nav";

export function Header() {
  return (
    <Box
      as={"header"}
      p={2}
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
      boxShadow={"sm"}
    >
      <Nav />
    </Box>
  );
}
