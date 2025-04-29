import useGenres from "@/hooks/useGenres";
import getCorppedImageUrl from "@/services/imageUrl";
import { List, Text, Image, HStack } from "@chakra-ui/react";

const GenreList = () => {
	const { data } = useGenres();
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
