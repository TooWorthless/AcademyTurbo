{
    enum Theme {
        Light = 'light',
        Dark = 'dark'
    }

    type ThemeType = 'light' | 'dark';

    function setTheme(theme: Theme | string): boolean {
        const themes: string[] = Object.values(Theme);
        
        if(typeof theme === 'string') {
            return themes.includes(theme);
        }
        return themes.includes(theme);
    }
}