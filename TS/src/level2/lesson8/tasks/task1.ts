{
    interface User {
        id: number,
        name: string,
        email?: string
    }

    interface Admin extends User {
        permissions: string[]
    }

    const admin1: Admin = {
        id: 1,
        name: "John",
        permissions: ["manage_users"]
    };
}