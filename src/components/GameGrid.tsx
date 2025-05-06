import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	return (
		<Box padding="10px">
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
				{isLoading &&
					skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCard key={game.id} game={game} />
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			{hasNextPage && (
				<Button
					variant="outline"
					onClick={() => fetchNextPage()}
					disabled={isFetchingNextPage}
					marginY={5}
				>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)}
		</Box>
	);
};

export default GameGrid;
