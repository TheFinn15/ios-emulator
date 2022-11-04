import React from 'react';
import '../assets/css/phone-container.css';
import {LockScreen} from './lock-screen';

// TODO: Изучить детальнее Redux с типизациией
export default class PhoneContainer extends React.Component<any, any> {
  readonly state: any = {
    defaultWallpaper: 'https://9to5mac.com/wp-content/uploads/sites/6/2021/09/1952.Light_Beams_Silver_Dark-428w-926h@3xiphone.jpeg?strip=info&w=1542'
  };

  render() {
    return (
        <div className={'phone-container'}>
          <div className={'phone-container__notch'} />
          <div className={'phone-container__controls-volume-up'} />
          <div className={'phone-container__controls-volume-down'} />
          <div className={'phone-container__controls-power-off'} />

          <div className={'phone-container__screen'} style={{backgroundImage: `url(${this.state.defaultWallpaper})`}}>
            <LockScreen />
          </div>
        </div>
    );
  }

  getCurrentScreen() {
    return (
        <div>

        </div>
    );
  }
}
