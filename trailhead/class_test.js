describe("Test Parent Child Classes", function(){
    it("Get Message Test", function(){
        let someone = new Child('bubbles');
        expect(someone.getMessage()).toEqual("Hello bubbles");
    });
});