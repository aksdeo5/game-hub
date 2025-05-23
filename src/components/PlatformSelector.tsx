import usePlatforms from "@/hooks/usePlatforms";
import useActiveParamsStore from "@/stores/activeParamsStore";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
	const setPlatform = useGameQueryStore((s) => s.setPlatform);
	const setSelectedPlatformName = useActiveParamsStore(
		(s) => s.setSelectedPlatformName
	);
	const selectedPlatformName = useActiveParamsStore(
		(s) => s.activeParams.selectedPlatformName
	);

	const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					{selectedPlatformName || "Platform"} <BsChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{data?.results.map((platform) => (
							<Menu.Item
								key={platform.id}
								value={platform.slug}
								onClick={() => {
									setPlatform(platform.id);
									setSelectedPlatformName(platform.name);
								}}
							>
								{platform.name}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default PlatformSelector;
