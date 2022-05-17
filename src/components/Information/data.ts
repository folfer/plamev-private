export interface IInformation {
  data?: any;
}

export interface IInformationLayout extends IInformation {
  toggleAttendance: boolean;
  setToggleAttendance(toggleAttendance: boolean): void;
  togglePolicies: boolean;
  setTogglePolicies(togglePolicies: boolean): void;
  toggleInstitutional: boolean;
  setToggleInstitutional(toggleInstitutional: boolean): void;
}

export interface IInformationLayoutProps
  extends Pick<
  IInformationLayout,
  | 'toggleAttendance' | 'setToggleAttendance' | 'togglePolicies' | 'setTogglePolicies' | 'toggleInstitutional' | 'setToggleInstitutional'
  > { }