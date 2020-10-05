
describe("fizzBuzz", function() {
  it("returns Fizz when divisible by 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it("returns Buzz when divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });
});
