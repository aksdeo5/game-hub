import HomePage from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import GameDetailPage from "@/pages/GameDetailPage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "games/:slug", element: <GameDetailPage /> },
		],
	},
]);

export default router;
