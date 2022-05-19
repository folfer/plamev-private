import { useState } from "react";
import { IVantage } from "./data";

import { Vantage as Layout } from "./Layout";

export const Vantage = (props: IVantage) => {
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
