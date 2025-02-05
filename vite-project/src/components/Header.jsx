import useLanguage from "../hooks/useLanguage"; // Dil yönetimi için custom hook'u içe aktarıyoruz.
import LanguageChanger from "./LanguageChanger"; // Dil değiştirme butonunu içeren bileşeni import ediyoruz.
import ModeComponent from "./ModeComponent"; // Tema değiştirme (açık/koyu mod) bileşenini import ediyoruz.
import "../styles/Header.css"; // Header bileşenine ait stil dosyasını import ediyoruz.

export default function Header() {
  // useLanguage hook'u ile çeviri fonksiyonunu elde ediyoruz.
  const { translate } = useLanguage();
  
  // "hero" key'ine ait çeviri verilerini alıyoruz.
  const hero = translate("hero");

  return (
    <>
      {/* Header alanı */}
      <header className="header">
        <div className="container">
          {/* Dekoratif daire */}
          <div className="decorative-circle"></div>

          {/* Tema ve dil değiştirme bileşenlerinin bulunduğu alan */}
          <div className="mode-lang-container">
            <ModeComponent />
            {/* Dil ve tema bileşenleri arasında görsel bir ayırıcı */}
            <p className="separator">| </p>
            <LanguageChanger />
          </div>

          {/* Ana içerik kısmı */}
          <div className="main-content">
            <div className="profile-container">
              <div className="profile-box">
                {/* Profil görseline tıklanınca yeni sekmede açılacak bağlantı */}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Profil resmi */}
                  <img
                    src={hero.profileImg}
                    alt="Profile"
                    className="profile-img"
                  />
                </a>
              </div>

              {/* Profil detaylarının bulunduğu alan */}
              <div className="profile-details">
                {/* Selamlama metni */}
                <h1 className="greeting">{hero.greeting}</h1>
                {/* Alt çizgi dekorasyonu */}
                <div className="underline"></div>
                {/* Profil adı ve tanıtım metni */}
                <p className="profile-intro">
                  {hero.profileName}
                  {hero.intro}
                </p>
              </div>
            </div>

            {/* Sosyal medya ikonları */}
            <div className="social-icons">
              {/* LinkedIn bağlantısı */}
              <a href={hero.linkedInLink}>
                <img
                  src={hero.linkedInSVG}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              {/* GitHub bağlantısı */}
              <a href={hero.githubLink}>
                <img
                  src={hero.githubSVG}
                  alt="GitHub"
                  className="social-icon"
                />
              </a>
            </div>

            {/* Footer kısmında hero bilgileri */}
            <p className="hero-footer">{hero.heroFooter}</p>

            {/* Ek bilgi ve mail bağlantısı */}
            <p>
              {hero.heroFooter2}
              <a
                className="email-link"
                href={`mailto:${hero.heroFooterMail}`}
              >
                {hero.heroFooterMail}
              </a>
            </p>
          </div>
        </div>

        {/* Dekoratif yarım daire (örneğin sağ alt) */}
        <div className="decorative-half-circle"></div>
        {/* Dekoratif büyük daire (örneğin sağ alt) */}
        <div className="decorative-large-circle"></div>
      </header>
    </>
  );
}
