# CommonGames App

"Let's play something, what games we have in common?" I've been asked too many times. Probably it's fine to go through everyones steam profile and try to spot something in common, with co-op or multiplayer support. 

"Let's write an app for that", I thought. So that is what I did... atleast partially.

## Backend

Build with Node.js using [Fastify](https://www.fastify.io/) and [SteamAPI](https://www.npmjs.com/package/steamapi)-library.

## Setup

- Clone repo && cd repo
- run ``npm install`` 
- Get steam api key from [here](https://steamcommunity.com/dev)
- Set env variables, see ``env.example``
- Run ``npm start`` or ``npm run dev`` to run en dev mode
- Open ``localhost:{PORT}`` and use the app 


Note: backend repo includes build-folder for react-fe as whole app is (for now) hosted at heroku, see it's repo [here](https://github.com/tatuhammaren/)