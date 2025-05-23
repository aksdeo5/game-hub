import useScreenshots from "@/hooks/useScreenshots";
import { Box, Heading, Image, SimpleGrid, Skeleton } from "@chakra-ui/react";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return <Skeleton height="400px" borderRadius="lg" />;

	if (error) throw error;

	const screenshots = data?.results;

	if (!screenshots || screenshots.length === 0) return null;

	return (
		<Box maxW="960px">
			<Heading
				size={{ base: "xl", md: "2xl", lg: "3xl" }}
				mb={{ base: 2, md: 5 }}
			>
				Screenshots
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 2 }} gap={{ md: 2, lg: 4 }}>
				{screenshots?.map((screenshot) => (
					<Box
						key={screenshot.id}
						marginY={{ base: 1, md: 0 }}
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
