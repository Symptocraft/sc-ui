import axios from "axios"
import { ApiOptions } from "../../types/api/interface.type";
import AxiosErrorHandler from "./errors";

const APIInterface = async (options: ApiOptions) => {
    const { url, method, data, headers, params, withCredentials } = options;
    const api = axios.create({
        baseURL: url,
        method: method,
        withCredentials: withCredentials,
    })
    if(headers){
        api.defaults.headers = headers
    }
    if(params){
        api.defaults.params = params
    }
    if(data){
        api.defaults.data = data
    }

    api.interceptors.response.use(
        (response) => response,
        AxiosErrorHandler
    )

    return api;
}

export default APIInterface;