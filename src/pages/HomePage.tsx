import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";

const HomePage = () => {
	const search = useGameQueryStore((s) => s.gameQuery.search);

	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem hideBelow="lg" area="aside">
				<GenreList />
			</GridItem>
			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading />
					<HStack gap={{ base: 2, md: 3, lg: 5 }} marginBottom={3}>
						<PlatformSelector />
						<SortSelector />
					</HStack>
					{search && (
						<Text
							fontSize={{ base: "sm", md: "md", lg: "lg" }}
							fontWeight="medium"
							marginBottom={2}
							color="gray.500"
						>
							Search: &quot;{search}&quot;
						</Text>
					)}
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
