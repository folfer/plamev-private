import Image from "next/image";
import React from "react";
import styles from "../Layout/styles.module.scss";
import Twitter from "../../../../public/twitter.svg";
import Facebook from "../../../../public/facebook.svg";
import Youtube from "../../../../public/youtube.svg";
import Instagram from "../../../../public/instagram.svg";
import TwitterBlue from "../../../../public/twitter-blue.png";
import FacebookBlue from "../../../../public/facebook-blue.png";
import YoutubeBlue from "../../../../public/youtube-blue.png";
import InstagramBlue from "../../../../public/instagram-blue.png";
import { BsApple } from "react-icons/bs";

import { FaGooglePlay, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export const SecondSection = () => {
  return (
    <section className={styles.secondContainer}>
      <div className={styles.HelpContainerOnDesktop}>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneContainerIcon}>
            <FaPhoneAlt color="#ffffff" size={18} />
          </div>
          <div className={styles.contactContainer}>
            <div>
              <p>Para capitais</p>
              <p>4007-2560</p>
            </div>
            <div>
              <p>Para demais localidades</p>
              <p>0800 007 6500</p>
            </div>
          </div>
        </div>
        <div className={styles.WrappedContainerHelp}>
          <strong>
            Ainda tem dúvidas? Fale conosco <Link href="/">clicando aqui</Link>
          </strong>
        </div>
      </div>
      <div className={styles.WrappedSocialMedia}>
        <strong className={styles.Title}>Siga nossas redes sociais</strong>
        <div className={styles.WrappedSocialMediaButtons}>
          <div className={styles.socialMediaBox}>
            <Image src={Twitter} alt="social-media" />
          </div>
          <div className={styles.socialMediaBox}>
            <Image src={Facebook} alt="social-media" />
          </div>
          <div className={styles.socialMediaBox}>
            <Image src={Instagram} alt="social-media" />
          </div>
          <div className={styles.socialMediaBox}>
            <Image src={Youtube} alt="social-media" />
          </div>
        </div>
      </div>
      <div className={styles.WrappedStoreContainer}>
        <strong className={styles.Title}>Baixe o nosso aplicativo</strong>
        <div className={styles.WrappedStores}>
          <div className={styles.StoreContainer}>
            <BsApple color="#26313C" size={25} />
            <div>
              <p>Disponível na</p>
              <h1>App Store</h1>
            </div>
          </div>
          <div className={styles.StoreContainer}>
            <FaGooglePlay color="#26313C" size={25} />
            <div>
              <p>Disponível na</p>
              <h1>Google Play</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.WrappedSocialMediaOnDesktop}>
        <strong className={styles.Title}>Siga nossas redes sociais</strong>
        <div className={styles.WrappedSocialMediaButtons}>
          <div className={styles.socialMediaBox}>
            <Link target="_blank" href="https://twitter.com/plamevoficial">
              <Image src={TwitterBlue} alt="social-media" />
            </Link>
          </div>
          <div className={styles.socialMediaBox}>
            <Link target="_blank" href="https://web.facebook.com/Plamev/">
              <Image src={FacebookBlue} alt="social-media" />
            </Link>
          </div>
          <div className={styles.socialMediaBox}>
            <Link
              target="_blank"
              href="https://www.instagram.com/plamevoficial/"
            >
              <Image src={InstagramBlue} alt="social-media" />
            </Link>
          </div>
          <div className={styles.socialMediaBox}>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCuynEeqh1JLpF5fUKtL7Lug"
            >
              <Image src={YoutubeBlue} alt="social-media" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.HelpContainer}>
        <div className={styles.WrappedContainerHelp}>
          <strong>Ainda tem dúvidas? Fale conosco clicando aqui</strong>
        </div>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneContainerIcon}>
            <FaPhoneAlt color="#ffffff" size={18} />
          </div>
          <div className={styles.contactContainer}>
            <div>
              <p>Para capitais</p>
              <p>4007-2560</p>
            </div>
            <div>
              <p>Para demais localidades</p>
              <p>0800 007 6500</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.WrappedStoreContainerOnDesktop}>
        <strong className={styles.Title}>Baixe o nosso aplicativo</strong>
        <div className={styles.WrappedStores}>
          <div className={styles.StoreContainer}>
            <BsApple color="#036CC2" size={25} />
            <div>
              <p>Disponível na</p>
              <h1>App Store</h1>
            </div>
          </div>
          <div className={styles.StoreContainer}>
            <FaGooglePlay color="#036CC2" size={25} />
            <div>
              <p>Disponível na</p>
              <h1>Google Play</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
