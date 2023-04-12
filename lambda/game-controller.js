"use strict";

const {
  generateGamecode,
  players,
  gameCharacters,
  weapons,
  rooms,
} = require("./game-logic");

const gameCode = generateGamecode();

exports.handler = async function (event) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statuscode: 200,
    headers: { "content-type": "application/json" },
    body: {
      status: 200,
      gameCode,
      players: players(gameCode),
      gameCharacters: gameCharacters,
      weapons: weapons,
      rooms: rooms,
    },
  };
};
