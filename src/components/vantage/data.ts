export interface IVantage {
  data?: any;
}

export interface IVantageLayout extends IVantage {
  toggleAttendance: boolean;
  setToggleAttendance(toggleAttendance: boolean): void;
  togglePolicies: boolean;
  setTogglePolicies(togglePolicies: boolean): void;
  toggleInstitutional: boolean;
  setToggleInstitutional(toggleInstitutional: boolean): void;
}

export interface IVantageLayoutProps
  extends Pick<
  IVantageLayout,
  | 'toggleAttendance' | 'setToggleAttendance' | 'togglePolicies' | 'setTogglePolicies' | 'toggleInstitutional' | 'setToggleInstitutional'
  > { }