import {AppID, HomeScreenType, Icon, IHomeApp, IHomeContent} from '@/types';
import {CSSProperties} from 'styled-components';

interface AppItemProps {
  content: IHomeContent;
  className: string;
  onOpenApp: (type: HomeScreenType, ctx: IHomeContent) => void;
}

export const AppItem = ({content: {app, widget, folder}, className, onOpenApp}: AppItemProps) => {
  return (getComponentByContent());

  function getComponentByContent() {
    const badgeStyles = (badge: number): CSSProperties => {
      return {
        width: badge >= 100 ? 'initial' : '14px',
        left: badge >= 10000 ? '50%' : badge >= 1000 || badge >= 100 ? '70%' : '85%'
      }
    };

    if (app) {
      const appIcon = getAppIcon();
      return (
          <div className={`${className} position-relative`} onClick={() => onOpenApp('application', {app})}>
            {(app.badge && app.badge > 0) &&
              <div
                className="home-screen__container-apps__badge"
                style={badgeStyles(app.badge)}>
                {app.badge}
              </div>
            }
            <img src={appIcon.src} alt={`icon_${app.id}`} width={`${appIcon.width}px`} height={`${appIcon.height}px`} />
            <span>{app.name}</span>
          </div>
      );
    }
    if (widget) {
      return (<div>widget</div>);
    }
    if (folder) {
      return (
          <div className="home-screen__container-apps__folder" onClick={() => onOpenApp('folder', {folder})}>
            <div className="home-screen__container-apps__folder-box">
              {(folder.badge && folder.badge > 0) &&
                <div
                  className="home-screen__container-apps__badge"
                  style={badgeStyles(folder.badge)}>
                  {folder.badge}
                </div>
              }
              <div className="home-screen__container-apps__folder-box_sub-items">
                {folder.apps.map((app, ind) => {
                  const appIcon = getAppIcon(app);
                  return (<img src={appIcon.src} alt={`icon_${app.id}`} width={appIcon.width} height={appIcon.height} key={ind} />);
                })}
              </div>
            </div>
            <span>{folder.title}</span>
          </div>
      );
    }
    return (
        <div>Nope</div>
    );
  }

  function getAppIcon(additional?: IHomeApp): Icon {
    const currentApp = additional ?? app;
    const res: Icon = {
      src: '',
      width: 48,
      height: 48,
    };
    try {
      if (currentApp) {
        const rawIconName = Object.keys(AppID)[parseInt(currentApp.id)-1];
        const iconName = `${rawIconName?.split(/(?=[A-Z])/).map(s => s.toLowerCase()).join('_')}_app.svg`;
        res.src = rawIconName ? require(`@icons/${iconName}`) : '';
      }
      return res;
    } catch (e) {
      console.log(e);
      return res;
    }
  }
};
