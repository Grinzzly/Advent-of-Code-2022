const tuneTrouble = (dataStream, len = 4) => {
    for (let i = 0; i < dataStream.length; i++) {
        const slice = dataStream.slice(i, i + len);

        if (new Set(slice.split('')).size === len) {
            return i + len;
        }
    }
}

const tuneMessages = (dataStream) => {
    return tuneMessages(dataStream, 14);
}
