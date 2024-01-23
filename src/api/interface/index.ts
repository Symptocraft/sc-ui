import axios from "axios"
import { ApiOptions } from "../../types/api/interface.type";
import AxiosErrorHandler from "./errors";

const APIInterface = async (options: ApiOptions) => {
    const { url, method ,headers,withCredentials } = options;
    const api = axios.create({
        baseURL: url,
        method: method,
        withCredentials: withCredentials,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    })

    api.interceptors.response.use(
        (response) => response,
        AxiosErrorHandler
    )

    return api;
}

export default APIInterface;