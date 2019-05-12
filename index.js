const timezones = require('./timezones');

const timezoneMap = new Map(timezones.map(t => [t, true]));

module.exports = timezone => {
  if (!timezone) throw new Error('I need a timezone');
  if (typeof timezone !== 'string')  throw new Error('The timezone must be a string');
  return timezoneMap.has(timezone);
};