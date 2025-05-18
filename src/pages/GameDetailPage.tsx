import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameDetailPageSkeleton from "@/components/GameDetailPageSkeleton";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, GridItem, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
	const params = useParams();

	const { data: game, isLoading, error } = useGame(params.slug!);

	if (isLoading) return <GameDetailPageSkeleton />;

	if (error || !game) throw error;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
			<GridItem>
				<Stack gap={5}>
					<Box>
						<Heading
							size={{ base: "xl", md: "2xl", lg: "3xl" }}
							marginBottom={{ base: 1, md: 2, lg: 3 }}
						>
							{game.name}
						</Heading>
						<ExpandableText>{game.description_raw}</ExpandableText>
					</Box>
					<GameAttributes game={game} />
				</Stack>
			</GridItem>
			<GridItem>
				<Stack gap={5}>
					<GameTrailer gameId={game.id} />
					<GameScreenshots gameId={game.id} />
				</Stack>
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
