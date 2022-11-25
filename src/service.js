const { getUserGames, getUserData, getUserId } = require('./api.js');

async function getPlayersIds(urls) {
  const proms = await urls.map(async (user) => getUserId(user));

  const res = Promise.all(proms);
  return res;
}
async function getInfo(userIds) {
  const proms = await userIds.map(async (user) => getUserData(user));
  return Promise.all(proms);
}
async function getGames(userIds) {
  const proms = await userIds.map(async (user) => getUserGames(user));
  return Promise.all(proms);
}
async function getCommonGames(array) {
  const IdSets = array.map((a) => new Set(a.map((val) => val.appID)));
  const smallestArray = array
    .reduce((smallest, arr) => (smallest.length < arr.length ? smallest : arr));
  const intersection = smallestArray.filter((val) => IdSets
    .every((set) => set.has(val.appID)));

  return intersection;
}

async function getData(userUrls) {
  const userIds = await getPlayersIds(userUrls);
  const players = await getInfo(userIds);
  const games = await getGames(userIds);

  const commonGames = await getCommonGames(games/* , rest */);
  return { players, games: commonGames };
}

module.exports = getData;
