import { ApiOptions, ApiResponseObj } from "../../types/api/interface.type";
import { setUserData } from "../../utils/userData";

const BaseUrl = import.meta.env.VITE_API_URL;
const APPUrl = import.meta.env.VITE_BASE_URL;
const APIInterface = async (options: ApiOptions) => {
    const { url, method, headers } = options;
    const fetchOptions = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": APPUrl,
            ...headers
        },
        body: JSON.stringify(options.data),
    };

    try {
        const response = await fetch(`${BaseUrl}${url}`, fetchOptions);
        const data = await response.json();
        if (response.ok && data.token) {
            const userData = {
                token: data.token,
                name: data.name,
                email: data.email,
                username: data.username
            }
            setUserData(userData);
        }   
        const apiResponseObj:ApiResponseObj = {
            status: response.status,
            data: data
        } 
        return apiResponseObj;
    } catch (error: any) {
        throw new Error(error);
    }
}
   
export default APIInterface;