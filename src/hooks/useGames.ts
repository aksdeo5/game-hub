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
	const genreId = gameQuery.genre?.id;
	const platformId = gameQuery.platform?.id;
	const orderValue = gameQuery.order?.value;
	const search = gameQuery.search;

	return useInfiniteQuery({
		queryKey:
			genreId || platformId || orderValue || search
				? [
						"games",
						{
							genre: genreId,
							platform: platformId,
							order: orderValue,
							search: search,
						},
				  ]
				: ["games"],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: genreId,
					parent_platforms: platformId,
					ordering: orderValue,
					search: search,
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
