import { Checkout as Layout } from "./Layout";
import { useAuth } from "../../hooks/AuthContext";

export const Checkout = (props: any) => {
  const { setNewStep } = useAuth();

  function handleNextStep() {
    setNewStep(1);
  }

  const layoutProps = {
    ...props,
    handleNextStep,
  };

  return <Layout {...layoutProps} />;
};
