function typeOf(value) {
    var type, construct, constructStart, constructLength, constructName;

    type = typeof(value);

    if (value === null) return "null";

    if (type === "object") {
        if (value.constructor) {
            construct = value.constructor.toString();
            constructStart = construct.indexOf(" ")+1;
            constructLength = construct.indexOf("(")-constructStart;
            constructName = construct.substr(constructStart, constructLength);
            type = constructStart && constructName ? constructName : "unknown";
        }
    }

    return type.toLowerCase();
}