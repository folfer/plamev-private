export interface IDoubts {
  data?: any;
  ImageSrc?: any;
}

export interface IDoubtsLayout extends IDoubts {

}

export interface IDoubtsLayoutProps
  extends Pick<
  IDoubtsLayout,
  | 'x'
  > { }

export interface IDoubtsVideoLayoutProps
  extends Pick<
  IDoubtsLayout,
  | 'ImageSrc'
  > { }