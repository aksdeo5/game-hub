import { Heading } from "@chakra-ui/react";

interface Props {
	selectedPlatformName?: string;
	selectedGenreName?: string;
}

const GameHeading = ({ selectedPlatformName, selectedGenreName }: Props) => {
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
