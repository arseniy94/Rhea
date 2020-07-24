menu.onclick = function myFnction() {
  var x = document.getElementById("my_header");
  if (x.className === "header_nav") {
    x.className += " responsive";
  } else {
    x.className = "header_nav";
  }
};
