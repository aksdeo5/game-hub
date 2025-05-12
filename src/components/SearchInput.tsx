import useActiveParamsStore from "@/stores/activeParamsStore";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
	const setSearch = useGameQueryStore((s) => s.setSearch);
	const setSelectedGenreName = useActiveParamsStore(
		(s) => s.setSelectedGenreName
	);
	const setSelectedPlatformName = useActiveParamsStore(
		(s) => s.setSelectedPlatformName
	);
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					setSearch(ref.current.value);
					setSelectedGenreName(undefined);
					setSelectedPlatformName(undefined);
				}
			}}
		>
			<InputGroup startElement={<BsSearch />}>
				<Input ref={ref} borderRadius={20} placeholder="Search games..." />
			</InputGroup>
		</form>
	);
};

export default SearchInput;
