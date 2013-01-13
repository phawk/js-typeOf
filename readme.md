# js typeOf

## typeOf(Object)

JavaScripts typeof operator sucks! This aims to provide an extremely simple method to call to check typeof and should be a little more epectable, and reduce boilerplate on your input checking. 

```js
// Rudementary example
if (objectToTest && typeof objectToTest === "object" && objectToTest instanceof Array)

// Easier
if (typeOf(objectToTest) === "array")
```

## is("Object", Object)

Used for shorthand comparisons, returns a boolean.

```js
var obj = {};

is("object", obj); // true
is("string", obj); // false
```

## Changelog

### v0.2.0

* Simpler and more accurate calculation using `Object.toString.
* Now with `is()` method for comparisons
* typeOf(new Date()) now equals "date"
* typeOf(new Error()) now equals "error"

### v0.1.2

* Massively simplify and optimise

### v0.1.1

* Custom constructors return typeof as `object`
* The only two objects that do return a different typeof are `Array` and `RegExp`

### v0.1.0

* Added support for `null`
* Add extra tests