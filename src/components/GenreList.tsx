import useGenres from "@/hooks/useGenres";
import getCorppedImageUrl from "@/services/imageUrl";
import { List, Text, Image, HStack, Spinner } from "@chakra-ui/react";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List.Root variant="plain">
			{data.map((genre) => (
				<List.Item key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCorppedImageUrl(genre.image_background)}
						/>
						<Text>{genre.name}</Text>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;
