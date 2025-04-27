import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root maxW="sm" overflow="hidden">
			<Image src={game.background_image} alt="" />
			<Card.Body gap="2">
				<Card.Title>{game.name}</Card.Title>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
