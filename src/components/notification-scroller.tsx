import {INotification} from '../types';

export default function NotificationScroller() {
  const notifications: INotification[] = [
    {
      title: 'Blockchain.com Crypto FAQ: What is a seed phrase ?',
      content: 'Lorem',
      sentAt: new Date(),
      icon: require('../assets/icons/mail_app.svg')
    },
  ];

  return (
      <div className="notification-container">
        {notifications.map((notify, ind) => (
            <div className="notification-container__item" key={ind}>
              <div className="notification-container__item-icon">
                <img width="32px" height="32px" src={notify.icon} alt="icon" />
              </div>
              <div className="row">
                <div className="col-8 notification-container__item-title">
                  {notify.title}
                </div>
                <div className="col-4 notification-container__item-time">
                  1 minutes ago
                </div>
                <div className="col-12 notification-container__item-subtitle">
                  {notify.content}
                </div>
              </div>
            </div>
        ))}
      </div>
  );
}
