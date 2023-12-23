export function createChristmasTree(ornaments: string, height: number) {
  let tree = ''
  let ornament = 0;
  for(let i=1; i<=height; i++){
    let level = ' '.repeat(height - i)
    for(let j=0; j<i; j++) {
      level +=  ornaments[ ornament++ % ornaments.length ] +
        `${j < i-1 ? ' ' : '\n'}`;
    }
    tree += level;
  }
  return tree + `${' '.repeat(height-1)}|\n`
}
