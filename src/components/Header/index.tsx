import { useState } from "react";
import { IHeader } from "./data";

import { Header as Layout } from "./Layout";

export const Header = (props: IHeader) => {
  const [isOpenFastAccess, setIsOpenFastAccess] = useState<boolean>(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);

  function toggleFastAccess() {
    setIsOpenFastAccess(!isOpenFastAccess);
  }

  function toggleMenu() {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  }

  const layoutProps = {
    ...props,
    isOpenFastAccess,
    toggleFastAccess,
    isOpenMenuMobile,
    toggleMenu,
  };

  return <Layout {...layoutProps} />;
};
