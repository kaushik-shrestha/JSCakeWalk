describe("CHAPTER 8 --> Functions", function() {
    it("Describe a simple function \"demoFunction\" with no return values ", function() {
        expect(demoFunction).jasmine.any(Function);
    });
    it("Describe a function \"returnString\" and return a string value", function() {
        expect(returnString).jasmine.any(String);
    });
    it("Describe a function \"addNumber(12,13)\" and return the sum", function() {
        expect(addNumber(12, 13)).jasmine.any(Number);
        expect(addNumber(12, 13)).toEqual(25);
    });
    it("Describe a function \"mulNumber(2,11)\" and return the product", function() {
        expect(addNumber(2, 11)).jasmine.any(Number);
        expect(addNumber(2, 11)).toEqual(22);
    });
    it("Describe a function \"divNumber(10,5)\" and return the number", function() {
        expect(addNumber(10, 5)).jasmine.any(Number);
        expect(addNumber(10, 5)).toEqual(2);
    });
});
/**
 * Simple Program to calculate interest
 * use the formula interest = principle*rate*time/100
 * total sum = principle+interest
 */
describe("CHAPTER 8 --> Simple Interest Calculator", function() {
    it("Declare three variables namely \"principle\",\"rate\",\"time\",\"interest\",\"total\"", function() {
        expect(principle).toBeDefined();
        expect(rate).toBeDefined();
        expect(time).toBeDefined();
        expect(interest).toBeDefined();
        expect(total).toBeDefined();
    });
    it("Declare a function \"calculateInterest(principle,rate,time)\" and calculate the interest", function() {
        expect(calculateInterest()).toBeDefined();
    });
    it("Assign the value of the above step to a variable \"interest\"", function() {
        expect(interest).toBeDefined();
        expect(interest).jasmine.any(Number);
    });
    it("Declare a function called \"total()\" and add \"interest\" and \"principle\" and then return to \"total\" ", function() {
        expect(total).jasmine.any(Number);
    });
});
