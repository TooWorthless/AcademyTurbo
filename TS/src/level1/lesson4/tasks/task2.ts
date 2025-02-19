{
    type Product = {
        name: string,
        price: number
    }

    type Order = {
        id: string,
        total: number,
        items?: [Product, ...Product[]]; // Гарантируем хотя бы один элемент
    }

    // ✅ ОК
    const order: Order = {
        id: "123",
        total: 200,
        items: [{ name: "Keyboard", price: 200 }],
    };

    // ❌ Ошибка! price должен быть number
    // const order2: Order = {
    //     id: "123",
    //     total: 200,
    //     items: [{ name: "Keyboard", price: "200" }],
    // };
}