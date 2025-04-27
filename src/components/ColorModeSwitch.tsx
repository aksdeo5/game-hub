import { useColorMode } from "@/components/ui/color-mode";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Text>{colorMode === "light" ? "Light Mode" : "Dark Mode"}</Text>
			<IconButton onClick={toggleColorMode} variant="outline" size="sm">
				{colorMode === "light" ? <LuSun /> : <LuMoon />}
			</IconButton>
		</HStack>
	);
};

export default ColorModeSwitch;
