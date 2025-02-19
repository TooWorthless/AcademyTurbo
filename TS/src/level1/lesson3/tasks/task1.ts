type Settings = {
    theme: 'light' | 'dark',
    language?: string,
    timezone?: 'UTC' | 'GMT' | 'CET'
}

// ✅ ОК
const settings: Settings = { theme: "dark", language: "en" }; 

// ❌ Ошибка!
// const settings2: Settings = { theme: "light", timezone: "PST" }; 
