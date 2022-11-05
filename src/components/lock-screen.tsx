import NotificationScroller from './notification-scroller';
import '../assets/css/icons.css';

export function LockScreen() {
  return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="life-text text-white ps-4">
            Test Testo
          </div>
          <div className="d-inline-flex px-4">
            <div className="icon__mobile-network-on" />
            <div className="icon__battery" />
          </div>
        </div>
        <div className={'lock-screen'}>
          <div className="lock-screen__blocked" />
          <div className="lock-screen__time">
            {new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'})}
          </div>
          <div className="lock-screen__date">
            {new Date().toLocaleDateString(undefined, {weekday: 'long', day: 'numeric', month: 'long'})}
          </div>

          <NotificationScroller />

          <div className="lock-screen__bottom">
            <div className="lock-screen__bottom-icon-flashlight" />
            <div className="lock-screen__bottom-swipe">
              Swipe up to unlock
              <div />
            </div>
            <div className="lock-screen__bottom-icon-camera" />
          </div>
        </div>
      </div>
  );
}
