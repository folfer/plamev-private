import { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { PersonalData as Layout } from "./Layout";

export const PersonalData = (props: any) => {
  const { setNewStep } = useAuth();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isSelectedCheckbox, setIsSelectedCheckbox] = useState<boolean>(false);

  function handleNextStep() {
    setNewStep(2);
  }

  const handleAccepted = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(false);
    setIsSelected(!isSelected);
  };

  const layoutProps = {
    ...props,
    handleNextStep,
    handleAccepted,
    isSelected,
  };

  return <Layout {...layoutProps} />;
};
