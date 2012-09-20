# js typeOf

JavaScripts typeof operator sucks! This aims to provide an extremely simple method to call to check typeof and should be a little more epectable, and reduce boilerplate on your input checking. 

```js
// Rudementary example
if (objectToTest && typeof objectToTest === "object" && objectToTest instanceof Array)

// Easier
if (typeOf(objectToTest) === "array")
```

## Changelog

### v 0.1.2

* Massively simplify and optimise

### v 0.1.1

* Custom constructors return typeof as `object`
* The only two objects that do return a different typeof are `Array` and `RegExp`

### v 0.1.0

* Added support for `null`
* Add extra tests