[lanyard.rest API](https://github.com/Phineas/lanyard/) for Spotify, Status etc.

## Getting Started
First, edit status.js in pages/api
```js
let link = "https://api.lanyard.rest/v1/users/your_discord_user_id_here"
export default async (req, res) => {
    let istek = await fetch(link, {
        
    })
    let veri = await istek.json()
    return res.json(veri)
}
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.
