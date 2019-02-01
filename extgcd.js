module.exports = extgcd;

function extgcd(a, b) {
    if (a < b) {
        let tmp = extgcd(b, a);
        return {gcd: tmp.gcd, x: tmp.y, y: tmp.x};
    }

    if (b === 0) {
        return {gcd: a, x: 1,y: 0};
    }

    let r = a % b;
    let tmp = extgcd(b, r);

    return {gcd: tmp.gcd, x: tmp.y, y: (tmp.x-Math.floor(a/b)*tmp.y)};
}