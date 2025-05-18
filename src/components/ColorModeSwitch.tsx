import { useColorMode } from "@/components/ui/color-mode";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Text whiteSpace="nowrap" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
				{colorMode === "light" ? "Light Mode" : "Dark Mode"}
			</Text>
			<IconButton
				onClick={toggleColorMode}
				variant="outline"
				size={{ base: "sm", md: "md", lg: "lg" }}
			>
				{colorMode === "light" ? <LuSun /> : <LuMoon />}
			</IconButton>
		</HStack>
	);
};

export default ColorModeSwitch;
