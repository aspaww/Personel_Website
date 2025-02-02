import useLanguage from '../hooks/useLanguage';

const LanguageChanger = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
      className="fixed top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
    >
      {translations.changeLanguage}
    </button>
  );
};

export default LanguageChanger;