import styles from "../Layout/styles.module.scss";
import { Abstract } from "./Components/Abstract";
import { PaymentMethods } from "./Components/PaymentMethods";
import { PaymentData } from "./Components/PaymentData";
import { IPaymentLayout } from "../data";

export const Payment = ({
  petName,
  planType,
  detailsModal,
  setDetailsModal,
}: IPaymentLayout) => {
  return (
    <main className={styles.firstContainer}>
      <PaymentData />
      <PaymentMethods />
      <Abstract
        petName={petName}
        planType={planType}
        setDetailsModal={setDetailsModal}
        detailsModal={detailsModal}
      />
    </main>
  );
};
