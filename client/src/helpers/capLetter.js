export function onlyCapitalLetters(cap){
  return  cap.match(/[A-Z]/g, "").join(''); // join the array to return a string
}