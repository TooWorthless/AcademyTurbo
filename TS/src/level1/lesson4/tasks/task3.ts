{
    // type FormData = {
        // [key: string]: string | number | (Address & { [key: string]: unknown }) | undefined;
    //     address?: Address;
    // };

    // type Address = {
    //     city: string;
    //     country: string;
    // };

    type Exact<T, U> = U extends T ? (T extends U ? U : never) : never;

    type Address = Exact<{ city: string; country: string }, { city: string; country: string }>;

    type FormData = {
        [key: string]: string | number | (Address & { [key: string]: unknown }) | undefined;
        address?: Address;
    };

    // ✅ Корректные примеры:
    const data1: FormData = { name: "Alice", age: 25 }; // ✅ ОК
    const data2: FormData = { name: "Alice", address: { city: "Berlin", country: "Germany" } }; // ✅ ОК

    // ❌ Ошибка: address.city есть, но нет country
    // const data3: FormData = { name: "Alice", address: { city: "Berlin" } }; // ❌ Ошибка!

    // ❌ Ошибка: address.country есть, но нет city
    // const data4: FormData = { name: "Alice", address: { country: "Germany" } }; // ❌ Ошибка!

    // ✅ Допускается добавление других ключей вместе с address
    const data5: FormData = {
        name: "Alice",
        age: 30,
        address: { city: "Paris", country: "France" },
        email: "alice@example.com"
    }; // ✅ ОК

    // ❌ Ошибка: address не соответствует формату
    // const data6: FormData = {
    //     name: "Alice",
    //     address: "Berlin, Germany" // ❌ Ошибка!
    // };

}