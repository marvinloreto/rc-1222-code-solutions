var userList = document.getElementById('user-list');

function getUserList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      var li = document.createElement('li');
      li.textContent = xhr.response[i].name;
      userList.appendChild(li);
    }
  }); xhr.send();
}

getUserList();
