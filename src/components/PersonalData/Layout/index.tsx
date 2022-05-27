import * as React from "react";
import TextField from "@mui/material/TextField";

import styles from "../Layout/styles.module.scss";
import { IPlanLayoutProps } from "../data";

export const PersonalData = ({ handleNextStep }: IPlanLayoutProps) => {
  return (
    <main className={styles.firstContainer}>
      <div className={styles.personalDataContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.dataContainer}>
            <h1 className={styles.dataTitle}>Digite os seus dados pessoais:</h1>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.input}
                size="small"
                label="Nome completo"
                variant="outlined"
              />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.input}
                size="small"
                label="E-mail"
                variant="outlined"
              />
            </div>
            <div className={styles.contactContainer}>
              <div className={styles.inputDDDContainer}>
                <TextField
                  className={styles.input}
                  size="small"
                  label="DDD"
                  variant="outlined"
                />
              </div>
              <div className={styles.inputNumberContainer}>
                <TextField
                  className={styles.input}
                  size="small"
                  label="Telefone"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <section className={styles.sectionContainer}>
            <div className={styles.termsContainer}>
              <input className={styles.checkInput} type="checkbox" />
              <p className={styles.paragraph}>
                Declaro que estou de acordo em receber ofertas e conteúdos da
                Plamev Pet. Seus dados não serão compartilhados com terceiros,
                ok?
              </p>
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={handleNextStep}
            >
              Continuar
            </button>
          </section>
        </div>
      </div>

      <section className={styles.sectionContainerWeb}>
        <div className={styles.termsContainer}>
          <input className={styles.checkInput} type="checkbox" />
          <p className={styles.paragraph}>
            Declaro que estou de acordo em receber ofertas e conteúdos da Plamev
            Pet. Seus dados não serão compartilhados com terceiros, ok?
          </p>
        </div>
        <button
          type="button"
          onClick={handleNextStep}
          className={styles.button}
        >
          Continuar
        </button>
      </section>
    </main>
  );
};
