import React, { createContext, ReactNode, useState } from "react";


interface LangContextType {
    lang: string;
    changeLang: (lang: langs) => void
}

export const LangContext = createContext<LangContextType | undefined>(undefined);


interface LangProviderProps {
    children: ReactNode
}

type langs = 'ru' | 'en';

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
    const [lang, setLang] = useState<langs>('ru');

    return (
        <LangContext.Provider value={{ lang, changeLang: setLang }}>
            {children}
        </LangContext.Provider>
    );
}

