import footerLogo from "./assets/footer_logo.png";
import IG4 from "./assets/I4G.png";

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer-content">

                <img src={footerLogo} alt="Zuri" />

                <div className="footer-text">HNG Internship 9 Frontend Task</div>

                <img src={IG4} className="IG4" alt="Zuri" />

            </div>

        </footer>
    )
}

export default Footer