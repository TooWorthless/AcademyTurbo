import React, { useContext } from "react";
import { LangContext } from "./Lang";



interface LanguageSwitcherProps {}


const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
    const langContext = useContext(LangContext);
    return (
        <button onClick={() => langContext?.changeLang(langContext.lang === "ru" ? "en" : "ru")}>
            Сменить язык ({langContext?.lang})
        </button>
    );
};


export default LanguageSwitcher;