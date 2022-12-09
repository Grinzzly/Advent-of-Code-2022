const pairCratesWithInstructions = (rawCratesData) => {
    const crates = new Array(10).fill(0).map(() => []);
    let [map, instructions] = rawCratesData.split('\n\n');

    map = map.split('\n').map(line => line.replace(/[[\]\d]/g, ' '));

    for (const line of map) {
        for (let i = 0; i < line.length; i++) {
            if (line[i] !== ' ') {
                crates[(i - 1) / 4].unshift(line[i]);
            }
        }
    }

    instructions = instructions.split('\n').map(line => {
        const [_tmp, count, from, to] = line.match(/^move (\d+) from (\d+) to (\d+)$/);

        return {
            count: +count,
            from: from - 1,
            to: to - 1
        };
    });

    return {crates, instructions};
}

const unloadShip = (rawCratesData, shouldMoveSinglesOnly = true) => {
    const {crates, instructions} = pairCratesWithInstructions(rawCratesData);

    for (const {count, from, to} of instructions) {
        const removed = crates[from].splice(crates[from].length - count);

        if (shouldMoveSinglesOnly) {
            removed.reverse();
        }

        crates[to].push(...removed);
    }

    return crates.map(x => x.pop()).join('');
}

const unloadShipWithMult = (rawCratesData) => {
    return unloadShip(rawCratesData, false);
}
