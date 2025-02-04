import useLanguage from "../hooks/useLanguage";
import LanguageChanger from "./LanguageChanger";
import ModeComponent from "./ModeComponent";
import "../styles/Header.css"; 

export default function Header() {
  const { translate } = useLanguage();
  // useLanguage hook'u ile `translate` fonksiyonunu alıyoruz.
  const hero = translate("hero");

  return (
    <>
      <header className="header">
        {/* Header: font-family, text-align, padding-top, transition, arka plan ve dark mod ayarları */}
        <div className="container">
          {/* Sayfa kenar boşlukları (padding x: 18vw) */}
          <div className="decorative-circle"></div>
          {/* Dekoratif yuvarlak şekil */}

          <div className="mode-lang-container">
            <ModeComponent />
            {/* Karanlık mod değiştirici */}
            <p className="separator">| </p>
            {/* Ayırıcı dik çizgi */}
            <LanguageChanger />
            {/* Dil değiştirici */}
          </div>

          <div className="main-content">
            {/* Ana içerik alanı */}
            <div className="profile-container">
              {/* Profil resmi ve detayları kapsayıcı; küçük ekranlarda alt alta, lg'de yan yana */}
              <div className="profile-box">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={hero.profileImg}
                    alt="Profile"
                    className="profile-img"
                  />
                </a>
              </div>

              <div className="profile-details">
                <h1 className="greeting">{hero.greeting}</h1>
                <div className="underline"></div>
                <p className="profile-intro">
                  {hero.profileName}
                  {hero.intro}
                </p>
              </div>
            </div>

            <div className="social-icons">
              <a href={hero.linkedInLink}>
                <img
                  src={hero.linkedInSVG}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              <a href={hero.githubLink}>
                <img
                  src={hero.githubSVG}
                  alt="GitHub"
                  className="social-icon"
                />
              </a>
            </div>

            <p className="hero-footer">{hero.heroFooter}</p>

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

        <div className="decorative-half-circle"></div>
        {/* Sağ alt dekoratif yarım daire */}
        <div className="decorative-large-circle"></div>
        {/* Sağ alt büyük dekoratif daire */}
      </header>
    </>
  );
}


