import './App.css';
import rugbyMobile from './asset/image/mobile/rugby.png'
import basketballMobile from './asset/image/mobile/basketball.png'
import paginationBasketBall from './asset/image/mobile/pagination-basketbal.png'
import paginationRugby from './asset/image/mobile/pagination-rugby.png'

function App() {
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
        <div className="container-rugby-player">
          {/* titlePlayer */}
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

        {/* basketball */}
        <div className="container-basketball-player">
        <div className='titlePlayer'>
            {titlePlayer.basketball}
          </div>
          <div className='image-basketball'>
            <img src={basketballMobile} alt="basketballMobile" />
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

        </div>
      </div>
    </div>
  );
}

export default App;
