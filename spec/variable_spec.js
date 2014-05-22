describe("CHAPTER 1 --> VARIABLES", function() {

    /*Code to check the variable decleration of a Type Number*/
    it("Declare a variable number and assign it value 12", function() {
        expect(number).toEqual(12);
    });
    it("Declare a variable number1 and assign it value 15", function() {
        expect(number1).toEqual(15);
    });
    it("Declare a variable number and assign it value 24", function() {
        expect(number2).toEqual(24);
    });
    it("Declare a variable number and assign it value 23", function() {
        expect(number3).toEqual(23);
    });

    /*Code to check the variable decleration of Type String*/
    it("Declare a variable Persons_Name and assign it a value Henery within double Quotes", function() {
        expect(Persons_Name.toLowerCase()).toEqual("Henery");
    });
    it("Declare a variable Car_Color and assign a value red", function() {
        expect(Car_Color.toLowerCase()).toEqual("red");
    });
    it("Declare a variable Persons_Country and assign it value India", function() {
        expect(Persons_Country).toEqual("india");
    });
    it("Declare a variable Persons_Pet and assign it value Dog", function() {
        expect(Persons_Pet.toLowerCase()).toEqual("dog");
    });

    /*Code to check the variable decleration of Type Boolean*/
    it("Declare a variable amITrue and assign it a value true", function() {
        expect(amITrue).toBeTruthly();
    });
    it("Declare a variable amIFalse and assign a value false", function() {
        expect(amIFalse).toBeFalsy();
    });

    /*Code to check the variable decleration of type Object*/
    it("Declare an Object Person", function() {
        expect(Person).toEqual(jasmine.any(Object));
    });

    /*Code to check Array and the different values associates with it*/
    it("Declare an Array called Colors", function() {
        expect(Colors).toEqual(jasmine.any(Object));
    });
    it("Add Colors to array Colors namely ['red','green','blue']", function() {
        expect(Colors).toContain('red');
        expect(Colors).toContain('green');
        expect(Colors).toContain('blue');
    });

    /*Code to check whether the variable talked about is a function*/
    it("Declare a function called addition", function() {
        expect(addition).toEqual(jasmine.any(Function));
    });
    it("Declare a function substraction", function() {
        expect(substraction).toEqual(jasmine.any(Function));
    });
});
