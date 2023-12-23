export function drawClock(time: string) {
  const numbers = {
    '0': ['***','* *','* *','* *','* *','* *','***'],
    '1': ['  *','  *','  *','  *','  *','  *','  *'],
    '2': ['***','  *','  *','***','*  ','*  ','***'],
    '3': ['***','  *','  *','***','  *','  *','***'],
    '4': ['* *','* *','* *','***','  *','  *','  *'],
    '5': ['***','*  ','*  ','***','  *','  *','***'],
    '6': ['***','*  ','*  ','***','* *','* *','***'],
    '7': ['***','  *','  *','  *','  *','  *','  *'],
    '8': ['***','* *','* *','***','* *','* *','***'],
    '9': ['***','* *','* *','***','  *','  *','***']
  };
  const display = [];
  for(let i=0; i<7; i++)
    display.push([...
      numbers[ time[0] ][i] + ' ' +
      numbers[ time[1] ][i] + ' ' +
      [' ', '*'][+(i == 2) | +(i == 4)] + ' ' +
      numbers[ time[3] ][i] + ' ' +
      numbers[ time[4] ][i]
    ])
  return display
} 