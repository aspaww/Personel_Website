// LocalStorage üzerinde veri okuma ve yazma işlemleri için özel bir hook tanımlıyoruz.
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Başlangıç değeri LocalStorage'dan alınır veya initialValue olarak ayarlanır.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Belirtilen anahtar ile LocalStorage'dan veri alınıyor.
      const item = window.localStorage.getItem(key);
      if (item === null) {
        // Eğer anahtar LocalStorage'da bulunamazsa, uyarı mesajı ve başlangıç değeri kullanılır.
        console.warn(`"${key}" anahtarı LocalStorage'da bulunamadı. Başlangıç değeri kullanılıyor.`);
        return initialValue;
      }
      // Alınan veri JSON formatında çözülerek döndürülür.
      return JSON.parse(item);
    } catch (error) {
      // JSON hatası varsa veya başka bir sorun oluşursa ilgili hata mesajları gösterilir.
      if (error instanceof SyntaxError) {
        console.error('LocalStorage verisi geçersiz JSON formatında:', error.message);
      } else if (error instanceof DOMException) {
        console.error('LocalStorage erişim hatası (QuotaExceededError vb.):', error.message);
      } else {
        console.error('Beklenmeyen bir hata oluştu:', error.message);
      }
      // Hata durumunda başlangıç değeri döndürülür.
      return initialValue;
    }
  });

  // LocalStorage'da değer güncelleme işlemi
  const setValue = (value) => {
    try {
      // Eğer value bir fonksiyon ise mevcut değerle çalıştırılır.
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore); // React state güncellenir
      // Yeni değer JSON formatına çevrilip LocalStorage'a kaydedilir.
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Kotanın dolması gibi durumlar için hata kontrolü
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.error('LocalStorage kotası doldu. Veri kaydedilemedi.');
      } else {
        console.error('LocalStorage yazma hatası:', error.message);
      }
    }
  };

  // Hook çağrısında state ve güncelleme fonksiyonu döndürülüyor.
  return [storedValue, setValue];
};

export default useLocalStorage;
