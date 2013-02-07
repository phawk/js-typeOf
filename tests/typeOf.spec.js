describe("typeOf()", function() {

    describe("Booleans", function() {

        it("true should return boolean", function() {
            typeOf(true).should.equal("boolean");
        });

        it("false should return boolean", function() {
            typeOf(false).should.equal("boolean");
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

        it("should return array for empty arrays", function() {
            typeOf([]).should.equal("array");
        });

        it("should return array for non empty arrays", function() {
            typeOf([1, 2, 3]).should.equal("array");
        });

        it("should return array for array constructors", function() {
            typeOf(new Array()).should.equal("array");
        });

    });

    describe("Objects", function() {

        it("should return object for object literals", function() {
            typeOf({}).should.equal("object");
        });

        it("should return object for instatiated constructors", function() {
            function Todo() {

            }
            var obj = new Todo();
            typeOf(obj).should.equal("object");

        });

    });

    describe("Functions", function() {

        it("should return function for anon function", function() {
            typeOf(function() {}).should.equal("function");
        });

        it("should return function for named method", function() {
            function Todo() {

            }
            typeOf(Todo).should.equal("function");
        });

        it("should return function for named method", function() {
            var todo = function() {
                
            }
            typeOf(todo).should.equal("function");
        });

    });

    describe("Date", function() {

        it("should return object", function() {
            typeOf(new Date()).should.equal("date");
        });

    });

    describe("Error", function() {

        it("should return object", function() {
            typeOf(new Error()).should.equal("error");
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

describe("is()", function() {

    it("should work with Booleans", function() {
        is(true, "boolean").should.be.true;
    });

    it("should work with Strings", function() {
        is("Some string", "string").should.be.true;
    });

    it("should work with Objects", function() {
        var obj = {};
        is(obj, "object").should.be.true;
        is("string", "object").should.be.false;
    });

    it("should work with Arrays", function() {
        var obj = [];
        is(obj, "array").should.be.true;
    });

});