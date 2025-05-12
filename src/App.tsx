import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

interface ActiveParams {
	selectedPlatformName?: string;
	selectedGenreName?: string;
}

export interface GameQuery {
	genres?: number;
	parent_platforms?: number;
	ordering?: string;
	search?: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const [activeParams, setActiveParams] = useState<ActiveParams>({});

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
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, search: searchText })
					}
				/>
			</GridItem>
			<GridItem hideBelow="lg" area="aside" paddingX={5}>
				<GenreList
					onSelectGenre={(genre) => {
						setGameQuery({ ...gameQuery, genres: genre.id });
						setActiveParams({
							...activeParams,
							selectedGenreName: genre.name,
						});
					}}
					selectedGenreId={gameQuery.genres}
				/>
			</GridItem>
			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading
						selectedPlatformName={activeParams.selectedPlatformName}
						selectedGenreName={activeParams.selectedGenreName}
					/>
					<HStack gap={5} marginBottom={5}>
						<PlatformSelector
							selectedPlatformName={activeParams.selectedPlatformName}
							onSelectPlatform={(platform) => {
								setGameQuery({ ...gameQuery, parent_platforms: platform.id });
								setActiveParams({
									...activeParams,
									selectedPlatformName: platform.name,
								});
							}}
						/>
						<SortSelector
							selectedSortOrder={gameQuery.ordering}
							onSelectSortOrder={(ordering) =>
								setGameQuery({ ...gameQuery, ordering })
							}
						/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
