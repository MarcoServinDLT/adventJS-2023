export function drawGift(size: number, symbol: string) {
  let lines = [`${' '.repeat(size-1) + '#'.repeat(size)}\n`];
  for(let i=1; i<size; i++)
    	lines.push(
        (' ').repeat(size - i - 1)+
        `#${(i == (size-1) ? '#' : symbol).repeat(size-2)}#` +
        `${symbol.repeat(i-1)}#\n`
      )
  const front = lines.slice(0,-1).reverse()
  return lines.join('') + 
    front.map( line => line.trimStart()).join('')
}
 
