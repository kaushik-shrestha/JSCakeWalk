describe("CHAPTER 5 --> ARRAY & ARRAY OPERATIONS", function() {

    /**
     * Code for Boolean Variables and some functions associated
     */
    it("Declare a variable called \"arrTest\" and assign it value 1,2,3,4,5,6", function() {
        expect(arrTest).toBe(jasmine.any(Object));
        expect(arrTest).toContain(1);
        expect(arrTest).toContain(2);
        expect(arrTest).toContain(3);
        expect(arrTest).toContain(4);
        expect(arrTest).toContain(5);
        expect(arrTest).toContain(6);
    });
});
describe("CHAPTER 5.1 --> Test for Mutator methods, these help in modifying the array", function() {
    /**
     * Methods in Arrays
     */
    it("Call the property(length) on an array \"arrTest=[1,2,3,2,4]\" and assign it to variable \"arrTest_length\"", function() {
        expect(arrTest_length).toEqual(5);
    });
    it("Call the function(push(10)) on variable \"arrTest\" and assign it to variable \"arrTest_push\"", function() {
        expect(arrTest_push).toContain(10);
    });
    it("Call the function(pop()) on variable \"arrTest\" and assign it to variable \"arrTest_pop\"", function() {
        expect(arrTest_push).toEqual(arrTest.pop);
    });
    it("Call the function(reverse()) on variable \"arrTest\" and assign it to variable \"arrTest_reverse\"", function() {
        expect(arrTest_reverse).toEqual(arrTest.reverse());
    });
    it("Call the function(shift()) on variable \"arrTest\" and assign it to variable \"arrTest_shift\"", function() {
        expect(arrTest_shift).toEqual(arrTest.shift());
    });
    it("Call the function(sort()) on variable \"arrTest\" and assign it to variable \"\"arrTest_sort\"", function() {
        expect(arrTest_sort).toEqual(arrTest.sort());
    });
    it("Call the function(unshift()) on variable \"arrTest\" and assign it to variable \"arrTest_unshift\"", function() {
        expect(arrTest_unshift).toEqual(arrTest.unshift());
    });
});
describe("CHAPTER 5.2 --> Accessor Methods(These methods help in manipulation representation of Array)", function() {
    it("Describe two arrays \"a\" & \"b\" and call the join method and assign it to a third array \"c\"", function() {
        expect(c).toEqual(a.concat(b));
    });
    it("Describe an arrays \"a1\" and call the join method on it and assign it to a variable \"c1\"", function() {
        expect(c1).toEqual(a1.join());
    });
    it("Describe an arrays \"a2\" and call the slice(1,2) method on it and assign it to a variable \"c1\"", function() {
        expect(c2).toEqual(c2.slice(1, 2));
    });
    it("Describe an arrays \"a3\" and call the toString() method on it and assign it to a variable \"c3\"", function() {
        expect(c3).toEqual(a3.toString());
    });
    it("Describe an arrays \"a4\" and call the toLocaleString() method on it and assign it to a variable \"c4\"", function() {
        expect(c4).toEqual(a4.toLocaleString());
    });
    it("Describe an arrays \"a5=[1,2,3,4]\" call the indexOf(3) method on it and assign it to a variable \"c5\"", function() {
        expect(c4).toEqual(4);
    });
    it("Describe an arrays \"a6=[1,2,3,4]\" call the lastIndexOf(3) method on it and assign it to a variable \"c6\"", function() {
        expect(c4).toEqual(4);
    });
});
describe("CHAPTER 5.3 --> Iterator Methods (WILL NOT BE COVERED IN THIS POINT FOR RERERANCE http://mzl.la/1ntIgcd)", function() {
    xit("OUT OF SCOPE FOR NOW", function() {

    });
});
