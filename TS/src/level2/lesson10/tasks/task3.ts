{
    function getSetting<T, K extends keyof T>(settings: T, key: K): T[K] {
        return settings[key];
    }
    
    const settings = { theme: "dark", language: "en" };
    const lang = getSetting(settings, "language"); // ✅ "en"
    // const error = getSetting(settings, "notExist"); // ❌ Ошибка!
}