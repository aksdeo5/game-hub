import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "4b7c967edc9d418a85dac373314d7bd9",
	},
});
