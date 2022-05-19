import { useState } from "react";
import { IPlan } from "./data";

import { Plan as Layout } from "./Layout";

export const Plan = (props: IPlan) => {
  const [toggleAttendance, setToggleAttendance] = useState<boolean>(false);
  const [togglePolicies, setTogglePolicies] = useState<boolean>(false);
  const [toggleInstitutional, setToggleInstitutional] =
    useState<boolean>(false);

  const layoutProps = {
    ...props,
    toggleAttendance,
    togglePolicies,
    toggleInstitutional,
    setToggleAttendance,
    setTogglePolicies,
    setToggleInstitutional,
  };

  return <Layout {...layoutProps} />;
};
