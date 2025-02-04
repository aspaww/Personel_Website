import { IoMoon, IoSunny } from "react-icons/io5";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "react-toastify";
import "../styles/Mode.css";
import { useEffect } from "react";

const ModeComponent = () => {
  const { language } = useLanguage();
  
  // LocalStorage'dan değer okurken doğru tip dönüşümü
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", () => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : null;
  });

  // Tema ilk yüklemede ve değişimde uygula
  useEffect(() => {
    const systemIsDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initialTheme = isDarkMode ?? systemIsDark;
    document.body.classList.toggle("dark", initialTheme);
  }, [isDarkMode]); // isDarkMode değiştiğinde tetikle

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme); // Otomatik olarak localStorage'a yazar
    
    toast.success(language === 'tr' ? 'Tema değiştirildi!' : 'Theme changed!', {
      icon: newTheme ? <IoMoon className="mode-icon" /> : <IoSunny className="mode-icon sun" />,
    });
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="mode-toggle-container"
      aria-label={language === 'tr' ? 'Tema değiştir' : 'Toggle theme'}
    >
      <div className="mode-toggle-track">
        <div className={`mode-toggle-thumb ${isDarkMode ? 'dark' : ''}`}>
          {isDarkMode ? (
            <IoMoon className="mode-icon" />
          ) : (
            <IoSunny className="mode-icon sun" />
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