export function cyberReindeer(road: string, time: number) {
  let r = road
  const roadOverTime = [road]
  road = road.replace('S', '.')
  let pos = 0

  while((time--)-1) {
    if(roadOverTime.length == 5){
      r = r.replaceAll('|', '*')
      road = road.replaceAll('|', '*');
    }
    pos -= +(r[pos+1] === '|');
    r = r.replace(/S[\.\*]/g, `${road[pos++]}S`);
    roadOverTime.push(r);
  }

  return roadOverTime;
}
