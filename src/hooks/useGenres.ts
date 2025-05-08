import genres from "@/data/genres";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

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
		staleTime: 24 * 60 * 60 * 1000, //24hr
		initialData: genres,
	});
export default useGenres;
