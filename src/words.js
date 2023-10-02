
const wordsList = [
    "BENT",
    "LEGEND",
    "HOME",
    "SHARK",
    "FEATURE",
    "UPDATE",
    "FIG",
    "FISH",
    "WEST",
    "TRAIN"
];
//Floor ensures the number is rounded and the random number is chosen from the random index chosen
//Length ensures the index of the random number is within the array 
function randomWord() {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
}
  
export { randomWord };