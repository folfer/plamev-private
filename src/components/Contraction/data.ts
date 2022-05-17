export interface IContraction {
  data?: any;
}

export interface IContractionLayout extends IContraction {
  toggleMenu: boolean;
  setToggleMenu(toggleMenu: boolean): void;
}

export interface IContractionLayoutProps
  extends Pick<
  IContractionLayout,
  | 'toggleMenu'
  > { }