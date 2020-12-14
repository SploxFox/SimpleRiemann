import { leftRiemann } from "./math"
import { BiFn } from "./types";

const numRect = 10_000;
const int = (from: number, to: number, fn: BiFn) => leftRiemann(from, to, numRect, fn);
const circleArea = (r: number) => Math.PI * (r ** 2)

const results = {
    8.1: {
        example6: (() => {
            const e6y1: BiFn = x => Math.sqrt(4 - 4 * x);
            const e6y2: BiFn = x => Math.sqrt(4 - x);
            const e6A1 = int(0, 1, e6y2) - int(0, 1, e6y1);
            const e6A2 = int(1, 4, e6y2);
            return e6A1 + e6A2;
        })(),
        
        problem49: (() => {
            const [from, to] = [- Math.PI / 4, Math.PI / 4];
            return int(from, to, x => Math.cos(x) ** 2) - int(from, to, x => Math.sin(x) ** 2);
        })(),
    },

    8.2: {
        example2: (() => {
            const [from, to] = [-1, 2];
            return int(from, to, x => circleArea(x ** 3))
        })(),

        example5: (() => {
            const y1: BiFn = x => 2 / x;
            const y2: BiFn = x => 3 - x;
            const [from, to] = [1, 2];
            return int(from, to, x => circleArea(y2(x)) - circleArea(y1(x)));
        })(),

        example7: (() => {
            const [y1, y2]: BiFn[] = [x => 2 * x, x => x ** 2]
            const [from, to] = [0, 2];
            return int(from, to, x => circleArea(y1(x) + 5) - circleArea(y2(x) + 5));
        })(),

        problem39: (() => {
            return int(0, 2, x => Math.exp(x) + 1)
        })(),
    },
}

console.log(results);