{

    function formatDate(date: Date): string;
    function formatDate(timestamp: number): string;
    function formatDate(input: string): null;
    function formatDate(input: Date | number | string): string | null {
        if (input instanceof Date) {
            return input.toISOString().split("T")[0]; // Формат "YYYY-MM-DD"
        }
        if (typeof input === "number") {
            const d = new Date(input);
            return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`; // Формат "DD/MM/YYYY"
        }
        return null; // Если строка → null
    }

    formatDate(new Date()); // "2024-02-19"
    formatDate(1708300800000); // "19/02/2024"
    formatDate("invalid"); // null (Ошибка!)
}