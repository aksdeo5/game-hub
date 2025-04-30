import { Menu, Button, Portal } from "@chakra-ui/react";

export interface SortOrder {
	value: string;
	label: string;
}

interface Props {
	selectedSortOrder: string;
	onSelectSortOrder: (order: SortOrder) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === selectedSortOrder
	);

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					Order by: {currentSortOrder?.label || "Relevance"}
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{sortOrders.map((order) => (
							<Menu.Item
								key={order.value}
								value={order.value}
								onClick={() => onSelectSortOrder(order)}
							>
								{order.label}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default SortSelector;
