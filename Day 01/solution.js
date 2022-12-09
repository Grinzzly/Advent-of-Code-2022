export const countCalories = (calories, top = 1) => {
    const elves = calories
        .split('\n\n')
        .map(calorie =>
            calorie
                .split('\n')
                .map(calorie => +calorie)
                .reduce((a, b) => a + b),
        )
        .sort((a, b) => b - a);

    return elves.slice(0, top).reduce((a, b) => a + b);
}

export const countTopThreeCalories = (calories) => {
    return countCalories(calories, 3);
}
