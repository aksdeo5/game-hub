import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
	genres?: number;
	parent_platforms?: number;
	ordering?: string;
	search?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setGenre: (genreId: number) => void;
	setPlatform: (platformId: number) => void;
	setOrder: (ordering: string) => void;
	setSearch: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setGenre: (genreId: number) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genres: genreId } })),
	setPlatform: (platformId: number) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, parent_platforms: platformId },
		})),
	setOrder: (ordering: string) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, ordering },
		})),
	setSearch: (searchText: string) =>
		set(() => ({
			gameQuery: { search: searchText },
		})),
}));

if (process.env.NODE_ENV === "development")
	mountStoreDevtool("GameQuery Store", useGameQueryStore);

export default useGameQueryStore;
