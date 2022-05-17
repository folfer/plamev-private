export interface IFooter {
  data?: any;
}

export interface IFooterLayout extends IFooter {
  toggleAttendance: boolean;
  setToggleAttendance(toggleAttendance: boolean): void;
  togglePolicies: boolean;
  setTogglePolicies(togglePolicies: boolean): void;
  toggleInstitutional: boolean;
  setToggleInstitutional(toggleInstitutional: boolean): void;
}

export interface IFooterLayoutProps
  extends Pick<
  IFooterLayout,
  | 'toggleAttendance' | 'setToggleAttendance' | 'togglePolicies' | 'setTogglePolicies' | 'toggleInstitutional' | 'setToggleInstitutional'
  > { }

export interface IFirstSectionLayoutProps
  extends Pick<
  IFooterLayout,
  | 'toggleAttendance' | 'setToggleAttendance' | 'togglePolicies' | 'setTogglePolicies' | 'toggleInstitutional' | 'setToggleInstitutional'
  > { }

