import { GameQuery } from "@/App";
import APIClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery({
		queryKey: ["/games", gameQuery],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.order?.value,
					search: gameQuery.search,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) =>
			lastPage.next ? allPages.length + 1 : undefined,
		staleTime: 24 * 60 * 60 * 1000, //24hr
	});

export default useGames;
