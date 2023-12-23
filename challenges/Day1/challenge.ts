export function findFirstRepeated(gifts: Array<number>): number {
    const foundGifts = new Set();
    
    for(let gift of gifts){
        if(foundGifts.has(gift)) return gift;
        foundGifts.add(gift)
    }

    return -1;
}
