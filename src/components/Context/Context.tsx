import React from 'react';

export interface IThemeContext {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const DEFAULT_CONTEXT: IThemeContext = {
  darkTheme: false,
  toggleTheme: () => {
    throw new Error('NO CONTEXT');
  },
};

export const ThemeContext = React.createContext<IThemeContext>(DEFAULT_CONTEXT);
