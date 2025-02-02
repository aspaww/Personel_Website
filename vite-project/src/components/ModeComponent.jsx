// ModeComponent.jsx
import { useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "react-toastify";

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
      applyTheme(false);
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    applyTheme(newTheme);
    
    toast.success(language === 'tr' ? 'Tema değiştirildi!' : 'Theme changed!', {
      icon: newTheme ? <IoMoon className="moon-icon" /> : <IoSunny className="sun-icon" />,
    });
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="mode-toggle-btn"
      aria-label={language === 'tr' ? 'Tema değiştir' : 'Toggle theme'}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDarkMode ? 'dark' : ''}`}>
          {isDarkMode ? (
            <IoMoon className="mode-icon moon-icon" />
          ) : (
            <IoSunny className="mode-icon sun-icon" />
          )}
        </div>
      </div>
      <span className="mode-label">
        {isDarkMode 
          ? (language === 'tr' ? 'Açık Mod' : 'Light Mode') 
          : (language === 'tr' ? 'Koyu Mod' : 'Dark Mode')}
      </span>
    </button>
  );
};

export default ModeComponent;