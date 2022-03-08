function timeout() {
  setTimeout(function() {
    document.body.style.backgroundColor="rgb(x,y,z)".replace("x",Math.floor(Math.random()*255)).replace("y",Math.floor(Math.random()*255)).replace("z",Math.floor(Math.random()*255))
    timeout()
  },100);
}

$(document).ready(function () {
  timeout()
});
