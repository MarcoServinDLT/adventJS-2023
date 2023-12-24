export function findBalancedSegment(message: number[]) {
  let balance = 0, index = 1;
  let balanced = []
  const map = new Map([[0,0]]);
  for(const bit of message){
    balance += [-1, 1][bit];
    if(map.has(balance)){
      balanced = [[map.get(balance), index-1], balanced]
      	[
          +((balanced[1]-balanced[0]) >= 
          (index-1 - map.get(balance)))
        ];
    }else
      map.set(balance, index);
    index++
  }
  return balanced
} 
