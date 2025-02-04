import { IoMoon, IoSunny } from "react-icons/io5";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "react-toastify";
import "../styles/Mode.css"; 

const ModeComponent = () => {
  const { language } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", null);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    document.body.classList.toggle("dark", newTheme);
    setIsDarkMode(newTheme);
    
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