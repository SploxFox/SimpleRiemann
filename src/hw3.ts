import { Graph2D } from "./graph";
import { derivative, leftRiemann } from "./math";
import { NumFn } from "./types";

let out: any = {}

// 8.1 # 23
{
    const graph = new Graph2D();

    const x1: NumFn = y => -(y ** 2) + 4;
    const y2: NumFn = x => (1/2 * x) - (1/2);
    const x2: NumFn = y => 2 * y + 1
    // y2 == x2


    graph.graphX(x1)
    graph.graphX(x2);

    graph.save('8.1 #23');

    out.p8_1_23 = {
        val: leftRiemann(-3, 1, 100, x1) - leftRiemann(-3, 1, 100, x2),
        unitsDegree: 2
    }
}

// 8.1 # 58
{
    const y1: NumFn = x => x ** 2;
    const y2: NumFn = x => Math.sin(x);

    new Graph2D(2, 2).graphY(y1).graphY(y2).save('8.1 #58');
    const endX = 0.887;
    const endY = 0.769;

    out.p8_1_58c = {
        val: leftRiemann(0, endX, 100, y2) - leftRiemann(0, endX, 100, y1),
        unitsDegree: 2
    }

    const x1: NumFn = y => Math.sqrt(y);
    const x2: NumFn = y => Math.asin(y);

    out.p8_1_58d = {
        val: leftRiemann(0, endY, 100, x1) - leftRiemann(0, endY, 100, x2),
        unitsDegree: 2
    }
}

// 8.2 # 9
{
    const y1: NumFn = x => 1/Math.cos(x)

    new Graph2D(2, 2)
        .graphParametric(-1, 1, t => t, t => y1(t))
        .graphParametric(-1, 1, t => t, t => 1, 'red')
        .graphParametric(1, 2, t => -1, t => t, 'red')
        .graphParametric(1, 2, t => 1, t => t, 'red')
        .save('8.2 #9');

    out.p8_2_9 = {
        val: Math.PI * leftRiemann(-1, 1, 100, x => y1(x) ** 2) - (Math.PI * 2),
        unitsDegree: 3
    }
}

// 8.2 # 62
{
    const y1: NumFn = x => x * Math.sqrt(Math.sin(x));

    new Graph2D(3, 3)
        .graphY(y1)
        .graphX(y => Math.PI / 2)
        .save('8.2 #62');

    out.p8_2_62 = {
        val: Math.PI * leftRiemann(0, Math.PI / 2, 1000, x => y1(x) ** 2),
        unitsDegree: 3
    }
}

// 8.3 # 39
{
    const y1: NumFn = x => 1/((x ** 2 + 1) ** 2);
    new Graph2D(2, 2)
        .graphY(y1)
        .graphX(y => -1)
        .graphX(y => 1)
        .save('8.3 #39')
        .save('curr');

    out.p8_3_39 = {
        val: 2 * Math.PI * leftRiemann(0, 1, 100, x => x * y1(x)),
        unitsDegree: 3
    }
}

// 8.4 # 5
{
    const y1: NumFn = x => Math.sqrt(x);
    const y2: NumFn = x => (1/8) * (x ** 2);
    const radius: NumFn = x => (y1(x) - y2(x))/2;
    const circleArea: NumFn = x => Math.PI * (radius(x) ** 2);
    const triangleArea: NumFn = x => (y1(x) - y2(x)) ** 2 / 2

    new Graph2D(5, 5)
        .graphY(y1)
        .graphY(y2)
        .save('8.4 #5');
    
    out.p8_4_5a = {
        val: leftRiemann(0, 4, 100, circleArea),
        unitsDegree: 3
    };

    out.p8_4_5b = {
        val: leftRiemann(0, 4, 100, triangleArea),
        unitsDegree: 3
    }
}

// 8.5 # 42
{
    const y1: NumFn = x => ((Math.E ** x) + (Math.E ** (-x))) / 2;

    new Graph2D(5, 5)
        .graphParametric(0, 2, x => x, y1)
        .save('8.5 #42');

    out.p8_5_42 = {
        val: leftRiemann(0, 2, 100, x => Math.sqrt(1 + (derivative(y1)(x) ** 2))),
        unitsDegree: 1
    }
}

console.log(out);