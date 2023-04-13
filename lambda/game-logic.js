"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.players = exports.rooms = exports.weapons = exports.gameCharacters = exports.generateGamecode = void 0;
const generateGamecode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 9;
    let randomStr = "";
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        randomStr += characters[randomNum];
    }
    console.log(randomStr);
    return randomStr;
};
exports.generateGamecode = generateGamecode;
/**
 * Standard Clue Characters
 */
exports.gameCharacters = [
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
exports.weapons = [
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
exports.rooms = [
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
exports.players = players;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1sb2dpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUtbG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxnQkFBZ0IsR0FBRyxHQUFXLEVBQUU7SUFDM0MsTUFBTSxVQUFVLEdBQ2QsZ0VBQWdFLENBQUM7SUFDbkUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxTQUFTLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFaVyxRQUFBLGdCQUFnQixvQkFZM0I7QUFFRjs7R0FFRztBQUNVLFFBQUEsY0FBYyxHQUFhO0lBQ3RDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtDQUNiLENBQUM7QUFFRjs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFhO0lBQy9CLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtDQUNULENBQUM7QUFFRjs7R0FFRztBQUNVLFFBQUEsS0FBSyxHQUFhO0lBQzdCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sY0FBYztJQUNkLGNBQWM7SUFDZCxTQUFTO0lBQ1QsT0FBTztDQUNSLENBQUM7QUFFSyxNQUFNLE9BQU8sR0FBRyxDQUFDLFFBQWdCLEVBQVksRUFBRTtJQUNwRCxJQUFJLFFBQVEsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFMVyxRQUFBLE9BQU8sV0FLbEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2VuZXJhdGVHYW1lY29kZSA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjaGFyYWN0ZXJzID1cbiAgICBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gIGNvbnN0IGxlbmd0aCA9IDk7XG4gIGxldCByYW5kb21TdHIgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgcmFuZG9tU3RyICs9IGNoYXJhY3RlcnNbcmFuZG9tTnVtXTtcbiAgfVxuICBjb25zb2xlLmxvZyhyYW5kb21TdHIpO1xuICByZXR1cm4gcmFuZG9tU3RyO1xufTtcblxuLyoqXG4gKiBTdGFuZGFyZCBDbHVlIENoYXJhY3RlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdhbWVDaGFyYWN0ZXJzOiBzdHJpbmdbXSA9IFtcbiAgXCJNaXNzIFNjYXJsZXR0XCIsXG4gIFwiUmV2ZXJlbmQgR3JlZW5cIixcbiAgXCJDb2xvbmVsIE11c3RhcmRcIixcbiAgXCJQcm9mZXNzb3IgUGx1bVwiLFxuICBcIk1ycy4gUGVhY29ja1wiLFxuICBcIk1ycy4gV2hpdGVcIixcbl07XG5cbi8qKlxuICogU3RhbmRhcmQgQ2x1ZSBXZWFwb25zXG4gKi9cbmV4cG9ydCBjb25zdCB3ZWFwb25zOiBzdHJpbmdbXSA9IFtcbiAgXCJDYW5kbGVzdGlja1wiLFxuICBcIkRhZ2dlclwiLFxuICBcIkxlYWQgUGlwZVwiLFxuICBcIlJldm9sdmVyXCIsXG4gIFwiUm9wZVwiLFxuICBcIldyZW5jaFwiLFxuXTtcblxuLyoqXG4gKiBTdGFuZGFyZCBDbHVlIFJvb21zXG4gKi9cbmV4cG9ydCBjb25zdCByb29tczogc3RyaW5nW10gPSBbXG4gIFwia2l0Y2hlblwiLFxuICBcImRpbmluZyByb29tXCIsXG4gIFwibG91bmdlXCIsXG4gIFwiYmFsbHJvb21cIixcbiAgXCJoYWxsXCIsXG4gIFwiY29uc2VydmF0b3J5XCIsXG4gIFwiYmlsbGFyZCByb29tXCIsXG4gIFwibGlicmFyeVwiLFxuICBcInN0dWR5XCIsXG5dO1xuXG5leHBvcnQgY29uc3QgcGxheWVycyA9IChnYW1lQ29kZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBpZiAoZ2FtZUNvZGUpIHtcbiAgICByZXR1cm4gW1wiTWFyY1wiLCBcIkJvYlwiLCBcIkphbmVcIl07XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcbiJdfQ==