# This is a timezone validator that is on npm.
Link: https://www.npmjs.com/package/timezone-validator

In my blog I wrote about how I created this: https://idlob.dev/blog/create-npm-package/

Example usage:

_const timezoneValidator = require('timezone-validator');_

_console.log(timezoneValidator('America/Denver')); // true_ <br/>
_console.log(timezoneValidator('Foo/Bar')); // false_ <br/>
_console.log(timezoneValidator(new Array())); // throws an Error_
