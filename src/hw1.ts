import { NumFn } from "./types";
import { circleArea, int } from "./util";

export const hw1Results = {
    8.1: {
        example6: (() => {
            const e6y1: NumFn = x => Math.sqrt(4 - 4 * x);
            const e6y2: NumFn = x => Math.sqrt(4 - x);
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
            const y1: NumFn = x => 2 / x;
            const y2: NumFn = x => 3 - x;
            const [from, to] = [1, 2];
            return int(from, to, x => circleArea(y2(x)) - circleArea(y1(x)));
        })(),

        example7: (() => {
            const [y1, y2]: NumFn[] = [x => 2 * x, x => x ** 2]
            const [from, to] = [0, 2];
            return int(from, to, x => circleArea(y1(x) + 5) - circleArea(y2(x) + 5));
        })(),

        problem39: (() => {
            return int(0, 2, x => Math.exp(x) + 1)
        })(),
    },
}