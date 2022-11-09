export interface INotification {
  title: string;
  icon: string;
  content: string;
  sentAt: Date;
}

export type ScreenType = 'lock-screen' | 'home' | 'settings';

export type HomeScreenType = 'widget' | 'application' | 'folder';

export enum WidgetSize {
 Small = '2x2',
 Medium = '3x2',
 ExtraMedium = '4x2',
 Large = '4x4'
}

export interface DateTime {
  date: string;
  time: string;
}

export interface Icon {
  width: number;
  height: number;
  src: string;
}

export interface IHomeApp {
  id: string;
  icon?: Icon;
  name?: string;
  badge?: number;
}

export interface IHomeFolder {
  apps: IHomeApp[];
  title: string;
  badge?: number;
}

export interface IWidget {
  size: WidgetSize;
  syncWith: IHomeApp;
  title: string;
}

export interface IHomeContent {
  widget?: IWidget;
  app?: IHomeApp;
  folder?: IHomeFolder;
}

export interface IHomeScreen {
  mainContent: IHomeContent[];
  bottomApps: IHomeApp[]
}

export interface BlurOption {
  state: boolean;
  type: HomeScreenType;
  ctx: IHomeContent;
}
