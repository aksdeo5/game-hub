import { GridItem, SimpleGrid, Skeleton } from "@chakra-ui/react";

const GameDetailPageSkeleton = () => {
	const gridItems = [1, 2, 3, 4];
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
			{gridItems.map((item) => (
				<GridItem key={item}>
					<Skeleton height="400px" borderRadius="lg" />
				</GridItem>
			))}
		</SimpleGrid>
	);
};

export default GameDetailPageSkeleton;
