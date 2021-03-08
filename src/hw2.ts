import { leftRiemann } from "./math";
import { NumFn } from "./types"

const g: NumFn = γ => Math.sqrt(25 - ((Math.sqrt(21) + γ) ** 2));

// Volume of one cap
const va = leftRiemann(0, 5 - Math.sqrt(21), 100, j => Math.PI * (g(j) ** 2))

// Volume of the cylinder
const vy = Math.PI * 8 * Math.sqrt(21);

// Volume of the bore
const v = (vy + 2 * va);

export const hw2Results = v;