describe("Variables and Literals",function(){
    it("Describes person's first name",function(){
        expect(firstName).toEqual("John");
    });
    it("Describes person's last name",function(){
        expect(lastName).toEqual("Adam");
    });
    it("Describes person's age",function(){
       expect(age).toEqual(40);
    });
    it("Whether the person has a car or not",function(){
        expect(hasCar).toBe(true);
    });
    it("Define a variable with number as String name it num1",function(){
        expect(num1).toEqual("22");
    });
    it("Definte a variable num2 and parse num1 to num2 by using parseInt function",function(){
       expect(num2).toEqual(22); 
    });
    
});