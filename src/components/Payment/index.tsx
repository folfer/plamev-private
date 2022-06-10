import { useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { IPayment } from './data';
import { Payment as Layout } from './Layout';

export const Payment = (props: IPayment) => {
  const { pet, planType, planName } = useAuth();
  const [detailsModal, setDetailsModal] = useState<boolean>(false);

  const layoutProps = {
    ...props,
    planType,
    pet,
    setDetailsModal,
    detailsModal,
    planName,
  };

  return <Layout {...layoutProps} />;
};
