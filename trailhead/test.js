'use strict'

//////////////////////////////////////////////////
// Test Your JavaScript
// - why behavioral-driven tests are unique
// - different elements used in a Jasmine testing script
// - Create a simple Jasmine test
//////////////////////////////////////////////////

// Behavior-driven development (BDD)
// - born out of Test-driven development (TDD)

// One of the more popular behavior-driven tools is Jasmine
describe("A test suite is just a function", function(){
    it("This is a positive test", function(){
        expect(true).toBe(true);
    });
    it("This is a negative test", function(){
        expect(false).not.toBe(true);
    });
});