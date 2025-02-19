{
    type ApiResponse<T> = {
        status: number,
        data: T
    } | {
        status: number,
        error: string
    }

    interface User {
        id: number,
        name: string
    }

    const success: ApiResponse<{ user: User }> = { status: 200, data: { user: { id: 1, name: "Alice" } } };
    const error: ApiResponse<any> = { status: 500, error: "Server error" };


    async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
        const response = await fetch(url);
        
        if (!response.ok) {
            const error: ApiResponse<string> = { status: 500, error: "Request failed" };
            return error;
        }

        const data = await response.json();
        const success: ApiResponse<T> = { status: 200, data };
        return success;
    }

}