import { Navbar } from 'flowbite-react';
const Manus = () => {
  return (
    <Navbar.Collapse>
      <Navbar.Link href='#' active>
        Home
      </Navbar.Link>
      <Navbar.Link href='#'>Available Foods</Navbar.Link>
      <Navbar.Link href='#'>Add Food</Navbar.Link>

      <Navbar.Link href='#'>Manage My Foods</Navbar.Link>
      <Navbar.Link href='#'>My Food Request</Navbar.Link>
    </Navbar.Collapse>
  );
};

export default Manus;
