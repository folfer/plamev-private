import { useState } from "react";
import { IContraction } from "./data";

import { Contraction as Layout } from "./Layout";

export const Contraction = (props: IContraction) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const layoutProps = {
    ...props,
    toggleMenu,
    setToggleMenu
  };

  return <Layout {...layoutProps} />;
};
