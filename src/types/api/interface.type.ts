type ApiOptions = {
    url: string;
    method: string;
    data: any;
    headers: any;
}

type ApiResponseObj = {
    status: number;
    data: any;
}

export type { ApiOptions, ApiResponseObj };
