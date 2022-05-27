import { useAuth } from "../../hooks/AuthContext";
import { PersonalData as Layout } from "./Layout";

export const PersonalData = (props: any) => {
  const { setNewStep } = useAuth();

  function handleNextStep() {
    setNewStep(2);
    console.log("d");
  }

  const layoutProps = {
    ...props,
    handleNextStep,
  };

  return <Layout {...layoutProps} />;
};
