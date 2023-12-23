export function organizeGifts(gifts) {
  return gifts.replaceAll(/(\d+)([a-z])/g,
    (_,p1, p2) => {
      let gift = '';
      let quantity = parseInt(p1);
      gift += `[${p2}]`.repeat(quantity / 50);
    	quantity %= 50;
      gift += `{${p2}}`.repeat(quantity / 10);
    	quantity %= 10;
      return quantity ? gift + `(${p2.repeat(quantity)})`:
        gift;
    }
  );
}
