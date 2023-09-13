import axios from "axios";

const Http = axios.create({
	baseURL: "http://localhost:7000/",
	timeout: 100000,
	headers: { 'content-type': 'application/json' }
});

Http.interceptors.response.use((response) => {
	return response;

}, (error: any) => {
	return Promise.reject(error);
});

export default Http;