{
    type Theme = "light" | "dark";

    type Profile = {
        id: string;
        name: string;
        email?: string;
        phone?: `${"+"}${number}-${number}`; // Шаблонный литерал с числовыми частями
        settings: {
            theme: Theme;
            language?: string;
        };
    };

    // ✅ Корректные примеры:
    const user1: Profile = {
        id: "abc123",
        name: "John Doe",
        email: "john@example.com",
        settings: { theme: "light" }
    };

    const user2: Profile = {
        id: "abc123",
        name: "John Doe",
        phone: "+12-3456789",
        settings: { theme: "dark", language: "en" }
    };

    // ❌ Ошибка: телефон не соответствует шаблону "+XX-XXXXXXX"
    // const user3: Profile = {
    //     id: "abc123",
    //     name: "John Doe",
    //     phone: "123456789", // ❌ Ошибка!
    //     settings: { theme: "light" }
    // };

    // ❌ Ошибка: неверное значение theme
    // const user4: Profile = {
    //     id: "abc123",
    //     name: "John Doe",
    //     settings: { theme: "blue" } // ❌ Ошибка!
    // };
}