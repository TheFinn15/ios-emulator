import {HomeScreenType, IHomeApp, IHomeContent, IHomeFolder} from '../../types';
import {AppItem} from './app-item';
import React, {useRef} from 'react';

interface BlurContainerProps {
  state: boolean;
  ctx: IHomeContent;
  type: HomeScreenType;
  onOpenApp: (type: HomeScreenType, ctx: IHomeContent) => void;
  onCloseBlur: () => void;
}

export const BlurContainer = (
  {
    state,
    ctx: {app, folder, widget},
    type,
    onOpenApp,
    onCloseBlur,
  }: BlurContainerProps) => {
  const openedFolder = useRef<HTMLDivElement | null>(null);

  return (
      <div className="blur-box" onClick={(ev) => onBlurClick(ev)}>
          {folder && (
              <div ref={openedFolder} className="blur-box__folder">
                <span>{folder.title}</span>
                <div className="blur-box__folder-items">
                  {folder.apps.map((app, ind) => {
                    return (<AppItem key={ind} content={{app}} className="home-screen__container-apps__item" onOpenApp={(type, ctx) => onOpenApp(type, ctx)} />);
                  })}
                </div>
              </div>
          )}
      </div>
  );

  function onBlurClick(ev: React.MouseEvent<HTMLDivElement>) {
    if (openedFolder.current && (ev.target as Node).contains(openedFolder.current))
      onCloseBlur();
  }
};
