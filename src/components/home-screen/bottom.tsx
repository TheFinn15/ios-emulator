import { HomeScreenType, IHomeApp, IHomeContent } from "../../types";
import { AppItem } from "./app-item";

interface BottomProps {
  apps: IHomeApp[];
  onOpenApp: (type: HomeScreenType, ctx: IHomeContent) => void;
}

export const Bottom = ({ apps, onOpenApp }: BottomProps) => {
  return (
    <div className="home-screen__container-bottom">
      {apps.map((app, ind) => {
        return (
          <AppItem
            content={{ app }}
            key={ind}
            className="home-screen__container-bottom__item"
            onOpenApp={(type, ctx) => onOpenApp(type, ctx)}
          />
        );
      })}
    </div>
  );
};
