CountDownTimer("10/01/2020 12:0 AM", "countdown");
function CountDownTimer(dt, id) {
  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById(id).innerHTML = "0";

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(id).innerHTML = days /*+ ' days'*/;
    //document.getElementById(id).innerHTML += hours + 'hrs ';
    //document.getElementById(id).innerHTML += minutes + 'mins ';
    //document.getElementById(id).innerHTML += seconds + 'secs';
  }

  timer = setInterval(showRemaining, 1000);
}

var app = angular.module("SSASerch", []);
app.controller("controller", function ($scope, $http) {
  $http.get("https://simplescraper.io/api/XNHMkNmyQnQKr7eoUk7R?apikey=3glGsuNpSjTEQTFmZrF9cK8ExbWvrey4&offset=0&limit=20").then(function (response) {
    window.restonseString = JSON.stringify(response.data);
    window.dataFromResponseString = String(window.restonseString.match(/(?<=\[).*?(?=\])/));
    $scope.Good2020 = JSON.parse(window.dataFromResponseString);
  });
});
