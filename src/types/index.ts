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

export enum AppID {
  Settings = '1',
  Camera = '2',
  Messages = '3',
  Photos = '4',
  Phone = '5',
  Contacts = '6',
  AppStore = '7',
  Clock = '8',
  Locator = '9',
  Calendar = '10',
  Calculator = '11',
  Mail = '12',
  Safari = '13',
  Wallet = '14',
  Files = '15',
  Weather = '16',
  Notes = '17',
  Maps = '18',
  Music = '19',
  Health = '20',
  Translate = '21',
  AppleTV = '22',
  AppleStore = '23',
  Books = '24'
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
  id: AppID;
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
