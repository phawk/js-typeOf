(function(global) {

    /*
     *   typeOf()
     *
     *   Improved typeOf method, more reliable than JavaScripts
     */
    var typeOf = function(value) {
        var Klass = Object.prototype.toString.call(value).slice(8, -1);

        return Klass.toLowerCase();
    }


    /*
     *   is()
     *
     *   Used for comparison of type
     */
    var is = function(type, value) {
        if (typeOf(type) !== "string") throw new Error("is(type, value) expects type to be a string");

        return typeOf(value) === type.toLowerCase();
    }


    // Export methods
    global.typeOf = typeOf;
    global.is = is;

})(this);