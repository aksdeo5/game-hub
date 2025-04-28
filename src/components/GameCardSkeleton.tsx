import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
	return (
		<GameCardContainer>
			<Card.Root>
				<Skeleton height="191.5px" />
				<Card.Body gap="2">
					<SkeletonText />
				</Card.Body>
			</Card.Root>
		</GameCardContainer>
	);
};

export default GameCardSkeleton;
