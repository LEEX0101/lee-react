import "../styles/Watch.css"; 
// @ts-ignore
import BackgroundVideo from '../assets/powerSlap.mp4' 

function Watch() {

  return (
    <div className='watch'>
        <div className="overlay"></div>
        <video src={ BackgroundVideo } autoPlay loop muted />
        <div className="content" style={{color: 'white'}}>
            <h1>Power Slap 8</h1>
            <p>RumbleTV</p>
            <a href="https://rumble.com/c/powerslap/livestreams">
              <button>
              WATCH LIVE
              </button>
            </a>
   
        </div>
        </div>
  );
}

export default Watch;