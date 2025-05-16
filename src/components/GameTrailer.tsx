import useTrailers from "@/hooks/useTrailers";
import { Box, Spinner, Text } from "@chakra-ui/react";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailers(gameId);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	const first = data?.results[0];

	if (!first) return null;

	const trailerUrl = first.data["480"];
	const previewUrl = first.preview;
	const title = first.name;

	return (
		<Box
			maxW="720px"
			mx="auto"
			mt={{ base: 5, md: 0 }}
			p={2}
			borderWidth="1px"
			borderRadius="lg"
			shadow="md"
		>
			<Text fontSize="xl" mb={4} fontWeight="semibold">
				{title}
			</Text>
			<video src={trailerUrl} poster={previewUrl} controls />
		</Box>
	);
};

export default GameTrailer;
