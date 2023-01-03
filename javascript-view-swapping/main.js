
var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

function switchTabs(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < tabs.length; i++) {
      if (event.target === tabs[i]) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var tabContent = event.target.getAttribute('data-view');
    for (let i = 0; i < views.length; i++) {
      if (tabContent !== views[i].getAttribute('data-view')) {
        views[i].className = 'view hidden';
      } else {
        views[i].className = 'view';
      }
    }

  }
}

tabContainer.addEventListener('click', switchTabs);
