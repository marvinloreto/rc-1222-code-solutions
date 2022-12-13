var student = {
  firstName: 'Marvin',
  lastName: 'Loreto',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Barista';

console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Job:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Subaru',
  model: 'Impreza',
  year: '2017'
};

vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;

console.log('Vehicle Color:', vehicle['color']);
console.log('Is a convertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Moochi',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
