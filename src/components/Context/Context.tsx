import React from 'react';

export type ThemeType = 'dark' | 'light';

export interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const DEFAULT_CONTEXT: IThemeContext = {
  theme: 'dark',
  toggleTheme: () => {
    throw new Error('NO CONTEXT');
  },
};

export const ThemeContext = React.createContext<IThemeContext>(DEFAULT_CONTEXT);
