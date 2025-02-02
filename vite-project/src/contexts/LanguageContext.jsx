// src/contexts/LanguageContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import languagesData from '../data';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const browserLanguage = navigator.language.split('-')[0];
  const defaultLanguage = browserLanguage === 'tr' ? 'tr' : 'en';
  const [language, setLanguage] = useState(defaultLanguage);
  const [translations, setTranslations] = useState(languagesData[defaultLanguage]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLanguageChange = async (newLang) => {
    try {
      setIsLoading(true);
      await axios.post('https://reqres.in/api/workintech', { lang: newLang });
      setTranslations(languagesData[newLang]);
      setLanguage(newLang);
      toast.success(newLang === 'tr' ? 'Dil değiştirildi!' : 'Language changed!');
    } catch {
      toast.error(newLang === 'tr' ? 'Dil değiştirme hatası!' : 'Language change error!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initializeTranslations = async () => {
      try {
        await axios.post('https://reqres.in/api/workintech', { lang: language });
        setTranslations(languagesData[language]);
        toast.info(language === 'tr' ? 'Sayfa yüklendi!' : 'Page loaded!');
      } catch {
        toast.error(language === 'tr' ? 'Başlangıç hatası!' : 'Initialization error!');
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeTranslations();
  }, [language]);

  const translate = (keyPath) => {
    try {
      return keyPath.split('.').reduce((obj, key) => obj?.[key], translations) || keyPath;
    } catch {
      return keyPath;
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="animate-pulse text-2xl text-blue-600">
          {language === 'tr' ? 'Yükleniyor...' : 'Loading...'}
        </div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, translations, translate, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook'u ayrı bir dosyada kullanmak için
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export default LanguageProvider;