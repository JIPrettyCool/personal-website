let link = "https://api.lanyard.rest/v1/users/455384255774720011"
export default async (req, res) => {
    let istek = await fetch(link, {
        
    })
    let veri = await istek.json()
    return res.json(veri)
}