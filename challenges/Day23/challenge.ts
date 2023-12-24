export function organizeChristmasDinner(dishes: string[][]) {
  const ingredientGroups = new Map();
  const dishesByIngredients = [];
  for(const [dish, ...ingredients] of dishes){
    for(const ingredient of ingredients){
      if(ingredientGroups.has(ingredient)) 
        ingredientGroups.get(ingredient).push(dish);
      else 
        ingredientGroups.set(ingredient, [dish]);
    }
  }
  for(const [ingredient, dish] of ingredientGroups)
    {
    dishesByIngredients.push([ingredient, ...dish.sort()]);
  }
  dishesByIngredients.sort( (a, b) => 
		[1, -1][+(a[0] < b[0])] 
	);
  return dishesByIngredients.filter( 
    (recipe) => recipe.length > 2 
  );
}
