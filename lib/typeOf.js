/*
 * Improved typeOf() method
 */
function typeOf(value) {
    var type, construct, constructStart, constructLength, constructName, constructType;
    var standardConstructors = ["object", "array", "regexp"];
    var inArray = function(item, array) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === item) return true;
        }
        return false;
    };

    type = typeof(value);

    if (value === null) return "null";

    if (type === "object") {
        if (value.constructor) {
            construct = value.constructor.toString();
            constructStart = construct.indexOf(" ")+1;
            constructLength = construct.indexOf("(")-constructStart;
            constructName = construct.substr(constructStart, constructLength);
            constructType = constructStart && constructName ? constructName.toLowerCase() : "unknown";
            if (inArray(constructType, standardConstructors)) type = constructType;
        }
    }

    return type.toLowerCase();
}