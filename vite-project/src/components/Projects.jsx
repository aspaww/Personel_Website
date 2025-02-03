import useLanguage from "../hooks/useLanguage";
import "../styles/Projects.css"; 

function Projects() {
    const { translate } = useLanguage();
    const projects = translate("projects");
    return (
        <>
            <article className="projects-container">
                <h1 className="projects-title">{projects.h1}</h1>
                <div className="projects-list">
                    {projects.myProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h1 className="project-title">{project.h1}</h1>
                            <p className="project-description">{project.text}</p>
                            <div className="project-materials">
                                {project.materials.map((material) => (
                                    <p key={material}>{material}</p>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.viewLink}>{project.viewText}</a>
                                <a href={project.appLink}>{project.appText}</a>
                            </div>
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
