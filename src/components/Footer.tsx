import { SocialIcon } from "react-social-icons";
import facebookIcon from "../images/facebookIcon.png";
import discordIcon from "../images/discordIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column-container">
        <div className="footer-column">
          <h2>Skontaktuj się z nami</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Nr tel: 123 456 789</p>
          <p>Mail: katarzynalachut12@gmail.com</p>
        </div>
      </div>

      <div className="footer-column-container">
        <div className="footer-column">
          <h2> Media Społecznościowe</h2>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <img src={facebookIcon} width={30} height={30} />
          <img src={discordIcon} width={30} height={30} />
          <img src={youtubeIcon} width={30} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
