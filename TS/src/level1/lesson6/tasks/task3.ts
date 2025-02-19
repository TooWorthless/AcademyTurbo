{
    type ApiResponse = [
        number, ...string[]
    ]

    // ✅ ОК
    const response1: ApiResponse = [200, "Success"]; 

    // ✅ ОК
    const response2: ApiResponse = [500, "Server Error", "Try again later"]; 

    // ❌ Ошибка!
    // const response3: ApiResponse = ["Error", 500]; 
}