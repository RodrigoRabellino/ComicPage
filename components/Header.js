import { Navbar, Text } from "@nextui-org/react";
export function Header() {
  return (
    <header>
      <Navbar isCompact variant={"sticky"}>
        <Navbar.Brand>
          <Text b hideIn={"xs"}>
            APP
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn={"xs"}>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </header>
  );
}
