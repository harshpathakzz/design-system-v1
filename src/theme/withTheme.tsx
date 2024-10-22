import React from 'react';
import { useTheme } from './ThemeProvider';


interface WithThemeProps {
  theme?: any;
}

export const withTheme = <P extends WithThemeProps>(Component: React.ComponentType<P>) => {
  return (props: Omit<P, 'theme'>) => {
    const { theme } = useTheme();
    return <Component {...(props as P)} theme={theme} />;
  };
};
