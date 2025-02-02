import useLanguage from '../hooks/useLanguage';
import './styles.css'; // CSS dosyasını import et

const LanguageChanger = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
      className="language-changer-btn"
    >
      {translations.changeLanguage}
    </button>
  );
};

export default LanguageChanger;