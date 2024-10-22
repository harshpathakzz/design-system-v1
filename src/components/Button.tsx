
import React from 'react';
import { withTheme } from '../theme/withTheme';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  label: string;
  theme?: any;  
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, theme }) => {
  if (!theme || !theme.button || !theme.button[variant]) {
    console.error('Button: Missing theme or button variant');
    return null;
  }

  const buttonStyle = {
    backgroundColor: theme.button[variant].background,
    color: theme.button[variant].color,
  };

  return (
    <button className="button" style={buttonStyle}>
      {label}
    </button>
  );
};

export default withTheme(Button);
