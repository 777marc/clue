const generateGamecode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 9;
  let randomStr = "";

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    randomStr += characters[randomNum];
  }
  console.log(randomStr);
  return randomStr;
};

/**
 * Standard Clue Characters
 */
const gameCharacters = [
  "Miss Scarlett",
  "Reverend Green",
  "Colonel Mustard",
  "Professor Plum",
  "Mrs. Peacock",
  "Mrs. White",
];

/**
 * Standard Clue Weapons
 */
const weapons = [
  "Candlestick",
  "Dagger",
  "Lead Pipe",
  "Revolver",
  "Rope",
  "Wrench",
];

/**
 * Standard Clue Rooms
 */
const rooms = [
  "kitchen",
  "dining room",
  "lounge",
  "ballroom",
  "hall",
  "conservatory",
  "billard room",
  "library",
  "study",
];
const players = (gameCode) => {
  if (gameCode) {
    return ["Marc", "Bob", "Jane"];
  }
  return [];
};

module.exports = {
  generateGamecode,
  gameCharacters,
  players,
  weapons,
  rooms,
};
