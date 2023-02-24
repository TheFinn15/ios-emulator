import React, { useRef, useState } from "react";

export type Direction = "top" | "bottom" | "left" | "right";

interface Params {
  swipeTo: Direction;
  children: JSX.Element;
  handler: {
    onSwipe?: (direction: Direction, pos: SwipePosition) => void;
    onBlur?: (direction: Direction, pos: SwipePosition) => void;
  };
  toBlur?: boolean;
}

export interface SwipePosition {
  x: number;
  y: number;
}

export const SwipeContainer: React.FC<Params> = ({
  swipeTo,
  children,
  toBlur = true,
  ...etc
}) => {
  const childrenRef = useRef<HTMLDivElement | null>(null);

  const [caught, setCaught] = useState(false);
  const [clickedPosition, setClickedPosition] = useState<SwipePosition>({
    x: 0,
    y: 0,
  });
  const [swipedPosition, setSwipedPosition] = useState<SwipePosition>({
    x: 0,
    y: 0,
  });
  const [percentSwipeComplete, setPercentSwipeComplete] = useState(0.0);

  document.onclick = (ev) => {
    if (
      childrenRef.current &&
      !childrenRef.current?.contains(ev.target as Node)
    ) {
      deactivateSwipe();
      return;
    }
  };

  const isVerticalContainer = swipeTo === "top" || swipeTo === "bottom";
  const isCorrectPosToDirection = (): boolean => {
    if (swipeTo === "top") {
      return swipedPosition.y < clickedPosition.y;
    }
    if (swipeTo === "bottom") {
      return swipedPosition.y > clickedPosition.y;
    }
    if (swipeTo === "left") {
      return swipedPosition.x > clickedPosition.x;
    }
    if (swipeTo === "right") {
      return swipedPosition.x < clickedPosition.x;
    }
    return false;
  };

  function doSwipe({
    clientY,
    clientX,
    ...ev
  }: React.MouseEvent<HTMLDivElement>) {
    setSwipedPosition({ x: clientX, y: clientY });

    if (caught && isCorrectPosToDirection()) {
      const result = {
        x: clickedPosition.x - swipedPosition.x,
        y: clickedPosition.y - swipedPosition.y,
      };
      const completeSwipe = isVerticalContainer ? result.y : result.x;
      const maxHeightScreen = isVerticalContainer ? ev.pageY : ev.pageX;

      setPercentSwipeComplete(
        parseFloat(((completeSwipe * 100) / maxHeightScreen).toFixed(2))
      );
      if (!toBlur && etc.handler.onSwipe) {
        etc.handler.onSwipe(swipeTo, result);
      } else if (toBlur && etc.handler.onBlur) {
        // etc.onBlur();
      }
    }
  }

  function activateSwipe({
    clientY,
    clientX,
  }: React.MouseEvent<HTMLDivElement>) {
    setCaught(true);
    setClickedPosition({ x: clientX, y: clientY });
  }

  function deactivateSwipe() {
    const initValue: SwipePosition = { x: 0, y: 0 };
    setCaught(false);
    setClickedPosition(initValue);
    if (etc.handler.onSwipe) etc.handler.onSwipe(swipeTo, initValue);
  }

  return (
    <div
      ref={childrenRef}
      style={{ display: "contents" }}
      onMouseDown={(ev) => activateSwipe(ev)}
      onMouseUp={() => deactivateSwipe()}
      onMouseMove={(ev) => doSwipe(ev)}
    >
      {children}

      {false && <div className="blurred-container"></div>}
    </div>
  );
};
