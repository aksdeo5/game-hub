import useGenres, { Genre } from "@/hooks/useGenres";
import getCorppedImageUrl from "@/services/imageUrl";
import { List, Text, Image, HStack, Spinner, Button } from "@chakra-ui/react";

interface Props {
	onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ onGenreSelect }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List.Root variant="plain">
			{data.map((genre) => (
				<List.Item key={genre.id} paddingY="5px">
					<Button
						variant="ghost"
						width="100%"
						justifyContent="left"
						onClick={() => onGenreSelect(genre)}
					>
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCorppedImageUrl(genre.image_background)}
							/>
							<Text>{genre.name}</Text>
						</HStack>
					</Button>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;
