import useLanguage from "../hooks/useLanguage"; // Dil yönetimi için custom hook'u içe aktarıyoruz.
import '../styles/Profile.css'; // Profil bileşenine ait stil dosyasını içe aktarıyoruz.

function Profile() {
    // useLanguage hook'u sayesinde çeviri fonksiyonuna erişip "profile" key'ine ait verileri alıyoruz.
    const { translate } = useLanguage();
    const profile = translate("profile");

    return (
        <section className="profile-section">
            {/* Profil bölümüne dekoratif bir öğe ekleniyor */}
            <div className="profile-decoration"></div>
            
            <div className="profile-content">
                {/* Profil başlık metnini gösteriyoruz */}
                <h1 className="profile-heading">
                    {profile.profileText}
                </h1>

                <div className="profile-card-wrapper">
                    {/* Profil kartı için kapsayıcı */}
                    <div className="profile-card-container">
                        <div className="profile-card-inner">
                            {/* Kart başlığı */}
                            <h1 className="card-title">
                                {profile.cart.h1}
                            </h1>
                            
                            {/* Kart içerisindeki bilgilerin kapsayıcı alanı */}
                            <div className="info-container">
                                <div className="info-section">
                                    {/* Doğum tarihi bilgisi */}
                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.dateOfBirthText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.dateOfBirth}
                                        </div>
                                    </div>

                                    {/* Şehir bilgisi */}
                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.cityText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.city}
                                        </div>
                                    </div>

                                    {/* Eğitim bilgisi */}
                                    <div className="info-row">
                                        <div className="info-label">
                                            {profile.cart.educationText}
                                        </div>
                                        <div className="info-value">
                                            {profile.cart.education}
                                        </div>
                                    </div>

                                    {/* Rol bilgisi */}
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

                    {/* Hakkımda bölümünün yer aldığı alan */}
                    <div className="about-section">
                        {/* Hakkımda başlığı için dekoratif mavi alt çizgi */}
                        <div className="blue-underline"></div>
                        <h1 className="about-heading">
                            {profile.about.aboutMe}
                        </h1>
                        {/* Hakkımda metinleri */}
                        <p className="about-text">{profile.about.text1}</p>
                        <p className="about-text">{profile.about.text2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
