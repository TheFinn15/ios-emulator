import '../../assets/css/home-screen.css';
import {Bottom} from './bottom';
import {AppID, BlurOption, HomeScreenType, IHomeContent, IHomeScreen} from '../../types';
import {Content} from './content';
import {BlurContainer} from './blur-container';
import {useState} from 'react';

export const HomeScreen = () => {
  const content: IHomeScreen = {
    bottomApps: [
      {
        id: AppID.Phone,
      },
      {
        id: AppID.Camera,
      },
      {
        id: AppID.Messages,
      },
      {
        id: AppID.Safari,
      }
    ],
    mainContent: [
      {
        app: {
          id: AppID.Settings,
          name: 'Settings',
          badge: 10,
        }
      },
      {
        folder: {
          title: 'shoto',
          badge: 91,
          apps: [
            {
              id: AppID.Calendar,
              name: 'Calendar',
            },
            {
              id: AppID.Files,
              name: 'Files',
            },
            {
              id: AppID.Clock,
              name: 'Clock',
            },
            {
              id: AppID.AppStore,
              name: 'App Store',
            },
          ]
        }
      },
      {
        app: {
          id: AppID.Calculator,
          name: 'Calculator',
        }
      },
      {
        app: {
          id: AppID.Contacts,
          name: 'Contacts',
        }
      },
      {
        app: {
          id: AppID.Maps,
          name: 'Maps',
        }
      },
    ]
  };

  const [blurredBox, setBlurredBox] = useState<BlurOption | null>(null);

  return (
      <div className="home-screen__container">
        {blurredBox && <BlurContainer state={blurredBox.state} type={blurredBox.type} ctx={blurredBox.ctx} onCloseBlur={() => setBlurredBox(null)} onOpenApp={handleOpenContent}/>}

        <Content apps={content.mainContent} onOpenApp={handleOpenContent} />
        <Bottom apps={content.bottomApps} onOpenApp={handleOpenContent} />
      </div>
  );

  function handleOpenContent(type: HomeScreenType, ctx: IHomeContent) {
    switch (type) {
      case 'folder':
        setBlurredBox({state: true, ctx, type});
    }
  }
};
