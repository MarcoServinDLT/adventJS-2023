export function decode(message: string) {
  const stack = Array<string>();
  let decodedMessage = '';

  for(let letter of message){
    if(letter === '('){
      stack.push(decodedMessage);
      decodedMessage = '';
    }
    else if(letter === ')')
      decodedMessage = stack.pop() + 
        [...decodedMessage].reverse().join('')
    else
      decodedMessage += letter
  }

  return decodedMessage;
}


