export default async function handler(request, res) {

    const park = [
        {
            "name": "Steel Vengeance",
            "imgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steel_Vengeance_Drop_View.jpg/250px-Steel_Vengeance_Drop_View.jpg",
            "top": "This is a roller coaster",
            "bottom": "It can be changed"
        },
        {
            "name": "Steel Vengeance",
            "imgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steel_Vengeance_Drop_View.jpg/250px-Steel_Vengeance_Drop_View.jpg",
            "top": "This is a roller coaster",
            "bottom": "It can be changed"
        },
        {
            "name": "Steel Vengeance",
            "imgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steel_Vengeance_Drop_View.jpg/250px-Steel_Vengeance_Drop_View.jpg",
            "top": "This is a roller coaster",
            "bottom": "It can be changed"
        },
        {
            "name": "Steel Vengeance",
            "imgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steel_Vengeance_Drop_View.jpg/250px-Steel_Vengeance_Drop_View.jpg",
            "top": "This is a roller coaster",
            "bottom": "It can be changed"
        },
        {
            "name": "Steel Vengeance",
            "imgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steel_Vengeance_Drop_View.jpg/250px-Steel_Vengeance_Drop_View.jpg",
            "top": "This is a roller coaster",
            "bottom": "It can be changed"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(park);
  }