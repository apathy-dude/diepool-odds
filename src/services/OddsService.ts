const globalCache: { [tn: number]: Odds[] } = {};

// Dice: Number of dice to roll
// TN: Target number where the die must be greater than or equal to
export function Roll(dice: number, tn: number): Odds {
    if (typeof(dice) !== 'number' || typeof(tn) !== 'number') return [];
    // Less than 1 die or all dice must be greater than 6 means only 0 successes possible
    else if (dice < 1 || tn > 6) return [1];
    // If TN is less than 2 then all dice will be a success
    else if (tn < 2) {
        const arr = new Array(dice + 1).fill(0);
        arr[dice] = 1;
        return arr;
    }

    const rollCache: Odds[] = globalCache[tn]
        ? globalCache[tn]
        : [ [1], [(tn - 1) / 6, (7 - tn) / 6] ];
    while (!rollCache[dice]) {
        const max = rollCache.length - 1;
        if (max * 2 <= dice) { // Double it to grow as quickly as possible
            rollCache[max * 2] = Add(rollCache[max], rollCache[max]);
        }
        else if (max > dice) {
            let start = dice - 1;
            while (!rollCache[start]) start--;

            let add = dice - start;
            while (!rollCache[add]) add--;

            rollCache[start + add] = Add(rollCache[start], rollCache[add]);
        }
        else { // Add max and next highest that will add together to be at or below target
            let idx = dice - max;
            while (!rollCache[idx]) idx--;

            rollCache[max + idx] = Add(rollCache[max], rollCache[idx]);
        }
    }

    if (!globalCache[tn] || globalCache[tn].length < rollCache.length) {
        globalCache[tn] = rollCache;
    }
    return rollCache[dice];
}

// Minuted: the starting amount of the subtraction
// Subtrahend: the amount being taken away from the original amount
// Difference: the result
export function Subtract(minuted: Odds, subtrahend: OddsMap | Odds): Odds {
    if (Array.isArray(subtrahend) && subtrahend.length < 2) return minuted;

    return (Array.isArray(subtrahend)
        ? minuted.map((o1: number) => subtrahend.map((o2: number) => o1 * o2))
        : minuted.map((o1: number, idx: number, arr: Odds) => subtrahend(o1, idx, arr).map((o2: number) => o1 * o2))
    )
        .reduce(subtractOdds, new Array(minuted.length).fill(0));
}

// Array multiplaction of [1, n] * [m, 1]
export function Add(odds1: Odds, odds2: Odds): Odds {
    if (odds1.length < 2) return odds2;
    else if (odds2.length < 2) return odds1;

    return odds1
        .map((o1: number) => odds2.map((o2: number) => o2 * o1))
        .reduce(addOdds, new Array(odds1.length + odds2.length - 1).fill(0));
}

export const SubtractTNPerIndex: (tn: number) => OddsMap = (tn: number) => (_: number, idx: number) => Roll(idx, tn);

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
