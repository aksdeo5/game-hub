import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface ActiveParams {
	selectedPlatformName?: string;
	selectedGenreName?: string;
}
interface ActiveParamsStore {
	activeParams: ActiveParams;
	setSelectedGenreName: (selectedGenreName: string) => void;
	setSelectedPlatformName: (selectedPlatformName: string) => void;
}

const useActiveParamsStore = create<ActiveParamsStore>((set) => ({
	activeParams: {},
	setSelectedGenreName: (selectedGenreName: string) =>
		set((store) => ({
			activeParams: { ...store.activeParams, selectedGenreName },
		})),
	setSelectedPlatformName: (selectedPlatformName: string) =>
		set((store) => ({
			activeParams: { ...store.activeParams, selectedPlatformName },
		})),
}));

if (process.env.NODE_ENV === "development")
	mountStoreDevtool("ActiveParams Store", useActiveParamsStore);

export default useActiveParamsStore;
