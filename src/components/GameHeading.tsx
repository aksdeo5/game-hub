import useActiveParamsStore from "@/stores/activeParamsStore";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
	const { selectedGenreName, selectedPlatformName } = useActiveParamsStore(
		(s) => s.activeParams
	);

	const heading = `${selectedPlatformName || ""} ${
		selectedGenreName || ""
	} Games`;

	return (
		<Heading as={"h1"} marginBottom={5} fontSize="3xl">
			{heading}
		</Heading>
	);
};

export default GameHeading;
