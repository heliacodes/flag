import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="flex gap-2 max-sm:gap-1 items-center flex-shrink-0">
      {theme === "dark" ? <IoMoonSharp /> : <FiSun/>}
      <p className="text-sm font-normal">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </p>
    </button>
  );
};

export default ThemeToggler;
