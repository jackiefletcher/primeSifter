describe("arrayUpTo", function() {
  it("returns numbers from one up to that number, starting at 2", function() {
    expect(arrayUpTo(5)).to.eql([2 , 3, 4, 5]);
  });
});

describe("primeSift", function() {
  it("return an array of prime numbers, up to a given number", function() {
    expect(primeSift(7)).to.eql([2,3,5,7]);
  });

  it("return an array of prime numbers, up to a really big number", function() {
    expect(primeSift(72)).to.eql([2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71])
  });
});
