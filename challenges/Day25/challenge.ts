export function travelDistance(map: string) {
  const cols = map.indexOf('\n');
  const locations = new Map();
  let distance = 0, index = 0;
  const kids = ['1','2','3','4','5','6','7','8','9'];
  for(const location of map){
    index -= +(location === '\n');
    locations.set(location, [~~(index/cols), (index%cols)]);
    index++
  }
  let santaPos = locations.get('S');
  for(const kid of kids){
    const kidHouse = [santaPos, locations.get(kid)]
    	[+(locations.has(kid))];
    distance += Math.abs(santaPos[0] - kidHouse[0]) + 
      Math.abs(santaPos[1] - kidHouse[1]);
    santaPos = kidHouse;
  }
  return distance;
}
