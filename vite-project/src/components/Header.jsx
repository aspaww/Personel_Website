import { useLanguage } from "../contexts/LanguageContext";
import LanguageChanger from "./LanguageChanger";
import ModeComponent from "./ModeComponent";
import './styles.css';

export default function Header() {
    const { translate } = useLanguage();
    const hero = translate("hero");
    console.log(hero);

    return (
        <header className="header">
            <div className="decorative-circle"></div>
            
            <div className="header-content">
                <div className="controls-container">
                    <ModeComponent />
                    <span className="separator">|</span>
                    <LanguageChanger />
                </div>

                <div className="profile-section">
                <div className="profile-wrapper">
  {/* Profil Resmi (Sağ Taraf) */}
  <div className="profile-image-container">
    <img 
      src={hero.profileImg} 
      alt="Profile"
      className="profile-image"
    />
  </div>

  {/* Metin İçeriği (Sol Taraf) */}
  <div className="text-content">
    <h1 className="greeting-text">{hero.greeting}</h1>
    <div className="red-underline"></div>
    <p className="name-intro">
      {hero.profileName}
      <span className="description">{hero.intro}</span>
    </p>
  </div>
</div>

                    <div className="social-links">
                        <a href={hero.linkedInLink} className="social-icon">
                            <img src={hero.linkedInSVG} alt="LinkedIn" />
                        </a>
                        <a href={hero.githubLink} className="social-icon">
                            <img src={hero.githubSVG} alt="GitHub" />
                        </a>
                    </div>

                    <div className="footer-text">
                        <p>{hero.heroFooter}</p>
                        <p>
                            {hero.heroFooter2}
                            <a href={`mailto:${hero.heroFooterMail}`} className="email-link">
                                {hero.heroFooterMail}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="large-gray-circle"></div>
        </header>
    );
}