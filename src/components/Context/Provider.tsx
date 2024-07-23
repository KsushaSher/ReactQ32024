import { useCallback, useMemo, useState } from 'react';
import { ThemeContext } from './Context';

interface IThemeProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IThemeProps) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }, []);

  const values = useMemo(
    () => ({ darkTheme, toggleTheme }),
    [darkTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
