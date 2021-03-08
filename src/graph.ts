import { Canvas, createCanvas } from "canvas";
import { NumFn } from "./types";
import path from 'path';

const autocolors = [
    'blue', 'red', 'green'
]


export class Graph2D {
    canvas = createCanvas(600, 600);
    ctx = this.canvas.getContext('2d')!

    constructor(public boundX = 10, public boundY = 10) {

        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.scale(this.canvas.width / (boundX * 2), -this.canvas.height / (boundY * 2));
        this.ctx.lineWidth = 0.05;
        

        for (let i = 0; i <= boundX * 2; i++) {
            let x = i - boundX;
            this.ctx.beginPath();
            this.ctx.moveTo(x, -0.5);
            this.ctx.lineTo(x, 0.5);
            this.ctx.stroke();
        }

        for (let i = 0; i <= boundY * 2; i++) {
            let y = i - boundY;
            this.ctx.beginPath();
            this.ctx.moveTo(-0.5, y);
            this.ctx.lineTo(0.5,  y);
            this.ctx.stroke();
        }

        this.ctx.beginPath();
        this.ctx.moveTo(0, -boundY);
        this.ctx.lineTo(0,  boundY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(-boundX, 0);
        this.ctx.lineTo( boundX, 0);
        this.ctx.stroke();
    }

    save(name: string) {
        const fs = require('fs')
        const out = fs.createWriteStream(path.join(__dirname, `./../out/${name}.png`))
        const stream = this.canvas.createPNGStream()
        stream.pipe(out);

        return this;
    }

    graphX(fn: NumFn, color = this.getAutocolor()) {
        this.graphParametric(-this.boundY, this.boundY, fn, y => y, color);

        return this;
    }

    graphY(fn: NumFn, color = this.getAutocolor()) {
        this.graphParametric(-this.boundX, this.boundX, x => x, fn, color);

        return this;
    }

    graphParametric(from: number, to: number, xfn: NumFn, yfn: NumFn, color = this.getAutocolor()) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        let first = true;
        const max = 1000;
        for (let i = 0; i < max; i++) {
            const t = (i / 1000) * (to - from) + from;
            const x = xfn(t);
            const y = yfn(t);

            if (first) {
                this.ctx.moveTo(x, y);
                first = false;
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();

        return this;
    }

    autoColor = 0;
    getAutocolor() {
        return autocolors[(this.autoColor++) % autocolors.length]
    }
}