describe("CHAPTER 4 --> BOOLEAN & BOOLEAN OPERATIONS", function() {

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
    
    it("Call function(toString()) on variable boolTest and assign the result to result1", function() {
    	expect(result1).toBe("true");
    });
    it("Call function(toLocaleString()) on variable boolTest and assign the result to result2", function() {
    	expect(result2).toBe("true")
    });
    it("Call function(valueOf()) on variable boolTest and assign the result to result3", function() {
    	expect(result3).toBe(true);
    });
