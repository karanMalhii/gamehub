import { Navbar, TextInput, ToggleSwitch } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function Navigation() {
  const [switch1, setSwitch1] = useState(false);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://raw.githubusercontent.com/NoroffFEU/first-year-cross-course-assignment-brief-three/master/GameHub_Logo.png"
          className="mr-3 w-24"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ToggleSwitch
          checked={switch1}
          label={switch1 ? "dark" : "light"}
          onChange={setSwitch1}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <TextInput
          className="w-full"
          type="text"
          icon={CiSearch}
          placeholder="Search here..."
          required
        />
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
