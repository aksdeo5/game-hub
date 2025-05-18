import Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<SimpleGrid columns={2} as="dl" gap={{ base: 1, md: 2, lg: 3 }}>
			<DefinitionItem term="Platforms">
				{game.parent_platforms.map(({ platform }) => (
					<Text key={platform.id} fontSize={{ base: "xs", md: "sm", lg: "md" }}>
						{platform.name}
					</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="Metascore">
				<CriticScore score={game.metacritic} />
			</DefinitionItem>
			<DefinitionItem term="Genres">
				{game.genres.map((genre) => (
					<Text key={genre.id} fontSize={{ base: "xs", md: "sm", lg: "md" }}>
						{genre.name}
					</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="Publishers">
				{game.publishers.map((publisher) => (
					<Text
						key={publisher.id}
						fontSize={{ base: "xs", md: "sm", lg: "md" }}
					>
						{publisher.name}
					</Text>
				))}
			</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;
