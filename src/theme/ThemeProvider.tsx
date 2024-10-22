import React, { createContext, ReactNode, useContext } from 'react';
import { DesignTokens, createComponentTokens } from './token';

interface ThemeProviderProps {
  tokens: Partial<DesignTokens>;
  children: ReactNode;
}

interface ThemeContextProps {
  theme: ReturnType<typeof createComponentTokens>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ tokens, children }) => {
  const theme = createComponentTokens(tokens);
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
