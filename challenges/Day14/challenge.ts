export function maxGifts(houses: number[]) {
  let twoDoors = 0, nextDoor = 0;
  for(const house of houses){
    [twoDoors, nextDoor] = 
      [nextDoor, Math.max(nextDoor, twoDoors+house)];
  }
  return nextDoor;
}
