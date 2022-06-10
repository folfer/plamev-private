import { Checkout as Layout } from './Layout';
import { useAuth } from '../../hooks/AuthContext';
import { useState } from 'react';

export const Checkout = (props: any) => {
  const { setNewStep, setPlanType, setPet, setPlanName } = useAuth();
  const [firstPlan, setFirstPlan] = useState<boolean>(false);

  function handleNextStep() {
    setNewStep(1);
  }

  const handleTakePlanValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlanType(event.target.value);
    setPlanName(event.target.id);
  };

  const handleRegisterPets = (dataInformation: any) => {
    setPet(dataInformation.planPatcher);

    handleNextStep();
  };

  const layoutProps = {
    ...props,
    handleNextStep,
    handleTakePlanValue,
    firstPlan,
    handleRegisterPets,
  };

  return <Layout {...layoutProps} />;
};
