import { useEffect, useState } from "react";
import { IToppings } from "./data";

import { Toppings as Layout } from "./Layout";

export const Toppings = (props: IToppings) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
