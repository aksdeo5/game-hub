import platforms from "@/data/platforms";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const apiClient = new APIClient<Platform>("/genres");

const useGames = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: () => apiClient.getAll(),
		staleTime: 24 * 60 * 60 * 1000, //24hr
		initialData: { count: platforms.length, results: platforms },
	});

export default useGames;
