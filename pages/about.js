import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../public/devbadge.svg"
import "../public/hypesquadbadge.svg"
import "../public/x.svg"
export default function about({ ü }) {

    function dcstatus() {
        switch (ü.data.discord_status) {
          case "online":
            return "bg-white"
            break;
          case "offline":
            return "bg-[#626c77]"
            break;
          case "idle":
              return "bg-[#faa61a]"
              break;
          case "dnd":
                return "bg-[#ef4444]"
                break;      
        }
      }

    return (
        <div className="flex items-center min-h-screen bg-black ">
            <div className="flex flex-col mx-auto text-white border border-none rounded-lg 2xl:w-4/12 bg-spogreen">
                <div className="flex flex-row p-4">
                    <div className="relative ">
                        <span className={`absolute bottom-0 right-0 p-2 align-bottom ${dcstatus()} border-4 rounded-full border-spogreen`}></span>
                        <img draggable="false" src={`https://cdn.discordapp.com/avatars/${ü.data.discord_user?.id}/${ü.data.discord_user?.avatar}.png`} className="h-20 mx-auto rounded-full"></img>
                    </div>
                    <div className="m-4">
                        <strong>{ü.data.discord_user?.username}</strong>
                        <a className="opacity-40">#{ü.data.discord_user.discriminator}</a>
                        <div className="flex flex-row mt-1 space-x-1">
                            <img src="./hypesquadbadge.svg" className="h-6" />
                            <img src="./devbadge.svg" className="h-6" />
                        </div>
                    </div>

                </div>
                {/* <div className="flex flex-col justify-between w-full text-white border border-dcdarkblue bg-dcdarkblue">
                    <div className="flex flex-row p-4">
                        <div className="relative ">
                            
                            <p className="mb-2 text-xs font-extrabold">BİR OYUN OYNUYOR</p>
                            <img draggable="false" src="https://cdn.discordapp.com/app-assets/383226320970055681/808841241142755358.png" className="h-24 rounded-md"></img>
                        </div>
                        <p className="m-5">
                            <strong>Visual Studio Code</strong>
                            <div className="text-sm ">
                            <p>Editing about.js</p>
                            <p>Workspace: new merloss.codes</p>
                            <p>10.44 Geçti</p>
                            </div>
                        </p>
                    </div>
                </div> */}
                <div className="w-full p-4 text-white border border-spodarkgreen bg-spodarkgreen">
                    <p className="mb-2 text-xs font-extrabold">SPOTİFY DİNLİYOR</p>
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink-0 ">


                            <img draggable="false" src={ü.data.spotify?.album_art_url} className="h-24 rounded-md"></img>
                        </div>
                        <p className="flex-grow ml-3 truncate">
                            <strong className="text-sm ">{ü.data.spotify?.song}</strong>
                            <div className="flex flex-row ">
                                <div className="flex flex-col text-sm truncate">
                                    <p className="truncate overflow-ellipsis">{ü.data.spotify?.artist} tarafından</p>
                                    <p className="truncate overflow-ellipsis">{ü.data.spotify?.album} albümünde</p>
                                    <div className="w-full h-1 mt-2 bg-black rounded-full opacity-10"></div>
                                   
                                    <div className="flex flex-row justify-between">

                                        <p>2.32</p>

                                        <p>3.49</p>
                                    </div>
                                </div>

                            </div>
                        </p>
                        <button className="flex-shrink-0 h-8 px-2 m-5 text-sm truncate border border-white rounded-sm w-52 focus:opacity-50 focus:outline-none" onClick={e => {
                            e.preventDefault(); window.open(
                                `https://open.spotify.com/track/${ü.data.spotify?.track_id}`,
                                "_blank"
                            )

                        }}><FontAwesomeIcon size="lg" icon={faSpotify} /> Spotify üzerinde oynat</button>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full text-white border rounded-b-md border-dcgray bg-dcgray">
                    <div className="flex flex-col p-4">
                        <p className="opacity-50 ">
                            Not
                        </p>
                        <input type="text" placeholder="Not eklemek için tıkla" className="h-10 placeholder-gray-500 rounded-sm bg-dcgray focus:bg-dcdarkgray focus:outline-none"></input>
                        <div className="mt-8 mb-5 border-t border-gray-500 border-opacity-20" />
                        <div className="flex flex-wrap gap-y-5 gap-x-8">
                            <div className="flex flex-row justify-between w-64 h-12 border border-white rounded-sm border-opacity-5"><div className="flex items-center"><img src="./github.png" className="h-8 m-2" /><p className="text-white text-opacity-90">JIPrettyCool</p></div><FontAwesomeIcon className="m-3 opacity-50" icon={faExternalLinkAlt} /></div>
                            <div className="flex flex-row justify-between w-64 h-12 border border-white rounded-sm border-opacity-5"><div className="flex items-center"><img src="./reddit.png" className="h-8 m-2" /><p className="text-white text-opacity-90">JIisPrettyCool</p></div><FontAwesomeIcon className="m-3 opacity-50" icon={faExternalLinkAlt} /></div>
                            <div className="flex flex-row justify-between w-64 h-12 border border-white rounded-sm border-opacity-5"><div className="flex items-center"><img src="./twitter.png" className="h-8 m-2" /><p className="text-white text-opacity-90">iamrealji</p></div><FontAwesomeIcon className="m-3 opacity-50" icon={faExternalLinkAlt} /></div>
                        </div>
                    </div>
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
