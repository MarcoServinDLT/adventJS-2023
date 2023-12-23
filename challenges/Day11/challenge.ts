export function getIndexsForPalindrome(word: string) {
  let l = Infinity, r = -Infinity;
  const m = Math.floor(word.length/2);
  let changes = 0;
  for( let i of Array.from({length: m}).keys() ){
    if(word.at(i) !== word.at(-i-1)){
      l = Math.min(l, i);
      r = Math.max(r, i);
      changes++;
    }
  }
  let indexes = [ [], null ][ +(changes > 0) ];
  r = [r, word.length - r -1][ +(word[l] === word[r]) ];
  if( +(l === (word.length - r - 1)) & word.length & 1 ){
    l = [l, m][ +(word[l] === word[m]) ];
    r = [r, m][ +(word[r] === word[m]) ];
  }
  const changesSatisfy = +(word.at(l) === word.at(-r-1)) + 
    +(word.at(r) === word.at(-l-1))
  return [ indexes, [l, r] ][ +(changesSatisfy === changes) ];
} 
