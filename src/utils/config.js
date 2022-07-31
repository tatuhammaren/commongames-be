require('dotenv').config()

const  STEAM_API_KEY  = process.env.STEAM_API_KEY;
const PORT = process.env.PORT  ||3001
module.exports = {STEAM_API_KEY, PORT}