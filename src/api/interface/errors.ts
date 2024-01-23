import axios, { AxiosError, AxiosResponse } from "axios";

const AxiosErrorHandler = async (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
        const { status, data } = error.response! as AxiosResponse ?? { status: 500, data: { message: "Internal Server Error" } };

        switch (status) {
            // Handle Errors - Define different Responses for different status codes
            case 400:
                return Promise.reject(data);
            case 401:
                // Remove Any Local Or Session Storage
                return Promise.reject(data);
            case 403:
                return Promise.reject(data);
            case 404:
                return Promise.reject(data);
            case 500:
                return Promise.reject(data);
            default:
                return Promise.reject(data);
        }
    }
    // Handle Network Errors
    return Promise.reject(error);
}

export default AxiosErrorHandler;
    