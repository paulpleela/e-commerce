import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/products" className={styles.link}>
          Products
        </Link>
        <Link href="/order" className={styles.link}>
          Your Order
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
        <button className={styles.link}>
          <svg
            className={styles.basket}
            viewBox="0 -20 155 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M143.67 32.1093C138.961 32.1093 124.778 32.0529 123.051 32.0535L119.214 28.6879C116.203 26.0481 113.171 22.7344 110.15 20.0645C108.74 18.8174 107.313 17.5907 105.884 16.3626C100.949 12.1175 95.8471 7.72767 91.598 2.62859C90.9718 1.89626 90.1593 1.34697 89.247 1.0387C88.334 0.730429 87.3548 0.674677 86.4129 0.877498C85.7487 0.935493 85.1094 1.16168 84.5561 1.53448C84.0028 1.90728 83.5539 2.41449 83.2507 3.00867C82.9986 3.63881 82.9087 4.32213 82.9895 4.99595C83.0695 5.66978 83.3176 6.31258 83.7101 6.86594C84.0304 7.33938 84.4071 7.77269 84.8311 8.15586L84.9184 8.24112C88.4095 11.662 91.9019 15.0818 95.3949 18.5009C99.5994 22.6181 103.805 27.3918 108.007 31.5116C108.383 31.8805 108.752 32.2761 109.134 32.6929L46.4577 35.1215C46.5831 34.9738 46.6809 34.8655 46.7806 34.7664L55.3045 26.365C60.9411 20.8081 66.5744 15.2497 72.2052 9.68966C73.0597 8.88729 73.8198 7.98935 74.4702 7.01368C75.5 5.37283 75.4107 3.71969 74.2247 2.48052C73.6983 1.9197 72.9967 1.55537 72.2347 1.44795C71.4734 1.34052 70.6982 1.49619 70.0373 1.88956C69.1841 2.29091 68.3754 2.78151 67.6252 3.35318C66.5541 4.21955 65.4792 5.08183 64.4007 5.93944C61.2253 8.4755 57.9416 11.0982 54.8503 13.8456C49.1999 18.8666 43.6052 24.1315 38.1944 29.2247L37.0248 30.3255C35.8736 31.4085 34.8313 33.2305 33.6243 34.5799C33.0835 35.1844 27.5657 35.2692 27.5657 35.2692C22.6359 35.3546 17.5178 35.443 12.4003 35.5362C12.0892 35.5421 11.7768 35.5429 11.465 35.5429C10.513 35.5206 9.56061 35.5695 8.61588 35.6897C5.0303 36.2358 1.35218 38.1839 0.898652 41.9323C0.518633 45.0728 1.95404 47.0667 5.97346 49.0206C5.98855 49.033 6.0043 49.0474 6.02137 49.0645C6.47687 51.359 6.9269 53.66 7.37146 55.9673C8.40585 61.2921 9.47174 66.7971 10.6532 72.2001C11.5064 76.1033 12.4495 80.0512 13.3638 83.8691C14.5531 88.8395 15.7831 93.9767 16.8181 99.064C17.9858 104.903 19.7678 110.604 22.1345 116.068C24.4973 121.507 28.7418 124.59 34.7558 125.232C41.8397 125.99 48.7673 126.676 55.6372 126.723C57.0234 126.733 58.4103 126.738 59.7978 126.738C70.9496 126.738 82.0273 126.43 91.6997 126.134C98.3944 125.929 105.441 125.482 113.234 124.769C123.283 123.851 129.911 119.005 133.499 109.954C136.9 101.375 138.973 92.3267 140.978 83.5777C141.22 82.5236 141.462 81.4702 141.705 80.4161C143.482 72.737 145.162 64.9028 146.788 57.3261C147.483 54.0838 148.182 50.8411 148.884 47.5983C152.44 46.094 154.415 43.0583 154.459 39.0146C154.511 34.6126 151.207 32.1093 143.67 32.1093ZM15.1983 49.5176C15.2245 49.4986 15.2495 49.4802 15.2744 49.4645C16.5313 49.4546 17.7895 49.4348 19.0477 49.4151C22.1981 49.3659 25.4516 49.3155 28.6407 49.4218C57.8964 50.4004 87.7249 49.6356 116.572 48.8965C124.034 48.7049 131.74 48.5075 139.359 48.3415C139.213 49.0149 139.071 49.6712 138.934 50.3105C138.54 52.1561 138.163 53.8993 137.74 55.6176L136.289 61.5167C133.237 73.9216 130.082 86.7432 126.903 99.3363C125.896 103.526 124.206 107.521 121.901 111.161C120.355 113.562 118.4 114.902 115.924 115.256C115.093 115.375 114.262 115.496 113.43 115.619C109.017 116.265 104.454 116.931 99.961 117.145C89.2227 117.651 79.4295 117.877 70.0202 117.836C63.4011 117.807 56.6651 117.479 50.1502 117.162C48.0342 117.059 45.9186 116.96 43.8035 116.863C41.6664 116.769 39.4907 116.58 37.3864 116.397C36.5114 116.321 35.6378 116.247 34.7657 116.175C31.9802 115.953 30.4542 114.6 29.8189 111.778C28.3927 105.46 26.8594 99.0568 25.3774 92.8649C24.8243 90.5532 24.2726 88.241 23.7222 85.9293L21.4591 76.4059C19.3628 67.5867 17.2699 58.7667 15.1806 49.9455C15.1666 49.8027 15.1726 49.6588 15.1983 49.5176Z"
              ></path>{" "}
              <path
                d="M35.7675 71.4129C38.4808 80.4047 41.0064 88.7139 43.4886 96.8197C43.7625 97.7222 44.1287 98.5931 44.5814 99.4201C45.4563 101.008 46.7126 101.868 48.0771 101.868C48.4589 101.866 48.8378 101.802 49.1988 101.677C51.3896 100.937 51.6108 98.9653 51.6469 97.1754V97.0986L51.6305 97.0238C51.5865 96.8191 51.5458 96.5828 51.4992 96.3255C51.3846 95.5444 51.2012 94.7739 50.9512 94.025C48.0567 86.0216 45.0743 77.8995 42.1897 70.0444L41.4934 68.1469C41.316 67.6829 41.0883 67.2392 40.814 66.8251C40.4776 66.2016 39.9365 65.7134 39.282 65.4422C38.6274 65.1711 37.8994 65.1336 37.2206 65.3364C35.7248 65.7526 35.0041 66.9353 35.1925 68.6668C35.2996 69.5981 35.4921 70.517 35.7675 71.4129Z"
              ></path>{" "}
              <path
                d="M98.4758 99.2522C98.9057 99.4123 99.3592 99.4963 99.8173 99.5003C100.405 99.4852 100.982 99.3277 101.496 99.0422C102.01 98.7567 102.447 98.3504 102.771 97.8594C103.412 96.997 103.924 96.0466 104.292 95.0372C107.525 86.0611 110.133 78.7121 112.496 71.9092C112.875 70.8472 112.972 69.7052 112.776 68.5946C112.6 67.7158 111.833 66.3697 110.853 66.1272C109.716 65.847 108.376 66.4458 107.677 66.8291C107.061 67.2898 106.615 67.9429 106.411 68.6852L106.349 68.8408C103.809 75.0839 100.47 83.3111 97.1598 91.5927C96.8546 92.4007 96.5993 93.227 96.3959 94.0665C96.3059 94.4078 96.2186 94.7405 96.1254 95.0569L96.0913 95.1737L96.1018 95.2958C96.2357 96.8441 96.537 98.5525 98.4758 99.2522Z"
              ></path>{" "}
              <path
                d="M70.1248 78.919L70.1792 79.5662C70.1792 80.4292 70.1753 81.293 70.1661 82.1567C70.1504 84.7309 70.134 87.393 70.2127 90.0137C70.2961 91.9447 70.5435 93.8651 70.9531 95.7541C71.0666 96.5259 71.4617 97.2289 72.0616 97.7277C72.6615 98.2265 73.4248 98.4857 74.2046 98.4562C74.3358 98.4562 74.4717 98.4496 74.6095 98.4378C75.4424 98.3906 76.2281 98.0355 76.8142 97.4422C77.4009 96.8488 77.7455 96.0586 77.7829 95.2257C77.9214 94.1926 77.9772 93.151 77.9496 92.1094C77.6753 85.0938 77.4246 78.7628 77.0964 72.3366C76.9651 69.7841 76.6836 67.2067 76.4086 64.7151L76.398 64.6174C76.3692 63.888 76.0535 63.1996 75.5192 62.7023C74.985 62.2049 74.2755 61.9392 73.5456 61.9626C72.8223 61.8952 72.1003 62.1097 71.5306 62.5616C70.9609 63.0133 70.5875 63.6675 70.4884 64.3876C70.258 65.6355 70.1412 66.9021 70.1392 68.1708C70.109 70.7443 70.1143 73.3559 70.1195 75.8874L70.1248 78.919Z"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;