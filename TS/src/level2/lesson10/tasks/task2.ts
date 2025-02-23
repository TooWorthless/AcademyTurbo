{
    type UserDictionary = {
        [key: number]: { name: string, email?: string }
    }

    const users: UserDictionary = {
        1: { name: "Alice" },
        2: { name: "Bob", email: "bob@example.com" }
    };
    // const invalidUsers: UserDictionary = {
    //     "abc": { name: "Charlie" } // ❌ Ошибка! Ключ должен быть числом
    // };
}