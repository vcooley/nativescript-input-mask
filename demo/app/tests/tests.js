var InputMask = require("nativescript-input-mask").InputMask;
var inputMask = new InputMask();

describe("greet function", function() {
    it("exists", function() {
        expect(inputMask.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(inputMask.greet()).toEqual("Hello, NS");
    });
});