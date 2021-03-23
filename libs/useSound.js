import { useEffect, useState } from "react";

export function useSound(){
    const [audio, setAudio] = useState()
  useEffect(()=>{
    const ses = new Audio();
    ses.src = "sound.mp3";
    ses.autoplay = true;
    ses.loop = true;
    ses.volume = 0.1 
    ses.play();
    setAudio(ses)
  },[])
  const play=() => {
    audio.play();
  }
  
  const pause=() =>{
    audio.pause();
  }  
  const volumeUp=() =>{
    if (audio.volume + .1 > 1) return
    audio.volume = audio.volume += .1;
  }
  const volumeDown=() =>{
    if (audio.volume - .1 < 0) return
    audio.volume = audio.volume -= .1;
  }
  return [play, pause, volumeUp, volumeDown]
}