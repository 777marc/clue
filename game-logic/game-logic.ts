export const generateGamecode = (): string => {
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
export const gameCharacters: string[] = [
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
export const weapons: string[] = [
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
export const rooms: string[] = [
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

export const players = (gameCode: string): string[] => {
  if (gameCode) {
    return ["Marc", "Bob", "Jane"];
  }
  return [];
};
