export interface IPersonalData {
  data?: any;
}

export interface IPersonalDataLayout extends IPersonalData {
  handleNextStep(): void;
}

export interface IPlanLayoutProps
  extends Pick<
  IPersonalDataLayout,
  | 'handleNextStep'> { }