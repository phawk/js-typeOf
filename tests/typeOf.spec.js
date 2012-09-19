describe("JS typeOf method", function() {

    describe("Objects", function() {

        it("should return object", function() {
            typeOf({}).should.equal("object");
        });

    });

    describe("Arrays", function() {

        it("should return array", function() {
            typeOf([]).should.equal("array");
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

    describe("null", function() {

        it("should return null", function() {
            typeOf(null).should.equal("null");
        });

    });

    describe("undefined", function() {

        it("should return null", function() {
            typeOf(undefined).should.equal("undefined");
        });

    });

});