export interface IAccreditedHelp {
  data?: any;
  textDescription: string;
}

export interface IAccreditedHelpLayout extends IAccreditedHelp {
}


export interface IPlanLayoutProps
  extends Pick<
  IAccreditedHelpLayout,
  | 'textDescription'
  > { }

export interface IQuestionBoxLayoutProps
  extends Pick<
  IAccreditedHelpLayout,
  | 'textDescription'
  > { }