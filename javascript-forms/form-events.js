function handleFocus(event) {
  console.log('focus event fired');
  console.log('target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('target name:', event.target.name);
}

function handleInput(event) {
  console.log('target name:', event.target.name);
  console.log('target value:', event.target.value);
}

var userName = document.querySelector('#user-name');

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);
