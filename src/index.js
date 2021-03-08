exports.min = function min (xs) {
    if (isNotValid(xs)) return 0;
    return xs.reduce((acc, x) => x < acc ? x : acc, Infinity);
}

exports.max = function max (xs) {
    if (isNotValid(xs)) return 0;
    return xs.reduce((acc, x) => x > acc ? x : acc, -Infinity);
}

exports.avg = function avg (xs) {
    if (isNotValid(xs)) return 0;
    return xs.reduce((acc, x) => acc + x, 0) / xs.length;
}

function isNotValid(xs) {
    return xs === undefined || !Array.isArray(xs) || xs.length === 0;
}
