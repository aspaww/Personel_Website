import useLanguage from "../hooks/useLanguage"; // Dil yönetimi için oluşturulmuş custom hook'u içe aktarıyoruz.
import "../styles/Skills.css"; // Skills bileşenine ait stil dosyasını içe aktarıyoruz.

function Skills() {
  // useLanguage hook'u sayesinde, çeviri fonksiyonuna erişip "skills" key'ine ait verileri alıyoruz.
  const { translate } = useLanguage();
  const skills = translate("skills");

  // "skills" objesi içindeki images dizisini alıyoruz.
  const images = skills.images;

  return (
    <section className="skills-section">
      {/* Dekoratif sınır çemberi */}
      <div className="decorative-border-circle"></div>
      
      <div className="content-container">
        {/* Skills bölümünün başlık metni */}
        <h1 className="skills-heading">{skills.h1}</h1>
        
        {/* Görsellerin bulunduğu kapsayıcı */}
        <div className="images-container">
          {images.map((image, index) => (
            // Her bir resim için ayrı bir container oluşturuyoruz
            <div className="image-item" key={index}>
              {/* Resim elementini oluşturuyoruz */}
              <img src={image.SRC} alt={image.Alt} />
              {/* Resim açıklaması */}
              <p className="image-caption">{image.Alt}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ek dekoratif elemanlar */}
      <div className="decorative-large-circle2"></div>
      <div className="decorative-half-circle3"></div>
    </section>
  );
}

export default Skills;
