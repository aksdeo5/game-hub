import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<GridItem hideBelow="lg" area="aside" paddingX={5}>
				<GenreList />
			</GridItem>
			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading />
					<HStack gap={5} marginBottom={5}>
						<PlatformSelector />
						<SortSelector />
					</HStack>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
