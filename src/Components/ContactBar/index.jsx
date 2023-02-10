import styles from "./styles.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a href="https://www.linkedin.com/in/chandra-sekhar-valluru-9b09bb230/" target="_blank" className={styles.icons}>
          <LinkedInIcon />
        </a>
        <a href="https://github.com/chandrasekhar95?tab=repositories/" target="_blank" className={styles.icons}>
          <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/_v._chandu_/" target="_blank" className={styles.icons}>
          <InstagramIcon />
        </a>
        <a href="https://twitter.com//" target="_blank" className={styles.icons}>
          <TwitterIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="valluruchandu34@gmail.com" className={styles.email}>
            valluruchandu34@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;