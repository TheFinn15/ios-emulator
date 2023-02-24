import React, { CSSProperties, useRef, useState } from "react";
import "../assets/css/phone-container.css";
import { Direction, SwipePosition } from "./swipe-container";
import { LockScreen } from "./lock-screen";
import { ScreenType } from "../types";
import { TopScreen } from "./top-screen";
import { HomeScreen } from "./home-screen";

// TODO: Need to read more about Redux
export function PhoneContainer() {
  const lockScreenRef = useRef<HTMLDivElement | null>(null);
  const mainScreenRef = useRef<HTMLDivElement | null>(null);

  const wallpaper =
    "https://9to5mac.com/wp-content/uploads/sites/6/2021/09/1952.Light_Beams_Silver_Dark-428w-926h@3xiphone.jpeg?strip=info&w=1542";
  const [defaultWallpaper, setWallpaper] = useState(wallpaper);
  const [visibleScreen, setVisibleScreen] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home");

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const styles: CSSProperties = {};
  if (true) {
    styles.borderColor = "lightgray";
    document.body.style.backgroundColor = "#000";
  }

  return (
    <div className={"phone-container"} style={styles}>
      <div className={"phone-container__notch"} />
      <div className={"phone-container__controls-volume-up"} />
      <div className={"phone-container__controls-volume-down"} />
      <div
        className={"phone-container__controls-power-off"}
        onClick={() => onPowerOff()}
      />

      {/* PROBLEM:
              Maybe is better use position relative and
              one of direction to swipe. Now using margin[Direction]
              Better for using <SwipeContainer/>
        */}
      <div
        ref={mainScreenRef}
        className={"phone-container__screen"}
        style={{ backgroundImage: `url(${defaultWallpaper})` }}
      >
        <TopScreen isLockScreen={currentScreen === "lock-screen"} />
        {visibleScreen && getCurrentScreen()}
      </div>
    </div>
  );

  function getCurrentScreen() {
    switch (currentScreen) {
      case "lock-screen":
        return <LockScreen onSwipe={(direct, pos) => onSwipe(direct, pos)} />;
      case "home":
        return <HomeScreen />;
      case "settings":
        return <div />;
      default:
        return <div />;
    }
  }

  function onPowerOff() {
    setVisibleScreen(!visibleScreen);
    setWallpaper(!visibleScreen ? wallpaper : "");
  }

  function onSwipe(swipeTo: Direction, pos: SwipePosition) {
    if (mainScreenRef && mainScreenRef.current) {
      if (swipeTo === "top")
        mainScreenRef.current.style.marginTop = `-${pos.y}px`;
      if (swipeTo === "bottom")
        mainScreenRef.current.style.marginTop = `${pos.y}px`;
      if (swipeTo === "left")
        mainScreenRef.current.style.marginLeft = `-${pos.x}px`;
      if (swipeTo === "right")
        mainScreenRef.current.style.marginLeft = `${pos.x}px`;
    }
  }
}
