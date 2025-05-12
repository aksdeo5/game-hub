import useGenres from "@/hooks/useGenres";
import getCorppedImageUrl from "@/services/imageUrl";
import useActiveParamsStore from "@/stores/activeParamsStore";
import useGameQueryStore from "@/stores/gameQueryStore";
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	Spinner,
	Text,
} from "@chakra-ui/react";

const GenreList = () => {
	const setGenre = useGameQueryStore((s) => s.setGenre);
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genres);
	const setSelectedGenreName = useActiveParamsStore(
		(s) => s.setSelectedGenreName
	);

	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading as="h2" marginBottom={3}>
				Genres
			</Heading>
			<List.Root variant="plain">
				{data?.results.map((genre) => (
					<List.Item key={genre.id} paddingY="5px">
						<Button
							variant={genre.id === selectedGenreId ? "solid" : "ghost"}
							width="100%"
							paddingX="unset"
							justifyContent="left"
							onClick={() => {
								setGenre(genre.id);
								setSelectedGenreName(genre.name);
							}}
						>
							<HStack>
								<Image
									boxSize="32px"
									borderRadius={8}
									objectFit="cover"
									src={getCorppedImageUrl(genre.image_background)}
								/>
								<Text whiteSpace="normal" textAlign="left">
									{genre.name}
								</Text>
							</HStack>
						</Button>
					</List.Item>
				))}
			</List.Root>
		</>
	);
};

export default GenreList;
