export function revealSabotage(store: string[][]) {
  const revealed = store;
  const [rows, cols] = [store.length, store[0].length];
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      const sabotages = +(store?.[i-1]?.[j-1] === '*') +
      +(store?.[i-1]?.[j] === '*') +
      +(store?.[i-1]?.[j+1] === '*') +
      +(store?.[i]?.[j-1] === '*') +
      +(store?.[i]?.[j+1] === '*') +
      +(store?.[i+1]?.[j-1] === '*') +
      +(store?.[i+1]?.[j] === '*') +
      +(store?.[i+1]?.[j+1] === '*');
      revealed[i][j] = [store[i][j], sabotages+'']
          [+(sabotages > 0) & +(store[i][j] !== '*')];
    }
  }
  return revealed;
}
