
var url = 'http://api.icndb.com/jokes/random';
var btn = document.querySelector('.container__button');
var content = document.querySelector('.container__content');

var getData = function() {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function() {
    var response = JSON.parse(request.response);
    content.innerHTML = response.value.joke;
  });
  request.send();
}

btn.addEventListener('click', function() {
  getData();
});