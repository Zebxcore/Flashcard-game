
//Got it from https://stackoverflow.com/a/4550514
export function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}

export function addScore(items: number): number {
    return items + 1;
}

export function removeScore(items: number): number {
    if(items === 0){
        return 0;
    }
    else{
        return items - 1;
    }
}