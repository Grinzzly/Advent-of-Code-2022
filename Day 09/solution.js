const generateMotionSeries = (input, len = 2) => {
    const steps = input.split('\n').map(line => line.split(' '));
    const knots = new Array(len).fill(0).map(() => ({x: 0, y: 0}));
    const visited = new Set([`0,0`]);

    for (const [direction, count] of steps) {
        for (let i = 0; i < +count; i++) {
            switch (direction) {
                case 'R':
                    knots[0].x++;
                    break;
                case 'L':
                    knots[0].x--;
                    break;
                case 'D':
                    knots[0].y++;
                    break;
                case 'U':
                    knots[0].y--;
            }

            for (let j = 1; j < knots.length; j++) {
                const [H, T] = [knots[j - 1], knots[j]];

                if (Math.abs(H.x - T.x) === 2 || Math.abs(H.y - T.y) === 2) {
                    T.x = H.x === T.x ? T.x : H.x > T.x ? T.x + 1 : T.x - 1;
                    T.y = H.y === T.y ? T.y : H.y > T.y ? T.y + 1 : T.y - 1;
                }
            }

            visited.add(`${knots[len - 1].x},${knots[len - 1].y}`);
        }
    }

    return visited.size;
}

const generateMotionSeriesFor10 = (input) => {
    return generateMotionSeries(input, 10);
}
