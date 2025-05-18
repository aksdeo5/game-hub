import useActiveParamsStore from "@/stores/activeParamsStore";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
	const setSearch = useGameQueryStore((s) => s.setSearch);
	const setSelectedGenreName = useActiveParamsStore(
		(s) => s.setSelectedGenreName
	);
	const setSelectedPlatformName = useActiveParamsStore(
		(s) => s.setSelectedPlatformName
	);
	const ref = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				const serachText = ref.current?.value.trim() || undefined;
				if (ref.current) ref.current.value = "";
				setSearch(serachText);
				setSelectedGenreName(undefined);
				setSelectedPlatformName(undefined);
				navigate("/");
			}}
		>
			<InputGroup startElement={<BsSearch />}>
				<Input
					ref={ref}
					borderRadius={{ base: 15, md: 20 }}
					placeholder="Search games..."
					maxWidth="720px"
					size={{ base: "xs", md: "md", lg: "lg" }}
					fontSize={{ base: "xs", md: "md", lg: "lg" }}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
