import { useState } from "react";
import { IDoubts } from "./data";

import { Doubts as Layout } from "./Layout";

export const Doubts = (props: IDoubts) => {
  const x = "x";
  const layoutProps = {
    ...props,
    x,
  };

  return <Layout {...layoutProps} />;
};
