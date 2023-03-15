var red = document.querySelector(".rouge");
var orange = document.querySelector(".orange");
var green = document.querySelector(".green");
var result = document.querySelector(".result");

red.addEventListener("click", function () {
  if (result.style.color != "red") {
    result.style.color = "red";
    result.innerHTML = "stop";
  } else {
    result.innerHTML = "";
    result.style.color = "white";
  }
});
orange.addEventListener("click", function () {
  if (result.style.color != "orange") {
    result.style.color = "orange";
    result.innerHTML = "Ready";
  } else {
    result.innerHTML = "";
    result.style.color = "white";
  }
});
green.addEventListener("click", function () {
  if (result.style.color != "green") {
    result.style.color = "green";
    result.innerHTML = "go";
  } else {
    result.innerHTML = "";
    result.style.color = "white";
  }
});

var team = document.querySelectorAll(".team");

function start() {
  var g1 = Math.floor(Math.random() * 2);
  var g2 = Math.round(Math.random() + 2);
  var g3 = Math.floor(Math.random() * 2);
  document.querySelectorAll(".semi")[0].innerHTML = team[g1].innerHTML;
  document.querySelectorAll(".semi")[1].innerHTML = team[g2].innerHTML;
  document.querySelector(".final").innerHTML =
    document.querySelectorAll(".semi")[g3].innerHTML;
}

