import '../../assets/css/home-screen.css';
import {Bottom} from './bottom';
import {BlurOption, HomeScreenType, IHomeContent, IHomeScreen} from '../../types';
import {Content} from './content';
import {BlurContainer} from './blur-container';
import {useState} from 'react';

export const HomeScreen = () => {
  const content: IHomeScreen = {
    bottomApps: [
      {
        id: '1',
        icon: {
          src: require('../../assets/icons/call_app.svg').default,
          width: 48,
          height: 48
        },
      },
      {
        id: '2',
        icon: {
          src: require('../../assets/icons/camera_app.svg').default,
          width: 48,
          height: 48
        },
      },
      {
        id: '3',
        icon: {
          src: require('../../assets/icons/imessages_app.svg').default,
          width: 48,
          height: 48
        },
      },
      {
        id: '4',
        icon: {
          src: require('../../assets/icons/safari_app.svg').default,
          width: 48,
          height: 48
        },
      }
    ],
    mainContent: [
      {
        app: {
          id: '100',
          name: 'Safari',
          badge: 10,
          icon: {
            width: 48,
            height: 48,
            src: require('../../assets/icons/safari_app.svg').default,
          }
        }
      },
      {
        folder: {
          title: 'shoto',
          badge: 91,
          apps: [
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
            {
              id: '102',
              name: 'Keks',
              icon: {
                width: 48,
                height: 48,
                src: require('../../assets/icons/safari_app.svg').default,
              }
            },
          ]
        }
      },
      {
        app: {
          id: '100',
          name: 'Safari',
          icon: {
            width: 48,
            height: 48,
            src: require('../../assets/icons/safari_app.svg').default,
          }
        }
      },
      {
        app: {
          id: '100',
          name: 'Safari',
          icon: {
            width: 48,
            height: 48,
            src: require('../../assets/icons/safari_app.svg').default,
          }
        }
      },
      {
        app: {
          id: '100',
          name: 'Safari',
          icon: {
            width: 48,
            height: 48,
            src: require('../../assets/icons/safari_app.svg').default,
          }
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
