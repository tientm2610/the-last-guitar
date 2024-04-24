const API_URL = "http://localhost:3333/api";

export class HTTPError extends Error{
    private status: number;
    constructor (status: number, message: string) {
        super(message);
        this.status = status;
    }
}

const apiRequest = async (method: string, path: string, body?: any) => {
    let URL = API_URL+path;
    let res = await fetch(URL, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : null
    });

    let resData = await res.json();
    if (res.status !== 200) {
        throw new HTTPError(res.status, resData.message);
    }

    return resData;
};

export default apiRequest;

