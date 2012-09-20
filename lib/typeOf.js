/*
 * Improved typeOf() method
 */
function typeOf(value) {
    var type = typeof(value);

    if (value === null) type = "null";

    if (type === "object") {
        if (value instanceof Array) type = "array";
        if (value instanceof RegExp) type = "regexp";
    }

    return type.toLowerCase();
}