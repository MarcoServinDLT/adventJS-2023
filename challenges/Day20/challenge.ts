export function distributeGifts(weights: number[][]) {
  const distributed = [];
  const [rows, cols] = [weights.length, weights[0].length];
  for(let row=0; row<rows; row++){
    distributed.push([]);
    for(let col=0; col<cols; col++){
      const gifts = +(weights[row-1]?.[col] != null ) + 
        +(weights[row]?.[col-1] != null) +
        +(weights[row][col] != null) + 
        +(weights[row]?.[col+1] != null) +
        +(weights[row+1]?.[col] != null);
      const weight = ~~(weights[row-1]?.[col]) +
        ~~(weights[row]?.[col-1]) +
        (weights[row][col]) +
        ~~(weights[row]?.[col+1]) +
        ~~(weights[row+1]?.[col]);
      distributed[row].push( ~~Math.round(weight/gifts) );
    }
  }
  return distributed;
}
