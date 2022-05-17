import { useState } from "react";
import { IApplication } from "./data";

import { Application as Layout } from "./Layout";

export const Application = (props: IApplication) => {
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
