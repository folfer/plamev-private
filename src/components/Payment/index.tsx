import { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { IPayment } from "./data";
import { Payment as Layout } from "./Layout";

export const Payment = (props: IPayment) => {
  const { petName, planType } = useAuth();
  const [detailsModal, setDetailsModal] = useState<boolean>(false);

  const layoutProps = {
    ...props,
    planType,
    petName,
    setDetailsModal,
    detailsModal,
  };

  return <Layout {...layoutProps} />;
};
