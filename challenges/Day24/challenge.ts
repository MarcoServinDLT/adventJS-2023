export function getStaircasePaths(steps: number, maxJump: number) {
  const jumpCombinations = [];
  function combinations(stepsCom: number[], remain: number){
    if(!remain){
    	jumpCombinations.push(stepsCom);
      return;
    }
    for(let jump=1; jump<=maxJump; jump++){
      if((remain-jump) >= 0)
				combinations([...stepsCom, jump], remain-jump);
    }
  }
  combinations([], steps);
  return jumpCombinations;
}
