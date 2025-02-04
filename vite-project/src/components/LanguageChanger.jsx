import useLanguage from "../hooks/useLanguage";
import "../styles/Lan.css"; 

function LanguageChanger() {
  const { language, setLanguage, translate } = useLanguage();
  const changeLanguage = translate("changeLanguage");

  const handleLanguageChange = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLanguage);
  };

  return (
    <button 
      className="language-changer-btn"
      onClick={handleLanguageChange}
      aria-label={language === 'tr' ? 'Dili İngilizceye çevir' : 'Switch to Turkish'}
    >
      {language === 'en' ? (
        <>
          <span className="language-text active">{changeLanguage}</span>
          <span className="language-text">YE GEÇ</span>
        </>
      ) : (
        <>
          <span className="language-text">SWITCH TO</span>
          <span className="language-text active">{changeLanguage}</span>
        </>
      )}
    </button>
  );
}

export default LanguageChanger;