import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<NavBar />
			<Box padding={{ base: 2, md: 5 }}>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
