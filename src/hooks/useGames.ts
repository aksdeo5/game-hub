import { GameQuery } from "@/App";
import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "@/services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGame = (gameQuery: GameQuery) =>
	useQuery({
		queryKey: ["/games", gameQuery],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.order?.value,
						search: gameQuery.search,
					},
				})
				.then((res) => res.data),
	});

export default useGame;
