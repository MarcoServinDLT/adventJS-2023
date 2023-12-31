export function autonomousDrive(store: string[], movements: string[]) {
  const moveset = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1],
  };
  let row = 0, col = -1
  for(const line of store){
    const index = line.indexOf('!');
    row += [0, 1][+(index < 0) & +(col < 0)];
    col = Math.max(col, index);
  }
  store[row] = store[row].replace('!', '.');
  for(const move of movements){
    const [rowAdd, colAdd] = moveset[move];
    const currentPos = store[row +rowAdd]?.[col + colAdd];
    row += rowAdd * +(currentPos === '.');
    col += colAdd * +(currentPos === '.');
  }
  store[row] = store[row].substring(0, col) + '!' + 
    store[row].substring(col+1);
  return store
} 
