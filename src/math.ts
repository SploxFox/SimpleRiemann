import { BiFn } from "./types";

export function leftRiemann(from: number, to: number, numberOfRectangles: number, fn: BiFn): number {
    const dt = (to - from) / numberOfRectangles;
        
    let sum = 0;
    for (let i = 0; i < numberOfRectangles; i++) {
        let t = i * dt + from;
        sum += fn(t) * dt;
    }
    return sum;
}