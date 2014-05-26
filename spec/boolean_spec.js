describe("CHAPTER 3 --> BOOLEAN & BOOLEAN OPERATIONS", function() {

    /**
     * Code for Boolean Variables and some functions associated
     */
    it("Declare a variable called boolTest and assign it value True", function() {
        expect(boolTest).toBeTruthy();
    });
    it("Declate a variable called boolFalseTest and assign it a value False", function() {
        expect(boolFalseTest).toBeFalsy();
    });

    /**
     * This section deals with the functions associated with the instance variables
     */

    it("Call function(toString()) on variable boolTest and assign the result to a variable boolTestResult_toString", function() {
        expect(boolTestResult_toString).toBe("true");
    });
    it("Call function(toLocaleString()) on variable boolTest and assign the result to a variable boolTestResult_toLocaleString", function() {
        expect(boolTestResult_toLocaleString).toBe("true")
    });
    it("Call function(valueOf()) on variable boolTest and assign the result to a variable boolTestResult_valueOf", function() {
        expect(boolTestResult_valueOf).toBe(true);
    });
});
