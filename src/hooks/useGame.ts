import Game from "@/entities/Game";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms("30 days"),
	});

export default useGame;
