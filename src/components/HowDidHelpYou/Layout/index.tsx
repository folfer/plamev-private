import { BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import styles from "../Layout/styles.module.scss";
import { QuestionBox } from "./Components/QuestionBox";

export const HowDidHelpYou = () => {
  return (
    <section className={styles.firstSection}>
      <h1 className={styles.title}>Como podemos ajudar você?</h1>
      <div className={styles.searchInput}>
        <BiSearch size={25} color="#504F4B" />
        <input placeholder="Pesquise" className={styles.input} />
      </div>
      <QuestionBox textDescription="Como funciona o plano de saúde para pets?" />
      <QuestionBox textDescription="Como é a forma de pagamento?" />
      <QuestionBox textDescription="Como solicito o reembolso?" />
      <QuestionBox textDescription="Como eu acesso a tabela de reembolso?" />
      <QuestionBox textDescription="Como renovar o plano?" />
      <button className={styles.seeMoreButton}>
        ver mais artigos <FiChevronDown size={22} />
      </button>
    </section>
  );
};
