import { Game } from "@/entities/Game";
import APIClient from "@/services/apiClient";
import useGameQueryStore from "@/stores/gameQueryStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

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
