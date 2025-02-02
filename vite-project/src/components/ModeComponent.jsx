// src/components/ModeComponent.jsx
import { useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import useLocalStorage  from "../hooks/useLocalStorage";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "react-toastify";
import clsx from "clsx";

const ModeComponent = () => {
  const { language } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", null);

  const applyTheme = (dark) => {
    document.body.classList.toggle("dark", dark);
    setIsDarkMode(dark);
  };

  useEffect(() => {
    try {
      const systemIsDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      const initialTheme = isDarkMode ?? systemIsDark;
      applyTheme(initialTheme);
    } catch {
      applyTheme(false); // Hata durumunda light theme fallback
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    applyTheme(newTheme);
    
    toast.success(language === 'tr' ? 'Tema değiştirildi!' : 'Theme changed!', {
      icon: newTheme ? <IoMoon className="text-blue-400" /> : <IoSunny className="text-yellow-400" />,
    });
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={clsx(
        "flex items-center gap-2 p-2 rounded-full transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "focus:ring-indigo-500 dark:focus:ring-indigo-400"
      )}
      aria-label={language === 'tr' ? 'Tema değiştir' : 'Toggle theme'}
    >
      <div className={clsx(
        "relative w-12 h-6 rounded-full p-1 transition-colors duration-300",
        "bg-gray-200 dark:bg-gray-700"
      )}>
        <div className={clsx(
          "absolute top-1 w-4 h-4 rounded-full transform transition-transform duration-300",
          "bg-white dark:bg-gray-900 shadow-md",
          isDarkMode ? "translate-x-6" : "translate-x-0"
        )}>
          {isDarkMode ? (
            <IoMoon className="w-full h-full text-yellow-400" />
          ) : (
            <IoSunny className="w-full h-full text-orange-400" />
          )}
        </div>
      </div>
      <span className={clsx(
        "text-sm font-medium",
        "text-gray-600 dark:text-gray-300"
      )}>
        {isDarkMode 
          ? (language === 'tr' ? 'Açık Mod' : 'Light Mode') 
          : (language === 'tr' ? 'Koyu Mod' : 'Dark Mode')}
      </span>
    </button>
  );
};

export default ModeComponent;