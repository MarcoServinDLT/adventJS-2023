export function compile(code: string) {
  let pc = 0;
  let condition = true;
  let loop = 0;
  for(let head=0; head<code.length; head++){
    pc += +(code[head] === '+') & +(condition);
    pc -= +(code[head] === '-') & +(condition);
    pc += pc * (+(code[head] === '*') & +(condition));
    if(code[head] === '¿') condition = (pc > 0);
    if(code[head] === '?') condition = true;
    loop = [head, loop]
      [+(code[loop] === '%') & +(code[head]!== '%')];
    if(code[head] === '<') head = loop++;
  }
  return pc;
}
