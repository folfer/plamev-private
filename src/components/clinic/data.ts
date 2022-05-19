export interface IClinic {
  data?: any;
}

export interface IClinicLayout extends IClinic {
  toggleAttendance: boolean;
  setToggleAttendance(toggleAttendance: boolean): void;
  togglePolicies: boolean;
  setTogglePolicies(togglePolicies: boolean): void;
  toggleInstitutional: boolean;
  setToggleInstitutional(toggleInstitutional: boolean): void;
}

export interface IClinicLayoutProps
  extends Pick<
  IClinicLayout,
  | 'toggleAttendance' | 'setToggleAttendance' | 'togglePolicies' | 'setTogglePolicies' | 'toggleInstitutional' | 'setToggleInstitutional'
  > { }