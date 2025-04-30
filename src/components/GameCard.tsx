import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCorppedImageUrl from "@/services/imageUrl";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<GameCardContainer>
			<Card.Root>
				<Image src={getCorppedImageUrl(game.background_image)} alt="" />
				<Card.Body gap="2">
					<HStack justifyContent="space-between" marginBlockStart={3}>
						<PlatformIconsList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Card.Title>{game.name}</Card.Title>
					<Emoji rating={game.rating_top} />
				</Card.Body>
			</Card.Root>
		</GameCardContainer>
	);
};

export default GameCard;
