
export function Spotify({ ü }) {
  return (

    <div className="flex flex-col items-center text-white divide-y w-60">
      <div className="text-center">
        <img src={ü.data.spotify.album_art_url} className="h-56 "></img>
        <div className="">_____SONG_DURATION_____</div>
      </div>
      <div id="details" className="mb-5 space-y-4 break-words divide-y ">

        <p>{ü.data.spotify.song}</p>
        <p>{ü.data.spotify.artist}</p>

      </div>
    </div>

  )
}

export async function getServerSideProps(ctx) {
  const ğ = await fetch("http://localhost:3000/api/status")


  const ü = await ğ.json()


  return {
      props: { ü }
  }
}
