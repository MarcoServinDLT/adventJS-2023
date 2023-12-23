export function findBalancedSegment(message: number[]) {
  let balance = 0;
  let balanced = []
  const map = {0:0};
  let index = 1;
  for(const bit of message){
    balance += [-1, 1][bit];
    if(map[balance] != null){
      balanced = [[map[balance], index-1], balanced]
      	[+((balanced[1]-balanced[0]) >= 
        (index-1 - map[balance]))];
    }else
      map[balance] = index
    index++
  }
  return balanced
}
