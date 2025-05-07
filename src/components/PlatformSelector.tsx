import { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	selectedPlatform?: Platform;
	onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					{selectedPlatform?.name || "Platform"} <BsChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{data?.results.map((platform) => (
							<Menu.Item
								key={platform.id}
								value={platform.slug}
								onClick={() => onSelectPlatform(platform)}
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
