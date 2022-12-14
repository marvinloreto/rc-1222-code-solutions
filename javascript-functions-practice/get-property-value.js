/* exported getPropertyValue */

function getPropertyValue(object, key) {
  var value = object[key];
  return value;
}

var ada = {
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England'
};

getPropertyValue(ada, 'birthPlace');
