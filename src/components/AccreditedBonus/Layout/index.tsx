import Image from "next/image";
import styles from "./styles.module.scss";

import pinImg from "../../../../public/pin.svg"
import healthImg from "../../../../public/health.svg"
import accordanceImg from "../../../../public/accordance.svg"

export const AccreditedBonus = () => {
  return (
    <div className={styles.accreditedBonusContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Nós ganhamos e você também!</h1>

        <div className={styles.itemsContainer}>
          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={pinImg} alt="alfinete de localização" />
            </span>
            <div className={styles.textContainer}>
              <h2 className={styles.itemTitle}>Minha Clínica de estimação</h2>
              <p className={styles.paragraph}>Seus clientes podem selecionar a sua clínica como a preferida no app Plamev AppPet, dando mais visibilidade para o seu estabelecimento.</p>
            </div>
          </div>

          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={healthImg} alt="cruz médica pets" />
            </span>
            <div className={styles.textContainer}>
              <h2 className={styles.itemTitle}>Vet Premia</h2>
              <p className={styles.paragraph}>Quanto mais você atender, mais você ganha! Seja premiado pelos atendimentos Plamev Pet que você realizar. Afinal, nossa parceira é uma via de mã
                o dupla!</p>
            </div>
          </div>

          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={accordanceImg} alt="aperto de mãos" />
            </span>
            <div className={styles.textContainer}>
              <h2 className={styles.itemTitle}>Canal Vet</h2>
              <p className={styles.paragraph}>Já imaginou se, a cada cliente que perguntar sobre plano de saúde, você indicar a Plamev Pet e ganhar pela indicação? Com o Canal Vet isso já é p
                ossível!</p>
            </div>
          </div>
        </div>

        <button className={styles.button}>Quero ser um credenciado</button>
      </div>
    </div>
  );
}