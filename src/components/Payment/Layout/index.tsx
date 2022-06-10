import styles from '../Layout/styles.module.scss';
import { Abstract } from './Components/Abstract';
import { PaymentMethods } from './Components/PaymentMethods';
import { PaymentData } from './Components/PaymentData';
import { IPaymentLayout } from '../data';

export const Payment = ({
  pet,
  planType,
  detailsModal,
  setDetailsModal,
  planName,
}: IPaymentLayout) => {
  return (
    <main className={styles.firstContainer}>
      <PaymentData />
      <PaymentMethods />
      <Abstract
        pet={pet}
        planName={planName}
        planType={planType}
        setDetailsModal={setDetailsModal}
        detailsModal={detailsModal}
      />
    </main>
  );
};
