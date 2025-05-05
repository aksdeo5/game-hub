import { Platform } from "@/hooks/usePlatforms";

import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
	SiAtari,
	SiCommodore,
	SiD3Dotjs,
	SiNeovim,
	SiNintendo,
	SiSega,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
	platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		ios: MdPhoneIphone,
		android: FaAndroid,
		mac: FaApple,
		linux: FaLinux,
		nintendo: SiNintendo,
		atari: SiAtari,
		"commodore-amiga": SiCommodore,
		sega: SiSega,
		"3do": SiD3Dotjs,
		"neo-geo": SiNeovim,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms?.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
};

export default PlatformIconsList;
