export interface IToppings {
  data?: any;
  contract: boolean;
  initialValue?: string;
  finalValue?: string;
  planType?: string;
  LogoProps?: any;
}

export interface IToppingsLayout extends IToppings {
}


export interface IPlanLayoutProps
  extends Pick<
  IToppingsLayout,
  | 'contract' | 'initialValue' | 'finalValue' | 'planType' | 'LogoProps'
  > { }