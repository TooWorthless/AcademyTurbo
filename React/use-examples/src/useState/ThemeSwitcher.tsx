import React, { useState } from "react";


// enum Theme {
//     light = '#fff',
//     dark = '#333',
//     grey = '#111'
// };

type Theme = 'light' | 'dark' | 'grey';
const themes: Record<Theme, { [key: string]: string }> = {
    light: { backgroundColor:'#fff', color: '#000' },
    grey: { backgroundColor:'#333', color: '#fff' },
    dark: { backgroundColor:'#111', color: '#fff' }
};


const ThemeSwitcher: React.FC = () => {

    const [theme, setTheme] = useState <Theme> ('light');

    const switchTheme = (theme: Theme) => {
        setTheme(theme);
    };

    return (
        <div
            style={{
                backgroundColor: themes[theme]?.backgroundColor,
                color: themes[theme]?.color,
                padding: '20px',
            }}
        >
            <h3>Current Theme: {theme}</h3>

            <button onClick={() => {switchTheme('light')}}>Light Theme</button>
            <p></p>
            <button onClick={() => {switchTheme('grey')}}>Grey Theme</button>
            <p></p>
            <button onClick={() => {switchTheme('dark')}}>Dark Theme</button>
            <p></p>
        </div>
    );
};


export default ThemeSwitcher;