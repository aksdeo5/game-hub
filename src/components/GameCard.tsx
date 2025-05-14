import { Game } from "@/hooks/useGames";
import getCorppedImageUrl from "@/services/imageUrl";
import { Card, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import GameCardContainer from "./GameCardContainer";
import PlatformIconsList from "./PlatformIconsList";

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
							platforms={game.parent_platforms?.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Link to={`/games/${game.slug}`}>
						<Card.Title>{game.name}</Card.Title>
					</Link>
					<Emoji rating={game.rating_top} />
				</Card.Body>
			</Card.Root>
		</GameCardContainer>
	);
};

export default GameCard;
