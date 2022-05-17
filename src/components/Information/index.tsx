import { useState } from "react";
import { IInformation } from "./data";

import { Information as Layout } from "./Layout";

export const Information = (props: IInformation) => {
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
