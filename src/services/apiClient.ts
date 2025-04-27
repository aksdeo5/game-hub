import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "6411f3c30037496483235d52e82b57fb",
	},
});
