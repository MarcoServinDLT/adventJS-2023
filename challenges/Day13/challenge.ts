export function calculateTime(deliveries) {
  let totalTime = -(3600 * 7);
  for(let delivery of deliveries) {
    const [h, m, s] = delivery.split(':')
    totalTime += (3600 * (+h) + 60 * (+m) + (+s));
  }
  const sing = totalTime < 0;
  totalTime = [totalTime, -totalTime][+sing]
  const stamp =`-${(~~(totalTime/3600)+'').padStart(2, '0')}:` +
    `${(~~( (totalTime % 3600) / 60)+'').padStart(2, '0') }:` +
    `${ ((totalTime % 60)+'').padStart(2, '0') }`;
  return stamp.substring( +(!sing) );
}
