import './App.css';
import rugbyMobile from './asset/image/mobile/rugby.png'
import basketballMobile from './asset/image/mobile/basketball.png'
import paginationBasketBall from './asset/image/mobile/pagination-basketbal.png'
import paginationRugby from './asset/image/mobile/pagination-rugby.png'
import rugbyTablet  from './asset/image/tablet/rugby-tablet.png'
import basketballTablet  from './asset/image/tablet/basketball-tablet.png'
import basketballDesktop  from './asset/image/desktop/basketball-desktop.png'
import rugbyDesktop  from './asset/image/desktop/rugby-desktop.png'

import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1313 });
  const isTablet = useMediaQuery({ minWidth:731, maxWidth: 1312});
  const isMobile = useMediaQuery({ maxWidth: 730 });

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
      {/* <BasketballPlayer/>
      <RugbyPlayer /> */}
      <div className="container-app">
      <div className="top-header">
        {/* rugby */}
          {/* titlePlayer */}
          {isMobile ? 
          <>
            <div className="container-rugby-player">
             <div className='titlePlayer'>
            {titlePlayer.rugby}
          </div>
          <div className='image-rugby'>
            <img src={rugbyMobile} alt="rugbyMobile" />
          </div>
          <div className='container-desc'>
            <div className='wrapper-title-desc'>
              <div className="title-id">
                {desRugbyPlayer[1].id}
              </div>
              <div className="title-desc">
                {desRugbyPlayer[1].title}
              </div>
              </div>
            <div className="desc">
                {desRugbyPlayer[1].desc}
            </div>
          </div>
          <div className="swiper">
          <img src={paginationRugby} alt="paginationRugby" className='swiper-image' />
          </div>
        </div>
          </> : 
        // destop&tablet
          <>
            <div className="container-rugby-player">
            {isDesktop ? <img src={rugbyDesktop} alt="rugbyDesktop" className='image-rugby' /> :''}
            {isTablet ? <img src={rugbyTablet} alt="rugbyTablet" className='image-rugby' /> :''}
             <div className='titlePlayer margin-left-content'>
            {titlePlayer.rugby}
          </div>
          <div><></></div>
          <div className='container-desc margin-left-content'>
            <div className='wrapper-title-desc'>
              <div className="title-id">
                {desRugbyPlayer[0].id}
              </div>
              <div className="title-desc">
                {desRugbyPlayer[0].title}
              </div>
              </div>
            <div className="desc">
                {desRugbyPlayer[0].desc}
            </div>
          </div>
          <div><></></div>
          <div className='container-desc  margin-left-content'>
            <div className='wrapper-title-desc'>
              <div className="title-id">
                {desRugbyPlayer[1].id}
              </div>
              <div className="title-desc">
                {desRugbyPlayer[1].title}
              </div>
              </div>
            <div className="desc">
                {desRugbyPlayer[1].desc}
            </div>
          </div>
          <div className='rugby-bg-higthlight'><></></div>
          <div className='container-desc rugby-bg-higthlight'>
            <div className='wrapper-title-desc'>
              <div className="title-id rugby-box-shadow-higth-ligth">
                {desRugbyPlayer[2].id}
              </div>
              <div className="title-desc">
                {desRugbyPlayer[2].title}
              </div>
              </div>
            <div className="desc rugby-desc-higth-ligth">
                {desRugbyPlayer[2].desc}
            </div>
          </div>

        </div>
          </>}

        {/* basketball */}
          {isMobile ? <>
            <div className="container-basketball-player">
        <div className='titlePlayer'>
            {titlePlayer.basketball}
          </div>
          <div className='image-basketball'>
            <img src={basketballMobile} alt="basketballMobile"/>
          </div>
            <div className='container-desc'>
            <div className='wrapper-title-desc'>
              <div className="title-id">
                {descBasketballPlayer[2].id}
              </div>
              <div className="title-desc">
                {descBasketballPlayer[2].title}
              </div>
              </div>
            <div className="desc">
                {descBasketballPlayer[2].desc}
            </div>
          </div>
          <div className="swiper">
          <img src={paginationBasketBall} alt="paginationBasketBall" className='swiper-image'/>
          </div>
          </div>
          </>
         : 
         <>
        {/* // destop&tablet */}
        <div className="container-basketball-player">
          <div className='titlePlayer  margin-left-content'>
            {titlePlayer.basketball}
          </div>
          {isDesktop ? <img src={basketballDesktop} alt="basketballDesktop" className='image-basketball' /> :''}          
          {isTablet ? <img src={basketballTablet} alt="rugbyTablet" className='image-basketball' /> :''}          
         <div className='container-desc  margin-left-content'>
         <div className='wrapper-title-desc'>
           <div className="title-id ">
             {descBasketballPlayer[0].id}
           </div>
           <div className="title-desc">
             {descBasketballPlayer[0].title}
           </div>
           </div>
         <div className="desc">
             {descBasketballPlayer[0].desc}
         </div>
       </div>
       <div><></></div>
       <div className='container-desc  margin-left-content'>
         <div className='wrapper-title-desc'>
           <div className="title-id">
             {descBasketballPlayer[1].id}
           </div>
           <div className="title-desc">
             {descBasketballPlayer[1].title}
           </div>
           </div>
         <div className="desc">
             {descBasketballPlayer[1].desc}
         </div>
       </div>
       <div><></></div>
       <div className='container-desc basketball-bg-higthlight'>
         <div className='wrapper-title-desc'>
           <div className="title-id  basketball-box-shadow-higth-ligth">
             {descBasketballPlayer[2].id}
           </div>
           <div className="title-desc">
             {descBasketballPlayer[2].title}
           </div>
           </div>
         <div className="desc basketball-desc-higth-ligth ">
             {descBasketballPlayer[2].desc}
         </div>
       </div>
       <div className='basketball-bg-higthlight'><></></div>
       </div>
       </>}

        </div>
      </div>
    </div>
  );
}

export default App;
