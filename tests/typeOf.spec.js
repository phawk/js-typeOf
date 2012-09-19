describe("JS typeOf method", function() {

    describe("Booleans", function() {

        it("should return boolean", function() {
            typeOf(true).should.equal("boolean");
        });

    });

    describe("Strings", function() {

        it("should return string for empty strings", function() {
            typeOf("").should.equal("string");
        });

        it("should return string for non-empty strings", function() {
            typeOf("woohoo").should.equal("string");
        });

    });

    describe("Numbers", function() {

        it("should return number", function() {
            typeOf(42).should.equal("number");
        });

        it("should return number for zero", function() {
            typeOf(0).should.equal("number");
        });

        it("should return number for negatives", function() {
            typeOf(-1).should.equal("number");
        });

        it("should return number for floats", function() {
            typeOf(0.234234).should.equal("number");
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

    describe("RegExp", function() {

        it("should return regexp", function() {
            typeOf(/^foo(bar)?$/i).should.equal("regexp");
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