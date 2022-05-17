export interface IHeader {
  data?: any;
}

export interface IHeaderLayout extends IHeader {
  isOpenFastAccess: boolean,
  toggleFastAccess(): void,
  isOpenMenuMobile: boolean,
  toggleMenu(): void,
}

export interface IHeaderLayoutProps
  extends Pick<
  IHeaderLayout,
  | 'isOpenFastAccess' | 'toggleFastAccess' | 'isOpenMenuMobile' | 'toggleMenu'
  > { }