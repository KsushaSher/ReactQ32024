import { useCallback, useMemo, useState } from 'react';
import { ThemeContext, ThemeType } from './Context';

interface IThemeProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IThemeProps) {
  const [theme, setDarkTheme] = useState<ThemeType>('dark');

  const toggleTheme = useCallback(() => {
    setDarkTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const values = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
