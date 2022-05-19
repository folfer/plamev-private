export interface IPlan {
  data?: any;
}

export interface IPlanLayout extends IPlan {
  toggleAttendance: boolean;
  setToggleAttendance(toggleAttendance: boolean): void;
  togglePolicies: boolean;
  setTogglePolicies(togglePolicies: boolean): void;
  toggleInstitutional: boolean;
  setToggleInstitutional(toggleInstitutional: boolean): void;
}

export interface IPlanLayoutProps
  extends Pick<
  IPlanLayout,
  | 'toggleAttendance' | 'setToggleAttendance' | 'togglePolicies' | 'setTogglePolicies' | 'toggleInstitutional' | 'setToggleInstitutional'
  > { }