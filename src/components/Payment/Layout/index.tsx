import styles from "../Layout/styles.module.scss";
import { Abstract } from "./Components/Abstract";
import { PaymentMethods } from "./Components/PaymentMethods";
import { PersonalData } from "./Components/PersonalData";

export const Payment = () => {
  return (
    <main className={styles.firstContainer}>
      <PersonalData />
      <PaymentMethods />
      <Abstract />
    </main>
  );
};
