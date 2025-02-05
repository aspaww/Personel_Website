import { IoMoon, IoSunny } from "react-icons/io5"; // Gece ve gündüz ikonlarını içe aktarıyoruz.
import useLocalStorage from "../hooks/useLocalStorage"; // LocalStorage işlemleri için custom hook.
import { useLanguage } from "../contexts/LanguageContext"; // Dil ile ilgili context bilgisini almak için hook.
import { toast } from "react-toastify"; // Kullanıcıya bildirim göstermek için toast.
import "../styles/Mode.css"; // Bileşenin stil dosyasını içe aktarıyoruz.
import { useEffect } from "react"; // React'in useEffect hook'unu içe aktarıyoruz.

const ModeComponent = () => {
  // useLanguage hook'u ile mevcut dili alıyoruz.
  const { language } = useLanguage();
  
  // useLocalStorage hook'u ile "darkMode" değerini LocalStorage'dan okuyup, 
  // gerekli tip dönüşümünü yaparak isDarkMode state'ini oluşturuyoruz.
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", () => {
    const saved = localStorage.getItem("darkMode");
    // Eğer değer varsa JSON.parse ile ayrıştırıyoruz, yoksa null döndürüyoruz.
    return saved !== null ? JSON.parse(saved) : null;
  });

  // useEffect ile tema ilk yüklemede ve isDarkMode değiştiğinde uygulanır.
  useEffect(() => {
    // Kullanıcının sistem tercihine göre koyu tema tercihini alıyoruz.
    const systemIsDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    // Eğer isDarkMode değeri null ise, sistem tercihine göre initialTheme belirlenir.
    const initialTheme = isDarkMode ?? systemIsDark;
    // Body elementine 'dark' class'ını ekleyerek veya çıkararak temayı ayarlarız.
    document.body.classList.toggle("dark", initialTheme);
  }, [isDarkMode]); // isDarkMode değiştiğinde effect yeniden çalışır.

  // Tema değiştirme işlemini gerçekleştiren fonksiyon.
  const handleThemeToggle = () => {
    // Yeni tema değeri, mevcut değerin tersidir.
    const newTheme = !isDarkMode;
    // setIsDarkMode fonksiyonu, yeni temayı state ve localStorage'a yazar.
    setIsDarkMode(newTheme);
    
    // Tema değişikliğini bildiren bir toast mesajı gösteriyoruz.
    toast.success(
      language === 'tr' ? 'Tema değiştirildi!' : 'Theme changed!', 
      {
        // Tema durumuna göre uygun ikonu toast mesajında kullanıyoruz.
        icon: newTheme 
          ? <IoMoon className="mode-icon" /> 
          : <IoSunny className="mode-icon sun" />,
      }
    );
  };

  return (
    // Tema değiştirme butonu oluşturuluyor.
    <button
      onClick={handleThemeToggle} // Butona tıklandığında tema değiştirme fonksiyonu çalışır.
      className="mode-toggle-container"
      aria-label={language === 'tr' ? 'Tema değiştir' : 'Toggle theme'} // Erişilebilirlik etiketi.
    >
      <div className="mode-toggle-track">
        {/* 
          Toggle thumb (kaydırma düğmesi), isDarkMode durumuna göre 'dark' class'ını alır.
          Bu class, stil dosyasında ilgili konumlandırmayı sağlar.
        */}
        <div className={`mode-toggle-thumb ${isDarkMode ? 'dark' : ''}`}>
          {isDarkMode ? (
            // Eğer koyu mod aktifse, IoMoon ikonu gösterilir.
            <IoMoon className="mode-icon" />
          ) : (
            // Aksi halde, IoSunny ikonu gösterilir.
            <IoSunny className="mode-icon sun" />
          )}
        </div>
      </div>
      {/* 
        Tema etiketini gösteriyoruz. 
        isDarkMode durumuna ve mevcut dile göre doğru metin render edilir.
      */}
      <span className="mode-label">
        {isDarkMode 
          ? (language === 'tr' ? 'Açık Mod' : 'Light Mode') 
          : (language === 'tr' ? 'Koyu Mod' : 'Dark Mode')}
      </span>
    </button>
  );
};

export default ModeComponent;
