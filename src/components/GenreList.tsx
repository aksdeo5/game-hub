import useGenres, { Genre } from "@/hooks/useGenres";
import getCorppedImageUrl from "@/services/imageUrl";
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	Spinner,
	Text,
} from "@chakra-ui/react";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading as="h2" marginBottom={3}>
				Genres
			</Heading>
			<List.Root variant="plain">
				{data.map((genre) => (
					<List.Item key={genre.id} paddingY="5px">
						<Button
							variant={genre.id === selectedGenre?.id ? "solid" : "ghost"}
							width="100%"
							paddingX="unset"
							justifyContent="left"
							onClick={() => onSelectGenre(genre)}
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
