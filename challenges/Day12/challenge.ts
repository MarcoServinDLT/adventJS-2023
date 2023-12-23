export function checkIsValidCopy(original: string, copy: string) {
  let valid = true;
  let index = 0;
  const rules = {
    '#': '#+:. ',
    '+': '+:. ',
    ':': ':. ',
    '.': '. ',
    ' ': ' '
  }
  for(const letter of original) {
    valid = valid && [
      letter === copy[index],
      (rules[letter] ?? `${letter + letter.toLowerCase()}#+:. `)
        .includes(copy[index])
    ] [ +(/[a-z\#\+\:\. ]/i.test(letter)) ]
    index++;
  }
  return valid;
}
