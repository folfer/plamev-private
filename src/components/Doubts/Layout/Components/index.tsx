import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { IDoubtsVideoLayoutProps } from "../../data";
import stars from "../../../../../public/stars.png";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export const DoubtsVideo = ({ ImageSrc }: IDoubtsVideoLayoutProps) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      const MIN_WINDOW_WIDTH = 580;
      const MIN_WINDOW_WIDTH_TABLET = 780;

      if (windowWidth <= MIN_WINDOW_WIDTH) {
        setIsTablet(false);
      } else if (windowWidth >= MIN_WINDOW_WIDTH_TABLET) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    }
  }, []);
  return (
    <main className={styles.firstContainer}>
      <div className={styles.insideFirstContainer}>
        {isTablet ? (
          <Image src={ImageSrc} width={350} height={250} alt="plamev people" />
        ) : (
          <Image src={ImageSrc} width={280} height={200} alt="plamev people" />
        )}

        <div className={styles.wrappedButton}>
          <button className={styles.buttonPlay}>
            <BsPlayFill size={25} color="#fefefe" />
          </button>
        </div>
        <div className={styles.wrappedInformations}>
          <div className={styles.insideInformations}>
            <div className={styles.starsContainer}>
              <Image src={stars} alt="plamev people" />
            </div>
            <p className={styles.name}>Mãe da lola</p>
            <p className={styles.description}>
              Compensa ter um plano de saúde para o seu petis simply dummy text
              of the printing and typesetting?
            </p>
            <p className={styles.finalDescription}>
              Bárbara - Cliente Plamev Pet a 4 anos
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
