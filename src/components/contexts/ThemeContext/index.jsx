import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const theme = {
  background: 'var(--principal-dark-bg)',
  color: 'var(--principal-dark-text)',
};

export const ThemeProvider = ({ children }) => {
  const [themeSelected, setThemeSelected] = useState(theme);

  return (
    <ThemeContext.Provider value={{ themeSelected, setThemeSelected }}>
      {children}
    </ThemeContext.Provider>
  );
};
