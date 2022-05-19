import { IDoubts } from "./data";

import { Doubts as Layout } from "./Layout";

export const Doubts = (props: IDoubts) => {
  const layoutProps = {
    ...props,
  };

  // @ts-ignore
  return <Layout {...layoutProps} />;
};
