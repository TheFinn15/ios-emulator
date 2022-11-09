import {HomeScreenType, IHomeContent, IHomeFolder} from '../../types';
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
      return (
          <div className={`${className} position-relative`} onClick={() => onOpenApp('application', {app})}>
            {(app.badge && app.badge > 0) &&
              <div
                className="home-screen__container-apps__badge"
                style={badgeStyles(app.badge)}>
                {app.badge}
              </div>
            }
            <img src={app.icon?.src} alt={`icon_${app.id}`} width={`${app.icon?.width}px`} height={`${app.icon?.height}px`} />
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
                  return (<img src={app.icon?.src} alt={`icon_${app.id}`} key={ind} />);
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
};
