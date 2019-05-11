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

    const rollCache: number[][] = [ [1], [(7 - tn) / 6, (tn - 1) / 6] ];
    while (!rollCache[dice]) {
        const max = rollCache.length - 1;
        if (max * 2 <= dice) { // Double it to grow as quickly as possible
            rollCache[max * 2] = multiply(rollCache[max], rollCache[max]);
        }
        else { // Add max and next highest that will add together to be at or below target
            let idx = dice - max;
            while (!rollCache[idx]) idx--;

            rollCache[max + idx] = multiply(rollCache[max], rollCache[idx]);
        }
    }

    return rollCache[dice];
}

// Array multiplaction of [1, n] * [m, 1]
function multiply(odds1: number[], odds2: number[]) {
    return odds1
        .map((o1: number) => odds2.map((o2: number) => o2 * o1))
        .reduce(addOdds, []);
}

// Merge array [n, m] by putitng it into an array of n + m size
// by adding the value of a cell to x + y value of the target array
// e.g. [ [1,  2,  4],
//        [8, 16, 32] ] => [ 1, 2 + 8, 4 + 16, 32 ] => [ 1, 10, 20, 32 ]
function addOdds(odds: number[], d: number[], idx: number) {
    d.forEach((o, i) => {
        odds[idx + i] = odds[idx + i] || 0;
        odds[idx + i] += o;
    });
    return odds;
}