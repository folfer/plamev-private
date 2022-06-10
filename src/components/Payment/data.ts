export interface IPayment {
  data?: any;
}

export interface IPaymentLayout extends IPayment {
  planType: string;
  pet: any;
  setDetailsModal(detailsModal: boolean): void;
  detailsModal: boolean;
  planName: string;
}

export interface IAbstractLayoutProps
  extends Pick<
  IPaymentLayout,
  | 'planType' | 'pet' | 'detailsModal' | 'setDetailsModal' | 'planName'> { }