import Game from "@/entities/Game";
import getCorppedImageUrl from "@/services/imageUrl";
import { Card, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import GameCardContainer from "./GameCardContainer";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/games/${game.slug}`);
	};

	return (
		<GameCardContainer>
			<Card.Root
				onClick={() => handleClick()}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handleClick();
					}
				}}
				role="link"
				tabIndex={0}
				cursor="pointer"
			>
				<Image src={getCorppedImageUrl(game.background_image)} alt="" />
				<Card.Body gap="2">
					<HStack justifyContent="space-between" marginBlockStart={3}>
						<PlatformIconsList
							platforms={game.parent_platforms?.map((p) => p.platform)}
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
