export interface IPayment {
  data?: any;
}

export interface IPaymentLayout extends IPayment {
  planType: string;
  petName: string;
  setDetailsModal(detailsModal: boolean): void;
  detailsModal: boolean;
}

export interface IAbstractLayoutProps
  extends Pick<
  IPaymentLayout,
  | 'planType' | 'petName' | 'detailsModal' | 'setDetailsModal'> { }