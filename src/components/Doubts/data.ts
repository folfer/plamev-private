export interface IDoubts {
  data?: any;
  ImageSrc?: any;
}

export interface IDoubtsLayout extends IDoubts {

}

export interface IDoubtsVideoLayoutProps
  extends Pick<
  IDoubtsLayout,
  | 'ImageSrc'
  > { }