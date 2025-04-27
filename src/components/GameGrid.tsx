import apiClient from "@/services/apiClient";
import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
	id: number;
	name: string;
}

interface FetchGameResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGameResponse>("/games")
			.then((res) => {
				setGames(res.data.results);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});
		return () => {};
	}, []);

	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
