import { Checkout as Layout } from './Layout';
import { useAuth } from '../../hooks/AuthContext';
import { useState } from 'react';

export const Checkout = (props: any) => {
  const { setNewStep, setPlanType, setPetName } = useAuth();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [firstPlan, setFirstPlan] = useState<boolean>(false);

  function handleNextStep() {
    setNewStep(1);
  }

  const handleTakePlanValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(false);
    setPlanType(event.target.value);
    setIsSelected(!isSelected);
  };

  const handleTakePetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPetName(event.target.value);
  };

  const layoutProps = {
    ...props,
    handleNextStep,
    handleTakePlanValue,
    handleTakePetName,
    isSelected,
    firstPlan,
  };

  return <Layout {...layoutProps} />;
};
