import useLanguage from "../hooks/useLanguage"; // Dil yönetimi için custom hook'u içe aktarıyoruz.
import "../styles/Footer.css"; // Footer bileşenine ait stil dosyasını içe aktarıyoruz.

export default function Footer() {
  // useLanguage hook'u ile çeviri fonksiyonunu elde ediyoruz.
  const { translate } = useLanguage();
  
  // "footer" key'ine ait çeviri verilerini alıyoruz.
  const footer = translate("footer");

  return (
    <>
      {/* Footer alanı */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Footer başlığı için container */}
          <div className="footer-title-container">
            {/* Başlık altındaki dekoratif çizgi */}
            <div className="footer-title-underline"></div>
            {/* Footer başlık metni */}
            <h1 className="footer-title">{footer.h1}</h1>
          </div>
          
          {/* Footer linklerinin bulunduğu bölüm */}
          <div className="footer-links">
            {/* GitHub bağlantısı */}
            <a href={footer.githubLink} className="footer-link footer-link-github">
              {footer.githubText}
            </a>
            {/* Kişisel blog bağlantısı */}
            <a href={footer.personelBlogLink} className="footer-link footer-link-blog">
              {footer.personelBlogText}
            </a>
            {/* LinkedIn bağlantısı */}
            <a href={footer.linkedInLink} className="footer-link footer-link-linkedin">
              {footer.linkedInText}
            </a>
            {/* Email bağlantısı */}
            <a href={footer.emailLink} className="footer-link footer-link-email">
              {footer.emailText}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
