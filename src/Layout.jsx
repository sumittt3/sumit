import React, { createContext, useContext, useState } from "react";
import {Outlet} from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function Layout() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
}
