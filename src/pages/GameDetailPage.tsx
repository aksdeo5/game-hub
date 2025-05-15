import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
	const params = useParams();

	const { data: gameDetail, isLoading, error } = useGame(params.slug!);

	if (isLoading) return <Spinner />;

	if (error || !gameDetail) throw error;

	return (
		<>
			<Heading>{gameDetail.name}</Heading>
			<ExpandableText>{gameDetail.description_raw}</ExpandableText>
		</>
	);
};

export default GameDetailPage;
