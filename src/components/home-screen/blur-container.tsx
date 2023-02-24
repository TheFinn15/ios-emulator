import { HomeScreenType, IHomeContent } from "@/types";
import { AppItem } from "./app-item";
import React, { createRef, useRef } from "react";
import styled from "styled-components";

interface BlurContainerProps {
  state: boolean;
  ctx: IHomeContent;
  type: HomeScreenType;
  onOpenApp: (type: HomeScreenType, ctx: IHomeContent) => void;
  onCloseBlur: () => void;
  isContextMenu?: boolean;
}

export const BlurContainer = ({
  state,
  ctx: { app, folder, widget },
  type,
  onOpenApp,
  onCloseBlur,
  isContextMenu = false,
}: BlurContainerProps) => {
  const openedFolder = useRef<HTMLDivElement | null>(null);
  const blurBoxRef = createRef<HTMLDivElement>();

  const { top, left } = JSON.parse(localStorage["coords"]);
  const ContextMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    gap: 0.2rem;
    transform: translate(${top}px, ${left}px);
    background-color: rgba(95, 95, 95, 0.55);
    backdrop-filter: blur(10px);
    width: 160px;
    border-radius: 10px;
    padding: 0.5rem;
  `;
  const ContextItem = styled.div`
    color: #fff;
    font-family: "SF PRO Regular", sans-serif;
    font-size: 10px;
    text-align: center;
    width: 100%;
    cursor: pointer;

    :hover {
      background-color: rgba(142, 142, 142, 0.55);
      border-radius: 40px;
    }
  `;
  const appContextMenu = ["Recents", "Delete app"];

  return (
    <div
      ref={blurBoxRef}
      className="blur-box"
      onClick={(ev) => onBlurClick(ev)}
    >
      {folder && !isContextMenu && (
        <div ref={openedFolder} className="blur-box__folder">
          <span onClick={onChangeFolderTitle}>{folder.title}</span>
          <div className="blur-box__folder-items">
            {folder.apps.map((app, ind) => {
              return (
                <AppItem
                  key={ind}
                  content={{ app }}
                  className="home-screen__container-apps__item"
                  onOpenApp={(type, ctx) => onOpenApp(type, ctx)}
                />
              );
            })}
          </div>
        </div>
      )}
      {isContextMenu && (
        <ContextMenu>
          {appContextMenu.map((item, ind) => {
            return (
              <ContextItem
                style={{
                  borderBottom:
                    ind !== appContextMenu.length ? ".5px solid #ff" : "",
                }}
              >
                {item}
              </ContextItem>
            );
          })}
        </ContextMenu>
      )}
    </div>
  );

  function onBlurClick(ev: React.MouseEvent<HTMLDivElement>) {
    if (
      openedFolder.current &&
      (ev.target as Node).contains(openedFolder.current)
    ) {
      openedFolder.current?.classList.add("blur-box-folder-close");
      blurBoxRef.current?.classList.add("blur-box-close");
      setTimeout(() => {
        onCloseBlur();
        blurBoxRef.current?.classList.remove("blur-box-folder-close");
        blurBoxRef.current?.classList.remove("blur-box-close");
      }, 300);
    }
  }

  function onChangeFolderTitle() {}
};
