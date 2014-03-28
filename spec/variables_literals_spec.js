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
    
    /**
     * Test for Arrays
     **/
     it("Declare an Array with name 'Animals'",function(){
        expect(Animals).toBeDefined(); 
     });
     it("Add cat,rat and owl to the Animals Array",function(){
        expect(Animals).toContain("cat");
        expect(Animals).toContain("rat");
        expect(Animals).toContain("Owl");
     });
     it("Declare an array called NumberArray with numbers and add numbers to it namely 3,4,5,9 ",function(){
         expect(NumberArray).toContain(3);
         expect(NumberArray).toContain(4);
         expect(NumberArray).toContain(5);
         expect(NumberArray).toContain(9);
         
     });
     
});