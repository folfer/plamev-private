import { useState } from "react";
import { IDoubts } from "./data";

import { Doubts as Layout } from "./Layout";

export const Doubts = (props: IDoubts) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
