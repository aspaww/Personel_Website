import useLanguage from "../hooks/useLanguage"; // Dil yönetimi için oluşturulmuş custom hook'u içe aktarıyoruz.
import "../styles/Lan.css"; // İlgili stil dosyasını içe aktarıyoruz.

function LanguageChanger() {
  // useLanguage hook'u aracılığıyla mevcut dili, dil değiştirme fonksiyonunu ve çeviri fonksiyonunu alıyoruz.
  const { language, setLanguage, translate } = useLanguage();
  
  // 'changeLanguage' key'i ile ilgili çeviri metnini alıyoruz.
  const changeLanguage = translate("changeLanguage");

  // Düğmeye tıklandığında dilin değiştirilmesini sağlayan fonksiyon.
  const handleLanguageChange = () => {
    // Eğer mevcut dil 'tr' ise yeni dil 'en', aksi halde 'tr' olarak ayarlanır.
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    // Yeni dili ayarlamak için setLanguage fonksiyonunu çağırıyoruz.
    setLanguage(newLanguage);
  };

  return (
    // Düğme elementi oluşturuluyor. 'onClick' eventi handleLanguageChange fonksiyonunu tetikler.
    <button 
      className="language-changer-btn"
      onClick={handleLanguageChange}
      // Erişilebilirlik (ARIA) etiketi, mevcut dile göre butonun ne işe yaradığını belirtir.
      aria-label={language === 'tr' ? 'Dili İngilizceye çevir' : 'Switch to Turkish'}
    >
      {language === 'en' ? (
        // Eğer mevcut dil 'en' ise, buton içerisindeki içerik bu blokta render edilir.
        <>
          <span className="language-text active">{changeLanguage}</span>
          <span className="language-text">YE GEÇ</span>
        </>
      ) : (
        // Aksi halde (mevcut dil 'tr' ise), bu blok render edilir.
        <>
          <span className="language-text">SWITCH TO</span>
          <span className="language-text active">{changeLanguage}</span>
        </>
      )}
    </button>
  );
}

export default LanguageChanger;
