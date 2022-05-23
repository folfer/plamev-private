import { BsFillCaretDownFill } from "react-icons/bs";
import { IQuestionBoxLayoutProps } from "../../data";
import styles from "./styles.module.scss";

export const QuestionBox = ({ textDescription }: IQuestionBoxLayoutProps) => {
  return (
    <section className={styles.questionBoxContainer}>
      <p className={styles.questionText}>{textDescription}</p>
      <BsFillCaretDownFill size={22} color="#504F4B" />
    </section>
  );
};
