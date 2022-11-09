import NotificationScroller from './notification-scroller';
import '../assets/css/icons.css';
import React, {useState} from 'react';
import {Direction, SwipeContainer, SwipePosition} from './swipe-container';
import {DateTime} from '../types';

interface LockScreenParams {
  onSwipe: (direction: Direction, pos: SwipePosition) => void;
}

export const LockScreen =  (
    {onSwipe}: LockScreenParams,
    // ref: React.Ref<HTMLDivElement>
) => {
  const [currentTime, setCurrentTime] = useState(getDateTime().time);
  const [currentDate, setCurrentDate] = useState(getDateTime().date);

  setInterval(() => {
    setCurrentTime(getDateTime().time);
    setCurrentDate(getDateTime().date);
  }, 1000);

  return (
      <div className={'lock-screen'}>
        <div className="lock-screen__blocked" />
        <div className="lock-screen__time">
          {currentTime}
        </div>
        <div className="lock-screen__date">
          {currentDate}
        </div>

        <NotificationScroller />

        <SwipeContainer toBlur={false} swipeTo="top" handler={{onSwipe: (direction, pos) => onSwipe(direction, pos)}}>
          <div className="lock-screen__bottom">
            <div className="lock-screen__bottom-icon-flashlight" />
            <div className="lock-screen__bottom-swipe">
              Swipe up to unlock
              <div />
            </div>
            <div className="lock-screen__bottom-icon-camera" />
          </div>
        </SwipeContainer>
      </div>
  );
}

function getDateTime(): DateTime {
  return {
    time: new Date().toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'}),
    date: new Date().toLocaleDateString(undefined, {weekday: 'long', day: 'numeric', month: 'long'})
  };
}

// export default React.forwardRef(LockScreen);
