import { Toppings as Layout } from "./Layout";

export const Toppings = (props: any) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};