import footerLogo from "../assets/footer_logo.png";
import footerLogoMob from "../assets/footer_logo-mobile.png";
import IG4 from "../assets/I4G.png";
import IG4Mob from "../assets/I4G-mobile.png";

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer-content">

                <img src={footerLogo} className="footer-logo" alt="Zuri" />

                <img src={footerLogoMob} className="footer-logo-mobile" alt="Zuri" />

                <div className="footer-text">HNG Internship 9 Frontend Task</div>

                <img src={IG4} className="footer-i4g" alt="Zuri" />

                <img src={IG4Mob} className="footer-i4g-mobile" alt="Zuri" />

            </div>

        </footer>
    )
}

export default Footer