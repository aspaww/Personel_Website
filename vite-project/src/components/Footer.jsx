import useLanguage from "../hooks/useLanguage";
import "../styles/Footer.css"; // CSS dosyanızı içe aktarın

export default  function Footer() {
    const { translate } = useLanguage();  
    const footer = translate("footer");  

    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-title-container">
                        <div className="footer-title-underline"></div>
                        <h1 className="footer-title">{footer.h1}</h1>
                    </div>
                    <div className="footer-links">
                        <a href={footer.githubLink} className="footer-link footer-link-github">
                            {footer.githubText}
                        </a>
                        <a href={footer.personelBlogLink} className="footer-link footer-link-blog">
                            {footer.personelBlogText}
                        </a>
                        <a href={footer.linkedInLink} className="footer-link footer-link-linkedin">
                            {footer.linkedInText}
                        </a>
                        <a href={footer.emailLink} className="footer-link footer-link-email">
                            {footer.emailText}
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

