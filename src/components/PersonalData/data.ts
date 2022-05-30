export interface IPersonalData {
  data?: any;
}

export interface IPersonalDataLayout extends IPersonalData {
  handleNextStep(): void;
  handleAccepted: any;
  isSelected: boolean;
}

export interface IPlanLayoutProps
  extends Pick<
  IPersonalDataLayout,
  | 'handleNextStep' | 'handleAccepted' | 'isSelected'> { }