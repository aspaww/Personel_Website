import useLanguage from "../hooks/useLanguage";
import "../styles/Skills.css"; // CSS dosyasını içe aktarıyoruz

function Skills() {
  // useLanguage hook'unu kullanarak translate fonksiyonunu elde ediyoruz.
  const { translate } = useLanguage();
  
  // "skills" anahtarına göre skills nesnesini alıyoruz.
  const skills = translate("skills");
  
  // skills nesnesinden images dizisini elde ediyoruz.
  const images = skills.images;
  
  return (
    <section className="skills-section">
      {/* Dekoratif border'a sahip daire */}
      <div className="decorative-border-circle"></div>
      
      {/* İçerik kapsayıcısı: Padding ile içerik ortalanıyor */}
      <div className="content-container">
        {/* Başlık */}
        <h1 className="skills-heading">{skills.h1}</h1>
        
        {/* Resimleri kapsayan container */}
        <div className="images-container">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image.SRC} alt={image.Alt} />
              <p className="image-caption">{image.Alt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="decorative-large-circle2"></div>
    </section>
  );
}

export default Skills;
