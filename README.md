# extgcd
Compute the gcd and solve [Bezout's identity](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity) using the [extended Euclidean algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm).

#install
```
npm i extgcd
```

#usage

```js
var extgcd = require('extgcd');
console.log(extgcd(56, 15));

/**
 * Will output gcd, x and y such that 56x + 15y = gcd.
 * {
 *     gcd: 1,
 *     x: -4,
 *     y: 15
 * }
 */
```

#methods

##extgcd(a, b)

Returns an object containing the gcd, and the solution (x, y) to Bezout's identity.
```
{
    gcd: gcd,
    x: x,
    y: y
}
```