import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "4b7c967edc9d418a85dac373314d7bd9",
	},
});

export default class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll(requestConfig?: AxiosRequestConfig) {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, requestConfig)
			.then((res) => res.data);
	}

	get(id: string) {
		return axiosInstance
			.get<T>(`${this.endpoint}/${id}`)
			.then((res) => res.data);
	}
}
