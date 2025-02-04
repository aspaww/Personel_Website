import useLanguage from "../hooks/useLanguage";
import '../styles/Profile.css';

function Profile() {
    const { translate } = useLanguage();
    const profile = translate("profile");

    return (
        <section className="profile-section">
            <div className="profile-decoration"></div>
            
            <div className="profile-content">
                <h1 className="profile-heading">
                    {profile.profileText}
                </h1>

                <div className="profile-card-wrapper">
                    <div className="profile-card-container">
                        <div className="profile-card-inner">
                            <h1 className="card-title">
                                {profile.cart.h1}
                            </h1>
                            
                            <div className="info-container">
                                <div className="info-section">
                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.dateOfBirthText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.dateOfBirth}
                                        </div>
                                    </div>

                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.cityText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.city}
                                        </div>
                                    </div>

                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.educationText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.education}
                                        </div>
                                    </div>

                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.rolText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.rol}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-section">
                        <div className="blue-underline"></div>
                        <h1 className="about-heading">
                            {profile.about.aboutMe}
                        </h1>
                        <p className="about-text">{profile.about.text1}</p>
                        <p className="about-text">{profile.about.text2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;