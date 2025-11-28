function contract(fn, ...types) {
    const argTypes = types.slice(0, -1);
    const resultType = types[types.length - 1];

    return function(...args) {
        if (args.length !== argTypes.length) {
            throw new TypeError("Incorrect number of arguments");
        }

        for (let i = 0; i < argTypes.length; i++) {
            if (typeof args[i] !== typeof new argTypes[i]()) {
                throw new TypeError(`Argument ${i + 1} must be ${argTypes[i].name}`);
            }
        }

        const result = fn(...args);

        if (typeof result !== typeof new resultType()) {
            throw new TypeError(`Result must be ${resultType.name}`);
        }

        return result;
    };
}