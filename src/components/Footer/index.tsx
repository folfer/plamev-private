import { useState } from "react";
import { IFooter } from "./data";

import { Footer as Layout } from "./Layout";

export const Footer = (props: IFooter) => {
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
