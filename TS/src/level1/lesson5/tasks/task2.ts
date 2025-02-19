{
    function parseJSON<T>(json: string): T | null {
        try {
            const parsed = JSON.parse(json);
            return parsed as unknown as T;
        } catch {
            return null;
        }
    }

    // ✅ Корректные вызовы:
    const user = parseJSON<{ id: string; name: string }>('{"id":"123","name":"John"}');
    console.log(user?.name); // ✅ John

    const invalid = parseJSON<{ id: string }>("not json");
    console.log(invalid); // ✅ null
}