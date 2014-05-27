describe("CHAPTER 5 --> DATE OBJECT & DATE OPERATIONS", function() {

    /*Code for String Operations*/

    /*String Decleration (Literal)*/
    it("Declare a variable called \"testDate\"", function() {
        expect(testDate).toEqual(jasmine.any(Date));
    });

    /**
     * Code in order to get the Date methods
     */
    it("Call the function(getDate()) on variable \"testDate\" and assign it to variable testDate_getDate ", function() {
        expect(testDate_getDate).toEqual(testDate.getDate());
    });

    it("Call the function(getDay()) on variable \"testDate\" and assign it to variable testDate_getDay ", function() {
        expect(testDate_getDay).toEqual(testDate.getDay());
    });

    it("Call the function(getFullYear()) on variable \"testDate\" and assign it to variable testDate_getFullYear", function() {
        expect(testDate_getFullYear).toEqual(testDate.getFullYear());
    });

    it("Call the function(getHours()) on variable \"testDate\" and assign it to variable testDate_getHours ", function() {
        expect(testDate_getHours).toEqual(testDate.getHours());
    });

    it("Call the function(getMilliseconds()) on variable \"testDate\" and assign it to variable testDate_getMilliseconds ", function() {
        expect(testDate_getMilliseconds).toEqual(testDate.getMilliseconds());
    });

    it("Call the function(getMinutes()) on variable \"testDate\" and assign it to variable testDate_getMinutes ", function() {
        expect(testDate_getMinutes).toEqual(testDate.getMinutes());
    });

    it("Call the function(getMonth()) on variable \"testDate\" and assign it to variable testDate_getMonth ", function() {
        expect(testDate_getMonth).toEqual(testDate.getMonth());
    });

    it("Call the function(getSeconds()) on variable \"testDate\" and assign it to variable testDate_getSeconds ", function() {
        expect(testDate_getSeconds).toEqual(testDate.getSeconds());
    });

    it("Call the function(getTime()) on variable \"testDate\" and assign it to variable testDate_getTime ", function() {
        expect(testDate_getTime).toEqual(testDate.getTime());
    });

    it("Call the function(getTimezoneOffset()) on variable \"testDate\" and assign it to variable testDate_getTimezoneOffset ", function() {
        expect(testDate_getTimezoneOffset).toEqual(testDate.getTimezoneOffset());
    });

    it("Call the function(getUTCDate()) on variable \"testDate\" and assign it to variable testDate_getUTCDate ", function() {
        expect(testDate_getUTCDate).toEqual(testDate.getUTCDate());
    });

    it("Call the function(getUTCFullYear()) on variable \"testDate\" and assign it to variable testDate_getUTCFullYear", function() {
        expect(testDate_getUTCFullYear).toEqual(testDate.getUTCFullYear());
    });

    it("Call the function(getUTCHours()) on variable \"testDate\" and assign it to variable testDate_getUTCHours ", function() {
        expect(testDate_getUTCHours).toEqual(testDate.getUTCHours());
    });

    it("Call the function(getUTCMilliseconds()) on variable \"testDate\" and assign it to variable testDate_getUTCMilliseconds ", function() {
        expect(testDate_getUTCMilliseconds).toEqual(testDate.getUTCMilliseconds());
    });

    it("Call the function(getUTCMinutes()) on variable \"testDate\" and assign it to variable testDate_getUTCMinutes ", function() {
        expect(testDate_getUTCMinutes).toEqual(testDate.getUTCMinutes());
    });

    it("Call the function(getUTCMonth()) on variable \"testDate\" and assign it to variable testDate_getUTCMonth ", function() {
        expect(testDate_getUTCMonth).toEqual(testDate.getUTCMonth());
    });

    it("Call the function(getUTCSeconds()) on variable \"testDate\" and assign it to variable testDate_getUTCSeconds ", function() {
        expect(testDate_getUTCSeconds).toEqual(testDate.getUTCSeconds());
    });
});
describe("Since the setter functions are a bit vauge we will look at it a bit later", function() {
    xit("Setter Functions would be dealt with in the next version", function() {

    });
});
