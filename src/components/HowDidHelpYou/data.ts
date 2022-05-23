export interface IHowDidHelpYou {
  data?: any;
  textDescription: string;
}

export interface IHowDidHelpYouLayout extends IHowDidHelpYou {
}


export interface IPlanLayoutProps
  extends Pick<
  IHowDidHelpYouLayout,
  | 'textDescription'
  > { }

export interface IQuestionBoxLayoutProps
  extends Pick<
  IHowDidHelpYouLayout,
  | 'textDescription'
  > { }