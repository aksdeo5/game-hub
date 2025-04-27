import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root maxW="sm" overflow="hidden">
			<Image src={game.background_image} alt="" />
			<Card.Body gap="2">
				<Card.Title>{game.name}</Card.Title>
				<PlatformIconsList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
