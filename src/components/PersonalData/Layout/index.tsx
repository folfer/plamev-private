import * as React from "react";
import TextField from "@mui/material/TextField";

import styles from "../Layout/styles.module.scss";
import { IPlanLayoutProps } from "../data";
import { useEffect, useState } from "react";

export const PersonalData = ({
  handleNextStep,
  handleAccepted,
  isSelected,
}: IPlanLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      const MIN_WINDOW_WIDTH = 580;
      const MIN_WINDOW_WIDTH_TABLET = 780;

      if (windowWidth <= MIN_WINDOW_WIDTH) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (windowWidth >= MIN_WINDOW_WIDTH_TABLET) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    }
  }, []);

  return (
    <main className={styles.firstContainer}>
      <div className={styles.personalDataContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.dataContainer}>
            <h1 className={styles.dataTitle}>Digite os seus dados pessoais:</h1>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.input}
                size={isMobile ? "small" : "medium"}
                label="Nome completo"
                variant="outlined"
              />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.input}
                size={isMobile ? "small" : "medium"}
                label="E-mail"
                variant="outlined"
              />
            </div>
            <div className={styles.contactContainer}>
              <div className={styles.inputDDDContainer}>
                <TextField
                  className={styles.input}
                  size={isMobile ? "small" : "medium"}
                  label="DDD"
                  variant="outlined"
                />
              </div>
              <div className={styles.inputNumberContainer}>
                <TextField
                  className={styles.input}
                  size={isMobile ? "small" : "medium"}
                  label="Telefone"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <section className={styles.sectionContainer}>
            <div className={styles.termsContainer}>
              <input
                className={styles.checkInput}
                onChange={handleAccepted}
                type="checkbox"
                value={1}
              />
              <p className={styles.paragraph}>
                Declaro que estou de acordo em receber ofertas e conteúdos da
                Plamev Pet. Seus dados não serão compartilhados com terceiros,
                ok?
              </p>
            </div>
            {isSelected ? (
              <button
                type="button"
                onClick={handleNextStep}
                className={styles.button}
              >
                Continuar
              </button>
            ) : (
              <button type="button" className={styles.disableButton}>
                Continuar
              </button>
            )}
          </section>
        </div>
      </div>

      <section className={styles.sectionContainerWeb}>
        <div className={styles.termsContainer}>
          <input
            className={styles.checkInput}
            onChange={handleAccepted}
            type="checkbox"
            value={1}
          />
          <p className={styles.paragraph}>
            Declaro que estou de acordo em receber ofertas e conteúdos da Plamev
            Pet. Seus dados não serão compartilhados com terceiros, ok?
          </p>
        </div>
        {isSelected ? (
          <button
            type="button"
            onClick={handleNextStep}
            className={styles.button}
          >
            Continuar
          </button>
        ) : (
          <button type="button" className={styles.disableButton}>
            Continuar
          </button>
        )}
      </section>
    </main>
  );
};
