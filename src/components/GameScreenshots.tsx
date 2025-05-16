import useScreenshots from "@/hooks/useScreenshots";
import { Box, SimpleGrid, Text, Image, Spinner } from "@chakra-ui/react";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	const screenshots = data?.results;

	if (!screenshots || screenshots.length === 0) return null;

	return (
		<Box maxW="960px" mx="auto" my={10}>
			<Text fontSize="2xl" fontWeight="bold" mb={6}>
				Screenshots
			</Text>

			<SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
				{screenshots?.map((screenshot) => (
					<Box
						key={screenshot.id}
						overflow="hidden"
						borderRadius="md"
						borderWidth="1px"
					>
						<Image
							src={screenshot.image}
							objectFit="cover"
							w="100%"
							h="100%"
							transition="transform 0.2s"
							_hover={{ transform: "scale(1.02)" }}
						/>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default GameScreenshots;
