import genres from "@/data/genres";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.getAll(),
		staleTime: ms("24h"),
		initialData: genres,
	});
export default useGenres;
