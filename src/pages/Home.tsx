import "../styles/Watch.css"; 
// @ts-ignore
import BackgroundVideo from '../assets/powerSlap.mp4' 

function Watch() {

  return (
    <div className='watch'>
        <div className="overlay"></div>
        <video src={ BackgroundVideo } autoPlay loop muted />
        <div className="content" style={{color: 'white', display: 'flex', flexDirection: 'row', marginTop: '100px'}}>
            <a href="https://rumble.com/c/powerslap/livestreams">
              <button>
              WATCH LIVE
              </button>
            </a>
            <a href="https://www.axs.com/">
              <button>
              BUY TICKETS
              </button>
            </a>
        </div>
        </div>
  );
}

export default Watch;
