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
    it("Whether the person has a bank balance",function(){
        expect(hasBankBalance).toBe(undefined);
    })
    });