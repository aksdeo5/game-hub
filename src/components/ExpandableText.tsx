import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [isExpanded, setExpanded] = useState(false);

	const limit = 300;

	if (!children) return null;

	if (children.length < limit) return <Text>{children}</Text>;

	const innerText = isExpanded
		? children
		: children.substring(0, limit).trim() + "...";

	return (
		<Text textAlign="justify" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
			{innerText}
			<Button
				marginLeft={1}
				size="xs"
				fontWeight="bold"
				colorPalette="yellow"
				onClick={() => setExpanded(!isExpanded)}
			>
				{isExpanded ? "Show Less" : "Show More"}
			</Button>
		</Text>
	);
};

export default ExpandableText;
