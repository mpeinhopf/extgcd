describe('extended gcd', function() {
    let extgcd = require('../extgcd.js');

    it('should return 1 for a=1 and b=1 and calculate x and y correctly', function() {
        let a = 1;
        let b = 0;
        let tmp = extgcd(a, b);
        expect(tmp.gcd).toEqual(1);
        expect(a*tmp.x+b*tmp.y).toEqual(tmp.gcd);
    });

    it('should return 1 for a=56 and b=15 and calculate x and y correctly', function() {
        let a = 56;
        let b = 15;
        let tmp = extgcd(a, b);
        expect(tmp.gcd).toEqual(1);
        expect(a*tmp.x+b*tmp.y).toEqual(tmp.gcd);
    });

    it('should return 10 for a=45620 and b=36490 and calculate x and y correctly', function() {
        let a = 45620;
        let b = 36490;
        let tmp = extgcd(a, b);
        expect(tmp.gcd).toEqual(10);
        expect(a*tmp.x+b*tmp.y).toEqual(tmp.gcd);
    });

    it('should return 12 for a=48 and b=180 and calculate x and y correctly', function() {
        let a = 48;
        let b = 180;
        let tmp = extgcd(a, b);
        expect(tmp.gcd).toEqual(12);
        expect(a*tmp.x+b*tmp.y).toEqual(tmp.gcd);
    })
});