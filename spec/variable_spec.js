describe("CHAPTER 1 --> VARIABLES", function() {

    /*Code to check the variable decleration of a Type Number*/
    it("Declare a variable number and assign it value 12", function() {
        expect(number).toBe(12);
    });
    it("Declare a variable number1 and assign it value 15", function() {
        expect(number1).toBe(15);
    });
    it("Declare a variable number and assign it value 24", function() {
        expect(number2).toBe(24);
    });
    it("Declare a variable number and assign it value 23", function() {
        expect(number3).toBe(23);
    });

    /*Code to check the variable decleration of Type String*/
    it("Declare a variable Persons_Name and assign it a value Henery within double Quotes", function() {`
        expect(Persons_Name.toLowerCase()).toBe("Henery");
    });
    it("Declare a variable Car_Color and assign a value red", function() {
        expect(Car_Color.toLowerCase()).toBe("red");
    });
    it("Declare a variable Persons_Country and assign it value India", function() {
        expect(Persons_Country).toBe("india");
    });
    it("Declare a variable Persons_Pet and assign it value Dog", function() {
        expect(Persons_Pet.toLowerCase()).toBe("dog");
    });
});
