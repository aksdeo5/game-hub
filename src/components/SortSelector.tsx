import { Menu, Button, Portal } from "@chakra-ui/react";

const SortSelector = () => {
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					Order by: Relevance
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value="Relevance">Relevance</Menu.Item>
						<Menu.Item value="Date added">Date added</Menu.Item>
						<Menu.Item value="Name">Name</Menu.Item>
						<Menu.Item value="Release date">Release date</Menu.Item>
						<Menu.Item value="Popularity">Popularity</Menu.Item>
						<Menu.Item value="Average rating">Average rating</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default SortSelector;
