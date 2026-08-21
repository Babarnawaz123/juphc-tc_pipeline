const { calculateTax } = require("../server");

describe("Tax Calculator Unit Tests", () => {
  it("should calculate 10% tax for income up to 10,000", () => {
    expect(calculateTax(5000)).toEqual(500);
  });

  it("should calculate 20% marginal tax for income between 10,001 and 50,000", () => {
    expect(calculateTax(20000)).toEqual(3000);
  });

  it("should calculate 30% marginal tax for income above 50,000", () => {
    expect(calculateTax(60000)).toEqual(12000);
  });
});
