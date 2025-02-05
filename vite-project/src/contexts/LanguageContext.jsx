import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import languagesData from '../data';

// Dil ile ilgili bilgileri paylaşmak için bir Context oluşturuyoruz.
const LanguageContext = createContext();

// LanguageProvider bileşeni, uygulama genelinde dil ve çeviri verilerini sağlar.
const LanguageProvider = ({ children }) => {
  // 1. Local storage'dan kaydedilmiş dil tercihini alıyoruz.
  const savedLanguage = localStorage.getItem('preferredLanguage');
  
  // 2. Tarayıcı dilini alıyoruz (örn: "en-US" -> "en").
  const browserLanguage = navigator.language.split('-')[0];
  
  // 3. Eğer local storage'da dil yoksa, tarayıcı diline göre varsayılan dil belirliyoruz.
  const defaultLanguage = savedLanguage || (browserLanguage === 'tr' ? 'tr' : 'en');
  
  // Seçili dilin durumunu tutuyoruz.
  const [language, setLanguage] = useState(defaultLanguage);
  // Seçili dil için çeviri verilerini tutuyoruz.
  const [translations, setTranslations] = useState(languagesData[defaultLanguage]);

  // Dil değiştirme işlemini yöneten asenkron fonksiyon.
  const handleLanguageChange = async (newLang) => {
    try {
      // API'ye dil değişikliği isteği gönderiyoruz.
      await axios.post('https://reqres.in/api/workintech', { lang: newLang });
      // Başarılı ise, yeni dilin çeviri verilerini alıyoruz.
      setTranslations(languagesData[newLang]);
      // Dil durumunu güncelliyoruz.
      setLanguage(newLang);
      // Yeni dili local storage'a kaydediyoruz.
      localStorage.setItem('preferredLanguage', newLang);
      // Kullanıcıya başarılı mesajı gösteriyoruz.
      toast.success(newLang === 'tr' ? 'Dil değiştirildi!' : 'Language changed!');
    } catch {
      // Hata durumunda kullanıcıya hata mesajı gösteriyoruz.
      toast.error(newLang === 'tr' ? 'Dil değiştirme hatası!' : 'Language change error!');
    }
  };

  // Bileşen yüklendiğinde veya dil değiştiğinde çalışır.
  useEffect(() => {
    const initializeTranslations = async () => {
      try {
        // API'ye geçerli dil için istek gönderiyoruz.
        await axios.post('https://reqres.in/api/workintech', { lang: language });
        // API isteği başarılı ise, çeviri verilerini güncelliyoruz.
        setTranslations(languagesData[language]);
        // Kullanıcıya bilgilendirici mesaj gösteriyoruz.
        toast.info(language === 'tr' ? 'Sayfa yüklendi!' : 'Page loaded!');
      } catch {
        // Hata durumunda kullanıcıya hata mesajı gösteriyoruz.
        toast.error(language === 'tr' ? 'Başlangıç hatası!' : 'Initialization error!');
      }
    };

    // Fonksiyonu çağırıyoruz.
    initializeTranslations();
  }, [language]); // 'language' değiştiğinde effect tekrar çalışır.

  // Verilen keyPath'e göre çeviri verisinde ilgili değeri döndüren fonksiyon.
  const translate = (keyPath) => {
    try {
      // keyPath'i nokta ile bölerek iç içe geçmiş objede arama yapıyoruz.
      return keyPath.split('.').reduce((obj, key) => obj?.[key], translations) || keyPath;
    } catch {
      // Hata durumunda keyPath'i döndürüyoruz.
      return keyPath;
    }
  };

  // Provider ile tüm alt bileşenlere dil bilgilerini sağlıyoruz.
  return (
    <LanguageContext.Provider value={{ language, translations, translate, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

// PropTypes kontrolü ile children prop'unun gerekli ve doğru tipte olduğunu belirtiyoruz.
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Uygulamanın diğer bölümlerinde dil verilerine erişimi kolaylaştıran custom hook.
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Eğer hook, LanguageProvider dışındaki bir yerde kullanılırsa hata fırlatıyoruz.
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export default LanguageProvider;
