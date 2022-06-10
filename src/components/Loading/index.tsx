import { Loading as Layout } from './Layout';

export const Loading = (props: any) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
