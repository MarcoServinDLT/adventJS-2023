export function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter( (gift) => 
    new Set( [...materials, ...gift ] ).size === 
      materials.length
  );
}
