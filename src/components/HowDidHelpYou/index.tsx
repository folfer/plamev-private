import { useEffect, useState } from "react";
import { IHowDidHelpYou } from "./data";

import { HowDidHelpYou as Layout } from "./Layout";

export const HowDidHelpYou = (props: IHowDidHelpYou) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
