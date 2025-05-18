import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack padding={{ base: 1, md: 2 }}>
			<Link to="/">
				<Image src={logo} maxWidth={{ base: "40px", md: "60px" }} />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
