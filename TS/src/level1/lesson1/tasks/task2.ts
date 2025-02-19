// type User = {
//     id: string;
//     name: string;
// } & Partial<{
//     email: string;
//     phone: string;
//     company: string;
//     paymentHistory: string[];
// }>;

type User = {
    id: string;
    name: string;
} & Partial<Record<"email" | "phone" | "company" | "paymentHistory", string | string[]>>;

// ✅ Корректные примеры:
const user1: User = { id: "abc123", name: "John Doe", email: "john@example.com" };
const user2: User = { id: "abc123", name: "John Doe", phone: "+123456789" };
const user3: User = { id: "abc123", name: "John Doe", company: "Tech Corp", paymentHistory: ["TXN001", "TXN002"] };

// ❌ Ошибка: отсутствует name
// const user4: User = { id: "abc123" }; 