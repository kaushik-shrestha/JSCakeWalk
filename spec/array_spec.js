describe("CHAPTER 5 --> ARRAY & ARRAY OPERATIONS", function() {

    /**
     * Code for Boolean Variables and some functions associated
     */
    it("Declare a variable called arrTest and assign it value 1,2,3,4,5,6", function() {
        expect(arrTest).toBe(jasmine.any(Object));
        expect(arrTest).toContain(1);
        expect(arrTest).toContain(2);
        expect(arrTest).toContain(3);
        expect(arrTest).toContain(4);
        expect(arrTest).toContain(5);
        expect(arrTest).toContain(6);
    });
});
describe("Test for Mutator methods", function() {
    /**
     * Methods in Arrays
     */
    it("Call the property(length) on variable arrTest and assign it to variable arrTest_length", function() {
        expect(arrTest_length).toEqual(arrTest.length);
    });
    it("Call the function(push(10)) on variable arrTest and assign it to variable arrTest_push", function() {
        expect(arrTest_push).toContain(10);
    });
    it("Call the function(pop()) on variable arrTest and assign it to variable arrTest_pop", function() {
        expect(arrTest_push).toEqual(arrTest.pop);
    });
    it("Call the function(reverse()) on variable arrTest and assign it to variable arrTest_reverse", function() {
        expect(arrTest_reverse).toEqual(arrTest.reverse());
    });
    it("Call the function(shift()) on variable arrTest and assign it to variable arrTest_shift", function() {
        expect(arrTest_shift).toEqual(arrTest.shift());
    });
    it("Call the function(sort()) on variable arrTest and assign it to variable arrTest_sort", function() {
        expect(arrTest_sort).toEqual(arrTest.sort());
    });
    it("Call the function(unshift()) on variable arrTest and assign it to variable arrTest_unshift", function() {
        expect(arrTest_unshift).toEqual(arrTest.unshift());
    });
});
