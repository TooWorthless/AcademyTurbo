type AllowedKeys = "en" | "fr" | "de";

type Translations = Record<AllowedKeys, string>;

// ✅ ОК
const t1: Translations = { en: "Hello", fr: "Bonjour", de: "Hallo" };

// ❌ Ошибка! ("es" не входит в список разрешённых ключей)
// const t2: Translations = { en: "Hello", fr: "Bonjour", de: "Hallo", es: "Hola" };