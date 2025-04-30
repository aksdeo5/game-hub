import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	order: SortOrder | null;
	search: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
					onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					selectedGenre={gameQuery.genre}
				/>
			</GridItem>
			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading gameQuery={gameQuery} />
					<HStack gap={5} marginBottom={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platform })
							}
						/>
						<SortSelector
							selectedSortOrder={gameQuery.order?.value || ""}
							onSelectSortOrder={(order) =>
								setGameQuery({ ...gameQuery, order })
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
