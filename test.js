const timezoneValidator = require('./index');

describe('GIVEN a TimezoneValidator', () => {
  describe('WHEN it is passed nothing', () => {
    test('THEN it should throw an error', () => {
      expect(() => timezoneValidator()).toThrow()
    });
  });

  describe('WHEN it is passed a not string argument', () => {
    test('THEN it should throw an error', () => {
      expect(() => timezoneValidator(12)).toThrow()
    });
  });

  describe('WHEN it is passed a valid timezone', () => {
    test('THEN it should return true', () => {
      expect(timezoneValidator('Europe/London')).toBe(true)
    });
  });

  describe('WHEN it is passed a string that is not a timezone', () => {
    test('THEN it should return false', () => {
      expect(timezoneValidator('Foo/Bar')).toBe(false)
    });
  });
});