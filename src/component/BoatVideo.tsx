// @ts-ignore  
import photo from "./../assets/boat-video.mp4"

function BoatVideo() {
    return (
        
      <video
      src={photo}
      width='100%'
      height='100%'
      autoPlay
       muted
       loop
        />
 
    );
  }
  
  export default BoatVideo;