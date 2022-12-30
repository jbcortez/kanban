import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

export function Breadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={"#"}>Projects</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={"#"}>Test Project</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
