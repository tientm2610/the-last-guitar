const API_URL = "http://localhost:3333/api";

export default async function apiFetch({ path, method, body, onSuccess, onFailed }: APIFetchParam) {
    const headers: [string, string][] = [];
    if (!(body instanceof FormData)) {
        headers.push([ "Content-Type", "application/json" ]);
    }

    try {
        const response: Response = await fetch(
            `${API_URL}${path}`,
            {
                method,
                body,
                headers,
                credentials: "include",
                mode: 'cors'
            }
        );

        return onSuccess(response);
    }
    catch (error: any) {
        return onFailed(error);
    }
}

export interface APIFetchParam {
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any | FormData;
    onSuccess: (response: Response) => Promise<void>;
    onFailed: (reason: any) => Promise<void>;
}