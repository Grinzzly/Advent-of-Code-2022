export const getTotalScore = (input, getShape = (e, x) => x) => {
    const turns = input.split('\n').map(x => x.split(' '));
    const value = {A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3};
    let score = 0;

    turns.forEach(([a, b]) => {
        const shapeA = value[a];
        const shapeB = getShape(shapeA, value[b]);

        if (shapeB - shapeA === 1 || shapeB - shapeA === -2) {
            score += 6;
        } else if (shapeA === shapeB) {
            score += 3;
        }

        score += shapeB;
    });

    return score;
}

export const getTournamentOutcome = (input) => {
    return getTotalScore(input, (elf, outcome) => {
        switch (outcome) {
            case 1:
                return elf - 1 === 0 ? 3 : elf - 1;
            case 2:
                return elf;
            case 3:
            default:
                return elf + 1 === 4 ? 1 : elf + 1;
        }
    });
}
