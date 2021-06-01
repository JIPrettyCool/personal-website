import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons'
import { } from "@fortawesome/free-regular-svg-icons"
import { faDiscord, faTwitter, faInstagram, faGithub, faSpotify, faReddit } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
/* import { useSound } from '../libs/usesound'; */
import { Spotify } from "../components/spotify"
export default function Home({ ü }) {

  function status() {
    switch (ü.data.discord_status) {
      case "online":
        return "spogreen"
        break;
      case "offline":
        return "[#626c77]"
        break;
      case "idle":
          return "[#faa61a]"
          break;
      case "dnd":
            return "[#ef4444]"
            break;      
    }
  }


 /*  const [play, pause, volumeUp, volumeDown] = useSound() */
  return (
    <div className="flex items-center justify-between min-h-screen from-[#739abb] to-[#80a0b6] bg-gradient-to-b w-full h-64">
      <title> 
      Meric - Open Source
      </title>
      <div className="flex items-stretch w-10/12 mx-auto">
      
        <div className="flex flex-col justify-between p-10 text-center bg-opacity-0 rounded-2xl md:w-3/12">
          <div>
          
            <img draggable="false" src={`https://cdn.discordapp.com/avatars/${ü.data.discord_user.id}/${ü.data.discord_user.avatar}.png`} className="h-40 mx-auto rounded-full"></img>
            <div className="relative">
            <h1 className="mt-3 text-2xl font-medium text-white">
              {ü.data.discord_user.username}
              
            </h1>
            <span className={`absolute bottom-0 right-0 p-2 align-bottom bg-${status()} border-2 rounded-full border-dcdarkgray `}></span>
            </div>
            <h1 className="text-xl text-white opacity-40 ">
              Meric
         </h1>
          </div>
          <div>
            <div id="icons" className="space-x-5 ">
              <Link href="https://discord.com/users/455384255774720011"><button className="text-3xl text-white"><FontAwesomeIcon icon={faDiscord} /></button></Link>
              <Link href="https://twitter.com/iamrealji"><button className="text-3xl text-white"><FontAwesomeIcon icon={faTwitter} /></button></Link>
              <Link href="https://github.com/JIPrettyCool"><button className="text-3xl text-white"><FontAwesomeIcon icon={faGithub} /></button></Link>
              <Link href="https://open.spotify.com/user/u9w9q28510i4ah0b38izr83q0?si=KOx8i4MNSkWWG1eMdRaqSw"><button className="text-3xl text-white"><FontAwesomeIcon icon={faSpotify} /></button></Link>
              <Link href="https://www.reddit.com/user/JIisPrettyCool"><button className="text-3xl text-white"><FontAwesomeIcon icon={faReddit} /></button></Link>
              <a href="https://app.hiven.io/@meric">
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-opacity-0 rounded-2xl md:w-10/12 text-white">
        <div className="flex items-center">
                        <div className="flex-shrink-0 ">

                        <a href={`https://open.spotify.com/track/${ü.data.spotify?.track_id}`}>
                            <img draggable="false" src={ü.data.spotify?.album_art_url} className="h-24 rounded-md"></img>
                            </a>
                            </div>
                            <p className="flex-grow ml-3 truncate">
                            <strong className="text-sm ">{ü.data.spotify?.song}</strong>
                            <div className="flex flex-row ">
                                <div className="flex flex-col text-sm truncate">
                                    <p className="truncate overflow-ellipsis">{ü.data.spotify?.artist}</p>
                                    
                                   

                                </div>
                                
                            </div>
                            </p>
                            </div>
                            
         {/*  <div id="buttons" className="space-x-3">
            <button title="Play" onClick={play} className="text-3xl text-white"><FontAwesomeIcon icon={faPlay} /></button>
            <button title="Pause" onClick={pause} className="text-3xl text-white"><FontAwesomeIcon icon={faPause} /></button>
            <button title="Volume Down" onClick={volumeDown} className="text-3xl text-white"><FontAwesomeIcon icon={faVolumeDown} /></button>
            <button title="Volume Up" onClick={volumeUp} className="text-3xl text-white"><FontAwesomeIcon icon={faVolumeUp} /></button>
          </div> */}
       
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps(ctx) {
  const ğ = await fetch("https://meric.vercel.app/api/status")


  const ü = await ğ.json()


  return {
      props: { ü }
  }
}
