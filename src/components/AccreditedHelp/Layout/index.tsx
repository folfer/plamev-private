import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

import styles from "./styles.module.scss";
import { QuestionBox } from "./Components";

export const AccreditedHelp = () => {
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
    <main className={styles.firstSection}>
      <h1 className={styles.title}>Ficou alguma dúvida?</h1>
      <div className={styles.contentContainer}>
        <div className={styles.searchInput}>
          <BiSearch size={25} color="#504F4B" />
          <input placeholder="Pesquise" className={styles.input} />
        </div>
        <div className={styles.questionsContainer}>
          <QuestionBox textDescription="Como funciona o plano de saúde para pets?" />
          <QuestionBox textDescription="Como é a forma de pagamento?" />
          <QuestionBox textDescription="Como solicito o reembolso?" />
          <QuestionBox textDescription="Como eu acesso a tabela de reembolso?" />
          <QuestionBox textDescription="Como renovar o plano?" />
        </div>
      </div>
      <button className={styles.seeMoreButton}>
        {isMobile ? "mais artigos" : "ver mais artigos"} <FiChevronDown size={22} />
      </button>
    </main>

  );
};
