# NPM package that let's you check if a timezone is a valid zone.
NPM Link: https://www.npmjs.com/package/timezone-validator

Check out my blog: https://idlob.dev/blog/create-npm-package/

Example usage:

_const timezoneValidator = require('timezone-validator');_

_console.log(timezoneValidator('America/Denver')); // true_ <br/>
_console.log(timezoneValidator('Foo/Bar')); // false_ <br/>
_console.log(timezoneValidator(new Array())); // throws an Error_
