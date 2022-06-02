export interface IAccreditedDoubts {
  data?: any;
  bgImage?: any;
  userName?: string;
  clinic?: string;
  timeAccredited?: number;
}

export interface IAccreditedDoubtsLayout extends IAccreditedDoubts {

}

export interface IAccreditedDoubtsVideoLayoutProps
  extends Pick<
  IAccreditedDoubtsLayout,
  | 'bgImage' | 'userName' | 'clinic' | 'timeAccredited'
  > { }