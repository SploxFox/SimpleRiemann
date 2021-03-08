import { leftRiemann } from "./math";
import { NumFn } from "./types";

export const numRect = 10_000;
export const int = (from: number, to: number, fn: NumFn) => leftRiemann(from, to, numRect, fn);
export const circleArea = (r: number) => Math.PI * (r ** 2)