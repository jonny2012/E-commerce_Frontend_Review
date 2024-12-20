import styles from "./../../Footer.module.scss";
import { Link } from "react-router-dom";
import Qrcode from "assets/footer_icons/Qr Code.svg";
import GooglePlay from "assets/footer_icons/GooglePlay.svg";
import AppStore from "assets/footer_icons/AppStore.svg"
import Facebook from "assets/footer_icons/Icon-Facebook.svg";
import Twitter from "assets/footer_icons/Icon-Twitter.svg";
import Instagram from "assets/footer_icons/icon-instagram.svg";
import Linkedin from "assets/footer_icons/Icon-Linkedin.svg";

export const DownloadColumn = () => {
  return (
    <div className={styles.content}>
      <h3>Download App</h3>
      <Link className={styles.whiteLink}to="/register">
        Save $3 with App New User Only
      </Link>
      <div className={styles.storeBox}>
        <Link to="/" className={styles.whiteLink}>
          < Qrcode/>
        </Link>
        <div className={styles.stores}>
            <Link  to={"https://play.google.com/"}>
              <GooglePlay />
            </Link>
            <Link  to={"https://www.apple.com/de/app-store/"}>
              <AppStore />
            </Link>
       
        </div>
        
      </div>
      <div className={styles.socialLinks}>
          <Link   to={"https://www.facebook.com/"}>
            <Facebook className={styles.svg}/>
          </Link>
          <Link   to={"https://www.twitter.com/"}>
            <Twitter className={styles.svgT}/>
          </Link>
          <Link   to={"https://www.instagram.com/"}>
            <Instagram className={styles.svg}/>
          </Link>
          <Link    to={"https://www.linkedin.com/"}>
            <Linkedin className={styles.svg}/>
          </Link>
  
      </div>
    </div>
  );
};
