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
window.searchGoal = 1000;
var app = angular.module("SSASerch", []);
app.controller("controller", function ($scope, $http) {
  $scope.searchGoal = window.searchGoal;
  $http
    .get(
      "https://wrapapi.com/use/matthewr2024/ssasearch/good2020/1.0.0?wrapAPIKey=v794h1L87mGLXvmrwcOkDrWonOQc8pGN"
    )
    .then(function (response) {
      window.wrapapiresponse = response.data;
      //  window.restonseString = JSON.stringify(response.data);
      // window.dataFromResponseString = String(window.restonseString.match(/(?<=\[).*?(?=\])/));
      $scope.Good2020 =
        /*JSON.parse(window.dataFromResponseString)*/ window.wrapapiresponse.data;
      window.Good2020 =
        /*JSON.parse(window.dataFromResponseString)*/ window.wrapapiresponse.data;
      $scope.searches2020 = window.Good2020.goodsearch2020
        .replace("$", "")
        .replace(".", "");
      window.searches2020 = window.Good2020.goodsearch2020
        .replace("$", "")
        .replace(".", "");
      $scope.goalpercent =
        Math.round(
          (window.Good2020.goodsearch2020.replace("$", "").replace(".", "") /
            window.searchGoal) *
            100
        ) + "%";
    });
});
