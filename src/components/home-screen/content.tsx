import { HomeScreenType, IHomeApp, IHomeContent } from "../../types";
import { AppItem } from "./app-item";

interface Props {
  apps: IHomeContent[];
  onOpenApp: (
    type: HomeScreenType,
    ctx: IHomeContent,
    isCtxMenu?: boolean
  ) => void;
}

export const Content = ({ apps, onOpenApp }: Props) => {
  return (
    <div className="home-screen__container-apps">
      {apps.map((app, ind) => {
        return (
          <AppItem
            key={ind}
            content={app}
            className="home-screen__container-apps__item"
            onOpenApp={(type, ctx, isCtxMenu) =>
              onOpenApp(type, ctx, isCtxMenu)
            }
          />
        );
      })}
    </div>
  );
};
