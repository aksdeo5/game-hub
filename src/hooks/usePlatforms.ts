import useData from "./useData";

interface Platform {
	id: number;
	name: string;
	slug: string;
}

const useGames = () => useData<Platform>("/platforms/lists/parents");

export default useGames;
