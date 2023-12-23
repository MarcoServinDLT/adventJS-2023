export function findNaughtyStep(original: string, modified: string): string {
  const steps = [...original, ...modified].sort();
  return steps.filter( (step) => 
    (steps.lastIndexOf(step) % 2) === 0
  )[0] ?? '';
}
