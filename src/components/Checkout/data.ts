export interface ICheckout {
  data?: any;
  planTitle?: string;
  initialValue?: string;
  finalValue?: string;
  descriptionPlan?: string;
  bonusPlan?: string;
}

export interface ICheckoutLayout extends ICheckout {
  handleNextStep(): void;
}

export interface ICheckoutLayoutProps
  extends Pick<
  ICheckoutLayout,
  | 'handleNextStep'> { }

export interface IPlanLayoutProps
  extends Pick<
  ICheckoutLayout,
  | 'bonusPlan' | 'planTitle' | 'descriptionPlan' | 'initialValue' | 'finalValue'> { }