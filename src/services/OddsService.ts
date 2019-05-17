// Dice: Number of dice to roll
// TN: Target number where the die must be greater than or equal to
export function Roll(dice: number, tn: number): number[] {
    if (typeof(dice) !== 'number' || typeof(tn) !== 'number') return [];
    // Less than 1 die or all dice must be greater than 6 means only 0 successes possible
    else if (dice < 1 || tn > 6) return [1];
    // If TN is less than 2 then all dice will be a success
    else if (tn < 2) {
        const arr = new Array(dice + 1).fill(0);
        arr[dice] = 1;
        return arr;
    }

    const rollCache: number[][] = [ [1], [(tn - 1) / 6, (7 - tn) / 6] ];
    while (!rollCache[dice]) {
        const max = rollCache.length - 1;
        if (max * 2 <= dice) { // Double it to grow as quickly as possible
            rollCache[max * 2] = Multiply(rollCache[max], rollCache[max]);
        }
        else { // Add max and next highest that will add together to be at or below target
            let idx = dice - max;
            while (!rollCache[idx]) idx--;

            rollCache[max + idx] = Multiply(rollCache[max], rollCache[idx]);
        }
    }

    return rollCache[dice];
}

export function SubtractMultiply(oddArray: number[], subArray: number[]): number[] {
    if (!subArray || subArray.length < 2) return oddArray;
    const initArray = new Array(oddArray.length).fill(0);

    return oddArray
        .map((o1: number) => subArray
            .map((o2: number) => o2 * o1))
        .reduce(subtractOdds, initArray);
}

export function SubtractSingleMultiplyPerIndexWithBonus(oddArray: number[], singleTn: number, bonusPool: number): number[] {
    if (singleTn > 6) return oddArray;
    const initArray = new Array(oddArray.length).fill(0);

    return oddArray
        .map((o1: number, idx: number) => Roll(idx + bonusPool, singleTn)
                .map((o2: number) => o1 * o2))
        .reduce(subtractOdds, initArray);
}

// Array multiplaction of [1, n] * [m, 1]
export function Multiply(odds1: number[], odds2: number[]): number[] {
    const initArray = new Array(odds1.length + odds2.length - 1).fill(0);
    return odds1
        .map((o1: number) => odds2.map((o2: number) => o2 * o1))
        .reduce(addOdds, initArray);
}

// Merge array [n, m] by putitng it into an array of n + m size
// by adding the value of a cell to x + y value of the target array
// e.g. [ [1,  2,  4],
//        [8, 16, 32] ] => [ 1, 2 + 8, 4 + 16, 32 ] => [ 1, 10, 20, 32 ]
function addOdds(odds: number[], d: number[], idx: number): number[] {
    d.forEach((o, i) => odds[idx + i] += o);
    return odds;
}

function subtractOdds(odds: number[], d: number[], x: number): number[] {
    d.forEach((o, y) => {
        const idx = x - y < 0 ? 0 : x - y;
        odds[idx] += o;
    });
    return odds;
}
