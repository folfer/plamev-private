import { Doubts as Layout } from "./Layout";

export const Doubts = (props: any) => {
  const x = "x";
  const layoutProps = {
    ...props,
    x,
  };

  return <Layout {...layoutProps} />;
};
