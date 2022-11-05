import React, {CSSProperties, useState} from 'react';
import '../assets/css/phone-container.css';
import {LockScreen} from './lock-screen';

// TODO: Изучить детальнее Redux с типизациией
export function PhoneContainer() {
  const [defaultWallpaper, setWallpaper] = useState('https://9to5mac.com/wp-content/uploads/sites/6/2021/09/1952.Light_Beams_Silver_Dark-428w-926h@3xiphone.jpeg?strip=info&w=1542');

  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const styles: CSSProperties = {};
  if (isDarkMode) {
    styles.borderColor = 'lightgray';
    document.body.style.backgroundColor = '#000';
  }

  return (
      <div className={'phone-container'} style={styles}>
        <div className={'phone-container__notch'} />
        <div className={'phone-container__controls-volume-up'} />
        <div className={'phone-container__controls-volume-down'} />
        <div className={'phone-container__controls-power-off'} />

        <div className={'phone-container__screen'} style={{backgroundImage: `url(${defaultWallpaper})`}}>
          <LockScreen />
        </div>
      </div>
  );
}
