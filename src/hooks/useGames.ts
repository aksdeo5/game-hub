import { GameQuery } from "@/App";
import APIClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ms from "ms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
	return useInfiniteQuery({
		queryKey:
			gameQuery.genres ||
			gameQuery.parent_platforms ||
			gameQuery.ordering ||
			gameQuery.search
				? ["games", gameQuery]
				: ["games"],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					...gameQuery,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) =>
			lastPage.next ? allPages.length + 1 : undefined,
		staleTime: ms("24h"),
	});
};
export default useGames;
