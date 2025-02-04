import useLanguage from "../hooks/useLanguage";
import "../styles/Skills.css"; // CSS dosyasını içe aktarıyoruz

function Skills() {
  const { translate } = useLanguage();
  
  const skills = translate("skills");
  
  const images = skills.images;
  
  return (
    <section className="skills-section">
      <div className="decorative-border-circle"></div>
      
      <div className="content-container">
        <h1 className="skills-heading">{skills.h1}</h1>
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
      <div className="decorative-half-circle3"></div>
    </section>
  );
}

export default Skills;
