{
    type Settings = {
        theme: 'light' | 'dark',
        language:  string,
    } | {
        [key: string]: boolean | number;
    };

    const settings: Settings = { theme: "dark", language: "en", notifications: true }; // ✅ ОК
    // const invalidSettings: Settings = { theme: "light", language: "fr", custom: "error" }; // ❌ Ошибка!
}