export interface ICheckout {
  data?: any;
  planTitle?: string;
  initialValue?: string;
  finalValue?: string;
  descriptionPlan?: string;
  bonusPlan?: string;
  handleTakePlanValue: any;
  handleTakePetName: any;
}

export interface ICheckoutLayout extends ICheckout {
  handleNextStep(): void;
  handleTakePlanValue: any;
  handleTakePetName: any;
  isSelected: boolean;
}

export interface ICheckoutLayoutProps
  extends Pick<
  ICheckoutLayout,
  | 'handleNextStep' | 'handleTakePlanValue' | 'handleTakePetName' | 'isSelected'> { }

export interface IPlanLayoutProps
  extends Pick<
  ICheckoutLayout,
  | 'bonusPlan' | 'planTitle' | 'descriptionPlan' | 'initialValue' | 'finalValue' | 'handleTakePlanValue'> { }