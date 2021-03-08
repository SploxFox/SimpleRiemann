import { NumFn } from "./types";

export function leftRiemann(from: number, to: number, numberOfRectangles: number, fn: NumFn): number {
    const dt = (to - from) / numberOfRectangles;
        
    let sum = 0;
    for (let i = 0; i < numberOfRectangles; i++) {
        let t = i * dt + from;
        sum += fn(t) * dt;
    }
    return sum;
}

export function derivative(fn: NumFn): NumFn {
    const h = 0.1;
    return x => (fn(h + x) - fn(x)) / h;
}
