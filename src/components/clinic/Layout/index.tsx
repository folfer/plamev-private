import Image from "next/image";

import styles from "../Layout/styles.module.scss";

import mapImg from "../../../../public/map.svg";

export const Clinic = () => {
  return (
    <main className={styles.firstContainer}>
      <section className={styles.contentContainer}>
        <div className={styles.mapContainer}>
          <div className={styles.summaryContainer}>
            <div className={styles.reimbursementContainer}>
              <div className={styles.summaryReimbursement}>
                <div className={styles.reimbursementColorBox}></div>
                <p>Modalidade reembolso</p>
              </div>
            </div>

            <div className={styles.accreditedContainer}>
              <div className={styles.summaryAccredited}>
                <div className={styles.accreditedColorBox}></div>
                <p>Clínicas credenciadas</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src={mapImg} alt="Mapa de regiões com redes credenciadas" />
          </div>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Quem escolhe a clínica é você</h1>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>
              Nossa rede credenciada é formada pelos melhores profissionais em
              cuidado veterinário do país!
            </p>
            <p className={styles.paragraph}>
              E se na sua cidade não tiver clínica credenciada, você pode levar
              seu peludinho ao seu veterinário preferido e ser atendido pela
              modalidade de reembolso, recebendo o valor investido de volta, de
              acordo com a tabela do plano contratado.
            </p>
          </div>
          <button className={styles.buttonContainer}>
            Confira nossa rede credenciada
          </button>
        </div>
      </section>
    </main>
  );
};
