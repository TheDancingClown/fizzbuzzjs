
describe("fizzBuzz", function() {
  it("returns Fizz when divisible by 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it("returns Buzz when divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });
  it("returns FizzBuzz when divisible by 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("returns the number when not divisible by 3 or 5", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });

});
