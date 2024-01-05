import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <a className={styles.link} href="https://www.facebook.com/" target="_blank">
            <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Facebook"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30Zm-9.08-4.81V16.8h2.83l.42-3.26H17.41V11.71a2.88,2.88,0,0,1,.09-1,1.09,1.09,0,0,1,.14-.33c.21-.38.76-.57,1.63-.57h1.5V6.94a22,22,0,0,0-2.5-.14,3.83,3.83,0,0,0-3.61,1.86,4.52,4.52,0,0,0-.63,2.4v2.48h-2.8V16.8H14v8.39Z"></path> </g> </g></svg>
        </a>
        <a className={styles.link} href="https://www.instagram.com/" target="_blank">
            <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Instagram"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM24.74,10.56a3.45,3.45,0,0,0-3.48-3.49H10.71a3.47,3.47,0,0,0-3.48,3.49V21.1a3.45,3.45,0,0,0,3.48,3.49H21.26a3.43,3.43,0,0,0,3.48-3.49Zm-8.73.9a4.09,4.09,0,0,0-1.38.24,5.36,5.36,0,0,0-1.24.63H9v-.87a2.56,2.56,0,0,1,2.61-2.62h8.75a2.63,2.63,0,0,1,1.89.75A2.48,2.48,0,0,1,23,11.46v.87H18.6a6.14,6.14,0,0,0-1.22-.63A3.87,3.87,0,0,0,16,11.46Zm4.35,11.41H11.61a2.48,2.48,0,0,1-1.86-.78A2.57,2.57,0,0,1,9,20.24v-7h3.49a5.49,5.49,0,0,0-.63,1.23,3.82,3.82,0,0,0-.25,1.4A4.19,4.19,0,0,0,12,17.55a5,5,0,0,0,.93,1.39,4.28,4.28,0,0,0,1.4.95,4.24,4.24,0,0,0,1.72.35,4.29,4.29,0,0,0,3.08-1.3A5,5,0,0,0,20,17.55a4.19,4.19,0,0,0,.35-1.69,3.82,3.82,0,0,0-.25-1.4,6.37,6.37,0,0,0-.6-1.23H23v7a2.52,2.52,0,0,1-.78,1.85A2.57,2.57,0,0,1,20.36,22.87ZM16,13.23a2.55,2.55,0,0,1,1.85.75,2.63,2.63,0,0,1,0,3.74,2.55,2.55,0,0,1-1.85.75,2.63,2.63,0,0,1-1.9-.75,2.66,2.66,0,0,1,0-3.74A2.63,2.63,0,0,1,16,13.23Zm3.5-1.77h1.75V9.71H19.51Z"></path> </g> </g></svg>
        </a>
        <a className={styles.link} href="https://twitter.com/" target="_blank">
            <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Twitter"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM12.64,23.39a10.45,10.45,0,0,0,6.89-2.52,11.07,11.07,0,0,0,3.08-4.57,10.45,10.45,0,0,0,.62-3.37v-.64a7.78,7.78,0,0,0,1-.9,8.3,8.3,0,0,0,.83-1h0a6.22,6.22,0,0,1-2.08.58v0a4.21,4.21,0,0,0,.78-.6,4.61,4.61,0,0,0,.82-1.43,6.54,6.54,0,0,1-1.53.69,5.29,5.29,0,0,1-.85.21,3.87,3.87,0,0,0-2.7-1.16,3.72,3.72,0,0,0-2.62,1.06,3.61,3.61,0,0,0-1.13,2.67,4,4,0,0,0,.1.85,12.68,12.68,0,0,1-1.63-.2,12.54,12.54,0,0,1-3.59-1.49A11.24,11.24,0,0,1,8.16,9.29a3.83,3.83,0,0,0,.4,4.27,2.74,2.74,0,0,0,.73.67v0a3.73,3.73,0,0,1-1.65-.45,3.81,3.81,0,0,0,1.13,2.72,3.72,3.72,0,0,0,1.3.8,2.66,2.66,0,0,0,.52.17,1.34,1.34,0,0,1-.42.1H9.6a4.12,4.12,0,0,1-.66-.05,3.74,3.74,0,0,0,1.53,2,3.7,3.7,0,0,0,1.94.58,7.07,7.07,0,0,1-1.05.72,7.51,7.51,0,0,1-3.43.88,9.46,9.46,0,0,1-1,0A10.38,10.38,0,0,0,12.64,23.39Z"></path> </g> </g></svg>
        </a>
        <a className={styles.link} href="https://www.youtube.com/" target="_blank">
            <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Youtube"> <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM16.07,22.67c.95,0,2.19,0,3.7,0,2-.07,3.12-.13,3.4-.19a2.4,2.4,0,0,0,1.19-.51,2.51,2.51,0,0,0,.78-1.13,12.33,12.33,0,0,0,.46-4.09V15.16a27.72,27.72,0,0,0-.19-3.1,3.69,3.69,0,0,0-.74-1.87c-.18-.19-.3-.28-.37-.29a2.09,2.09,0,0,0-1-.46A55,55,0,0,0,16,9.17c-1,0-2.19,0-3.52.06a27.07,27.07,0,0,0-3.8.23,2.31,2.31,0,0,0-1.47.87,4.48,4.48,0,0,0-.64,1.73,29.89,29.89,0,0,0-.17,3.1,21.82,21.82,0,0,0,.31,5.05,4.89,4.89,0,0,0,.29,1,2.52,2.52,0,0,0,1.5,1.17l.75.12a16.74,16.74,0,0,0,1.79.13C13.33,22.64,15,22.67,16.07,22.67ZM14,18.41V13l4.26,2.22c.62.32.93.49.93.5Z"></path> </g> </g></svg>
        </a>
      </div>
      <div>
        <h3 className={styles.subheading} >Get informed of our special offers</h3>
        <form id="newsletterForm">
            <input className={styles.newsletter} type="email" id="email" name="email" placeholder="Your Email" required />
            <button className={styles.newsletter} type="submit">Subscribe</button>
        </form>
      </div>
      <div>
        <span>Copyright &#169; 2024 E-Commerce</span>
        <div>
            <a className={styles.link} href="#top">Terms of Use</a>
            <a className={styles.link} href="#top">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
