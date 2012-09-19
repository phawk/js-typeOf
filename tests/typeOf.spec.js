describe("JS typeOf method", function() {

    describe("Booleans", function() {

        it("should return boolean", function() {
            typeOf(true).should.equal("boolean");
        });

    });

    describe("Strings", function() {

        it("should return string", function() {
            typeOf("").should.equal("string");
        });

    });

    describe("Numbers", function() {

        it("should return number", function() {
            typeOf(42).should.equal("number");
        });

    });

    describe("Arrays", function() {

        it("should return array", function() {
            typeOf([]).should.equal("array");
        });

    });

    describe("Objects", function() {

        it("should return object", function() {
            typeOf({}).should.equal("object");
        });

    });

    describe("Functions", function() {

        it("should return function", function() {
            typeOf(function() {}).should.equal("function");
        });

    });

    describe("null", function() {

        it("should return null", function() {
            typeOf(null).should.equal("null");
        });

    });

    describe("undefined", function() {

        it("should return undefined", function() {
            typeOf(undefined).should.equal("undefined");
        });

    });

});