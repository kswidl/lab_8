function store(value) {
    return function() {
        return value;
    };
}