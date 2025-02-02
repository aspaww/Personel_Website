// src/hooks/useLocalStorage.js
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        console.warn(`"${key}" anahtarı LocalStorage'da bulunamadı. Başlangıç değeri kullanılıyor.`);
        return initialValue;
      }
      return JSON.parse(item);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error('LocalStorage verisi geçersiz JSON formatında:', error.message);
      } else if (error instanceof DOMException) {
        console.error('LocalStorage erişim hatası (QuotaExceededError vb.):', error.message);
      } else {
        console.error('Beklenmeyen bir hata oluştu:', error.message);
      }
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.error('LocalStorage kotası doldu. Veri kaydedilemedi.');
      } else {
        console.error('LocalStorage yazma hatası:', error.message);
      }
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;