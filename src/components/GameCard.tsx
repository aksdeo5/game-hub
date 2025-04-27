import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCorppedImageUrl from "@/services/imageUrl";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root maxW="sm" overflow="hidden">
			<Image src={getCorppedImageUrl(game.background_image)} alt="" />
			<Card.Body gap="2">
				<Card.Title>{game.name}</Card.Title>
				<HStack justifyContent="space-between">
					<PlatformIconsList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
