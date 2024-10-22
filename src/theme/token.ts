
export type DesignTokens = {
    color: {
      background: {
        brand: string;
        subtle: string;
      };
      text: {
        inverse: string;
        default: string;
      };
    };
    border: {
      subtle: string;
    };
  };
  
  export const mintTokens: DesignTokens = {
    color: {
      background: {
        brand: '#00b894',
        subtle: '#dfe6e9',
      },
      text: {
        inverse: '#ffffff',
        default: '#000000',
      },
    },
    border: {
      subtle: '#81ecec',
    },
  };
  
  export const grapeTokens: DesignTokens = {
    color: {
      background: {
        brand: '#6c5ce7',
        subtle: '#dfe6e9',
      },
      text: {
        inverse: '#ffffff',
        default: '#000000',
      },
    },
    border: {
      subtle: '#74b9ff',
    },
  };
  
  export const createComponentTokens = (tokens: DesignTokens) => ({
    button: {
      primary: {
        background: tokens.color.background.brand,
        color: tokens.color.text.inverse,
      },
      secondary: {
        background: tokens.color.background.subtle,
        color: tokens.color.text.default,
      },
    },
  });
  