{
    type ApiResponse<T> = (
        { status: 200, data: T } |
        { status: 400, error: string } |
        { status: 403, message: string, retryAfter: number }
    )
}