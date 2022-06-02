import Image from "next/image";
import styles from "./styles.module.scss";
import { IAccreditedDoubts } from "../../../data";

import startImg from "../../../../../../public/start.svg"
import starsImg from "../../../../../../public/five-stars.png";

export const Doubts = ({ bgImage, userName, clinic, timeAccredited }: IAccreditedDoubts) => {

  return (
    <main className={styles.doubtsContainer}>
      <div className={styles.doubtsContentContainer}>
        <div className={styles.doubtsVideoContainer}>
          <Image
            className={styles.bgImage}
            src={bgImage}
            alt="Plameve People"
            objectFit="cover"
            objectPosition="center"
          />
          <button className={styles.doubtsStartContainer}>
            <div className={styles.doubtsStart}>
              <Image src={startImg} />
            </div>
          </button>
        </div>

        <div className={styles.doubtsDescriptionContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.starsContainer}>
              <div className={styles.sizeImage}>
                <Image className={styles.starsImage} src={starsImg} />
              </div>
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.accreditedName}>{userName}</h1>
              <div className={styles.userContainer}>
                <p className={styles.accreditedComment}>Compensa ter um plano de saúde para o seu pet simply dummy text of the printing and typesetting?</p>
                <p className={styles.clinicDescription}>{clinic} - Credenciada há {timeAccredited} anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
