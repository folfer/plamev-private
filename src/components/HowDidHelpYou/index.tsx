import { useEffect, useState } from "react";

import { HowDidHelpYou as Layout } from "./Layout";

export const HowDidHelpYou = (props: any) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
