export function adjustLights(lights: string[]) {
  let red = 0, green = 0;
  let even = false;
  for(let light of lights){
    even = !even;
      red += +(even && light === '🟢') | +(!even && light === '🔴');
    green += +(even && light === '🔴') | +(!even && light === '🟢');
  }
  return Math.min(red, green);
}
