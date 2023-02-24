import { SwipeContainer } from "./swipe-container";
import React, { useState } from "react";

interface Props {
  isLockScreen: boolean;
}

export const TopScreen = ({ isLockScreen }: Props) => {
  const [currentTime, setCurrentTime] = useState(getTime());

  setInterval(() => {
    setCurrentTime(getTime());
  }, 1000);

  return (
    <div className="d-flex justify-content-between pt-2">
      <div className={`${isLockScreen ? "life-text" : ""} text-white ps-4`}>
        {leftCornerState()}
      </div>
      <SwipeContainer swipeTo="bottom" handler={{ onBlur: () => {} }}>
        <div className="d-inline-flex px-4">
          <div className="icon__mobile-network-on" />
          <div className="icon__battery" />
        </div>
      </SwipeContainer>
    </div>
  );

  function leftCornerState() {
    return isLockScreen ? "Vodafone UA" : currentTime;
  }

  function getTime(): string {
    return new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};
