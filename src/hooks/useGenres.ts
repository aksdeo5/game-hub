import genres from "@/data/genres";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.getAll(),
		staleTime: ms("24h"),
		initialData: genres,
	});
export default useGenres;
