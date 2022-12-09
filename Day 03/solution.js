const toNumber = (str) => {
    const isLower = str.toLowerCase() === c;

    if (isLower) {
        return str.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    return str.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
}

const reorganizeRucksack = (set) => {
    const sacks = set.split('\n').map(x => x.split('').map(toNumber));

    const sortedSet = sacks.map(sack => {
        const leftShoulder = sack.slice(0, sack.length / 2);
        const rightShoulder = sack.slice(sack.length / 2, sack.length);

        return leftShoulder.find(x => rightShoulder.includes(x));
    });

    return sortedSet.reduce((a, b) => a + b);
}

const groupRucksack = (set) => {
    const sacks = set.split('\n').map(x => x.split('').map(toNumber));
    let sum = 0;

    while (sacks.length) {
        const groupA = sacks.shift();
        const groupB = sacks.shift();
        const groupC = sacks.shift();

        sum += groupA.find(x => groupB.includes(x) && groupC.includes(x));
    }

    return sum;
}
