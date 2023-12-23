export function maxDistance(movements: string) {
  let asterisc = 0, moves = 0;
  for(let move of movements){
    asterisc += +(move === '*');
    moves -= +(move === '<');
    moves += +(move === '>');
  }
  return Math.abs(moves) + asterisc;
}
