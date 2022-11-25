const SteamAPI = require('steamapi');
const config = require('./utils/config.js');

const steam = new SteamAPI(config.STEAM_API_KEY);

async function getUserId(url) {
  const id = await steam.resolve(url).then(((res) => res));
  return id;
}

async function getUserGames(id) {
  const data = await steam.getUserOwnedGames(id).then(
    (res) => res,
  );
  const games = data.map((g) => ({
    name: g.name, appID: g.appID, iconURL: g.iconURL, logoURL: g.logoURL,
  }));
  return games;
/*   return data; */
}
async function getUserData(id) {
  const data = await steam.getUserSummary(id);
  return data;
}

module.exports = { getUserId, getUserGames, getUserData };
