export interface IToppings {
  data?: any;
  contract: boolean;
  initialValue?: string;
  finalValue?: string;
  planType?: string;
  LogoProps?: any;
  mostSeller?: boolean;
}

export interface IToppingsLayout extends IToppings {
}


export interface IPlanLayoutProps
  extends Pick<
  IToppingsLayout,
  | 'contract' | 'initialValue' | 'finalValue' | 'planType' | 'LogoProps' | 'mostSeller'
  > { }