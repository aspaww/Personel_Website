import useLanguage from "../hooks/useLanguage"; // Dil yönetimi için custom hook'u içe aktarıyoruz.
import "../styles/Projects.css"; // Projects bileşenine ait stil dosyasını içe aktarıyoruz.

function Projects() {
    // useLanguage hook'u sayesinde çeviri fonksiyonuna erişip "projects" key'ine ait verileri alıyoruz.
    const { translate } = useLanguage();
    const projects = translate("projects");

    return (
        <>
            {/* Projeleri içeren ana container */}
            <article className="projects-container">
                {/* Proje bölümünün başlık metni */}
                <h1 className="projects-title">{projects.h1}</h1>
                {/* Projelerin listelendiği alan */}
                <div className="projects-list">
                    {/* projects.myProjects dizisi içerisindeki her bir proje için proje kartı oluşturuluyor */}
                    {projects.myProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            {/* Proje başlığı */}
                            <h1 className="project-title">{project.h1}</h1>
                            {/* Proje açıklaması */}
                            <p className="project-description">{project.text}</p>
                            {/* Projede kullanılan malzemeler */}
                            <div className="project-materials">
                                {project.materials.map((material) => (
                                    // Her bir malzeme için bir paragraf oluşturuluyor
                                    <p key={material}>{material}</p>
                                ))}
                            </div>
                            {/* Projeye ait bağlantılar */}
                            <div className="project-links">
                                <a href={project.viewLink}>{project.viewText}</a>
                                <a href={project.appLink}>{project.appText}</a>
                            </div>
                            {/* Proje görseli */}
                            <img
                                src={project.imgLink}
                                className="project-img"
                                alt={project.h1}
                            />
                        </div>
                    ))}
                </div>
            </article>
        </>
    );
}

export default Projects;
