/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var fact = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return fact;
}

getDescriptionOfPerson({ name: 'Ada Lovelace', occupation: 'countess', birthPlace: 'London, England' });
