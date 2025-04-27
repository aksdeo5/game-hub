import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card.Root width="300px" overflow="hidden">
			<Skeleton height="191.5px" />
			<Card.Body gap="2">
				<SkeletonText />
			</Card.Body>
		</Card.Root>
	);
};

export default GameCardSkeleton;
