import { createContext, useState } from 'react';

const ThemContext = createContext();

function ThemProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    toggleTheme,
  };
  return <ThemContext.Provider value={value}>{children}</ThemContext.Provider>;
}

export { ThemContext, ThemProvider };
