/* exported getFullNameOfPerson */

function getFullNameOfPerson(person) {
  var fullName = person.firstName + ' ' + person.lastName;
  return fullName;
}

getFullNameOfPerson({ firstName: 'Ada', lastName: 'Lovelace' });
