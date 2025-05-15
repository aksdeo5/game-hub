import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
	return (
		<Badge
			width="fit-content"
			paddingX={2}
			fontSize="14px"
			colorPalette={color}
		>
			{score || "N/A"}
		</Badge>
	);
};

export default CriticScore;
