import '../styles/Profile.css';
import useLanguage from "../hooks/useLanguage";

export default function Profile() {
  const { translate } = useLanguage();
  const profile = translate("profile");

  return (
    <section className="profile-section">
      <div className="decorative-stripe"></div>
      
      <div className="profile-content">
        <h1 className="profile-title">{profile.profileText}</h1>
        
        <div className="profile-card-container">
          <div className="profile-card-inner">
            <h1 className="card-title">{profile.cart.h1}</h1>
            
            <div className="info-container">
              <div className="info-row">
                <span className="info-label">{profile.cart.dateOfBirthText}</span>
                <span className="info-value">{profile.cart.dateOfBirth}</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">{profile.cart.cityText}</span>
                <span className="info-value">{profile.cart.city}</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">{profile.cart.educationText}</span>
                <span className="info-value">{profile.cart.education}</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">{profile.cart.rolText}</span>
                <span className="info-value">{profile.cart.rol}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="blue-border"></div>
          <h1 className="about-title">{profile.about.aboutMe}</h1>
          <p className="about-text">{profile.about.text1}</p>
          <p className="about-text">{profile.about.text2}</p>
        </div>
      </div>
    </section>
  );
}