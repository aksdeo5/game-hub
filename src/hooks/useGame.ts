import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface GameDetail {
	id: number;
	slug: string;
	name: string;
	description_raw: string;
}

const apiClient = new APIClient<GameDetail>("/games");

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms("30 days"),
	});

export default useGame;
