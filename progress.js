CountDownTimer("10/01/2021 12:0 AM", "countdown");
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
window.searchGoal = 2000;
var app = angular.module("SSASearch", []);
app.controller("controller", function ($scope, $http) {
  $scope.searchGoal = window.searchGoal;
  $http.get("https://wrapapi.com/use/matthewr2024/ssasearch/ssagoodshop/3.0.1?wrapAPIKey=v794h1L87mGLXvmrwcOkDrWonOQc8pGN").then(function (response) {
    window.wrapapiresponse = response.data;
    //  window.restonseString = JSON.stringify(response.data);
    // window.dataFromResponseString = String(window.restonseString.match(/(?<=\[).*?(?=\])/));
    $scope.GoodThisYear = /*JSON.parse(window.dataFromResponseString)*/ window.wrapapiresponse;
    //window.GoodThisYear = /*JSON.parse(window.dataFromResponseString)*/ window.wrapapiresponse;
    $scope.searchesThisYear = $scope.GoodThisYear.goodsearchThisYear.replace("$", "").replace(".", "");
    //window.searchesThisYear = window.GoodThisYear.goodsearchThisYear.replace("$", "").replace(".", "");
    $scope.goalpercent = Math.round(($scope.GoodThisYear.goodsearchThisYear.replace("$", "").replace(".", "") / window.searchGoal) * 100) + "%";
  });
});
