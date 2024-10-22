import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { mintTokens,grapeTokens } from './theme/token';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <ThemeProvider tokens={grapeTokens}>
      <div style={{ padding: '20px' ,margin:'20px'}}>
        <h1>Design System Example</h1>
        <div style={{margin:"20px"}}>

        <Button label="Primary Button" variant="primary" />
        </div>
        <div style={{margin:"20px"}}>

        <ThemeProvider tokens={grapeTokens}>
        <Button label="Secondary Button" variant="secondary" />
        </ThemeProvider>
        </div>
  
      </div>
    </ThemeProvider>
  );
};

export default App;
