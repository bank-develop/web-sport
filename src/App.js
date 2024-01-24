import './App.css';

import React  from 'react';

import rugbyMobile from './asset/image/mobile/rugby.png'
import basketballMobile from './asset/image/mobile/basketball.png'
import rugbyTablet  from './asset/image/tablet/rugby-tablet.png'
import basketballTablet  from './asset/image/tablet/basketball-tablet.png'
import basketballDesktop  from './asset/image/desktop/basketball-desktop.png'
import rugbyDesktop  from './asset/image/desktop/rugby-desktop.png'
import { useMediaQuery } from 'react-responsive';
import Slider from './components/Slider';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1029 });
  const isTablet = useMediaQuery({ minWidth:769, maxWidth:  1028});
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const titlePlayer ={
    rugby:"ATHLETS",
    basketball:"PLAYERS"
  }
  const desRugbyPlayer = [
  {
      id:"01",
      title:"CONNECTION",
      desc:"Connect with coaches directly, you can ping coaches to view profile."
  },
{
  id:"02",
  title:"COLLABORATION",
  desc:"Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
},
{
  id:"03",
  title:"GROWTH",
  desc:"Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc "
  },
]
const descBasketballPlayer = [
  {
    id:"01",
    title:"CONNECTION",
    desc:"Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
  },
{
  id:"02",
  title:"COLLABORATION",
  desc:"Work with recruiter to increase your chances of findingtalented athlete."
},
{
  id:"03",
  title:"GROWTH",
  desc:"Save your time, recruit proper athlets for your team."
  },
]
  
  return (
    <div className="App">
      <div className="position-main">
        <div className="main">
            <div className='content-rugby'>
              <div className='container-image-rugby'>
              {isDesktop ? <img src={rugbyDesktop} alt="rugbyDesktop" className='image-rugby' /> :''}
              {isTablet ? <img src={rugbyTablet} alt="rugbyTablet" className='image-rugby' /> :''}
              {isMobile ? <img src={rugbyMobile} alt="rugbyMobile" className='image-rugby' /> :''}

              </div>
              <div className='wrapper-contents'>
                <div className="container-header">
                <div className='header-title'>
                  {titlePlayer.rugby}
                </div>
                </div>
              {!isMobile ? <>
                <div className='container-contents padding-content-first'>
                  <div className='desciption-container'>
                    <div className='container-desc'>
                      <div className='wrapper-title-desc'>
                        <div className="title-id">{desRugbyPlayer[0].id}</div>
                        <div className="title-desc">{desRugbyPlayer[0].title}</div>
                      </div>
                      <div className="desc">{desRugbyPlayer[0].desc}</div>
                    </div>
                  </div>
                </div>
                <div className='container-contents padding-content-secound bg-secound'>
                  <div className='desciption-container'>
                    <div className='container-desc'>
                      <div className='wrapper-title-desc'>
                        <div className="title-id">{desRugbyPlayer[1].id}</div>
                        <div className="title-desc">{desRugbyPlayer[1].title}</div>
                      </div>
                      <div className="desc">{desRugbyPlayer[1].desc}</div>
                    </div>
                  </div>
                </div>
                <div className='container-contents padding-content-third bg-third'>
                  <div className='desciption-container'>
                    <div className='container-desc'>
                      <div className='wrapper-title-desc'>
                        <div className="title-id shadow-white">{desRugbyPlayer[2].id}</div>
                        <div className="title-desc">{desRugbyPlayer[2].title}</div>
                      </div>
                      <div className="desc text-white">{desRugbyPlayer[2].desc}</div>
                    </div>
                  </div>
                </div>
              </> : 
              <Slider data={desRugbyPlayer}/>
              }
              </div>
            </div>

            <div className='content-basketball'>
            <div className='container-image-basketball'>
              {isDesktop ? <img src={basketballDesktop} alt="basketballDesktop" className='image-basketball' /> :''}
              {isTablet ? <img src={basketballTablet} alt="basketballTablet" className='image-basketball' /> :''}
              {isMobile ? <img src={basketballMobile} alt="basketballMobile" className='image-basketball' /> :''}
              </div>
            </div>
            <div className='wrapper-basketball-content'>
            <div className='container-basketball-contents'>
              <div className="container-header-bkb  padding-header-bkb">
                <div className='header-title-bkb'>
                  {titlePlayer.basketball}
                </div>
              </div>
            {!isMobile ? <>
              <div className='container-contents-bkb padding-content-bkb-first'>
                  <div className='desciption-container-bkb'>
                    <div className='container-desc-bkb'>
                      <div className='wrapper-title-desc'>
                        <div className="title-id">{descBasketballPlayer[0].id}</div>
                        <div className="title-desc">{descBasketballPlayer[0].title}</div>
                      </div>
                      <div className="desc">{descBasketballPlayer[0].desc}</div>
                    </div>
                  </div>
              </div>
              <div className='container-contents-bkb padding-content-bkb-secound bg-secound-bkb'>
                  <div className='desciption-container-bkb'>
                    <div className='container-desc-bkb'>
                      <div className='wrapper-title-desc'>
                        <div className="title-id">{descBasketballPlayer[1].id}</div>
                        <div className="title-desc">{descBasketballPlayer[1].title}</div>
                      </div>
                      <div className="desc">{descBasketballPlayer[1].desc}</div>
                    </div>
                  </div>
                </div>
              <div className='container-contents-bkb padding-content-third-bkb bg-third-bkb'>
                  <div className='desciption-container-bkb'>
                    <div className='container-desc-bkb max-width-none'>
                      <div className='wrapper-title-desc'>
                        <div className="title-id shadow-purple">{descBasketballPlayer[2].id}</div>
                        <div className="title-desc">{descBasketballPlayer[2].title}</div>
                      </div>
                      <div className="desc text-white">{descBasketballPlayer[2].desc}</div>
                    </div>
                  </div>
              </div>
              </> : <Slider data={descBasketballPlayer}/>}
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
