export interface ICheckout {
  data?: any;
  planTitle?: string;
  initialValue?: string;
  finalValue?: string;
  descriptionPlan?: string;
  bonusPlan?: string;
  handleTakePlanValue: any;
  index: any;
}

export interface ICheckoutLayout extends ICheckout {
  handleNextStep(): void;
  handleTakePlanValue: any;
  handleRegisterPets(dataInformation: any): void;
}

export interface ICheckoutLayoutProps
  extends Pick<
  ICheckoutLayout,
  | 'handleNextStep' | 'handleTakePlanValue' | 'handleRegisterPets'> { }

export interface IPlanLayoutProps
  extends Pick<
  ICheckoutLayout,
  | 'bonusPlan' | 'planTitle' | 'descriptionPlan' | 'initialValue' | 'finalValue' | 'handleTakePlanValue' | 'index'> { }