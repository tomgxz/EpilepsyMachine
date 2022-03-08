function timeout() {
  setTimeout(function() {
    color1="rgb(x,y,z)".replace("x",Math.floor(Math.random()*255)).replace("y",Math.floor(Math.random()*255)).replace("z",Math.floor(Math.random()*255))
    color2="rgb(x,y,z)".replace("x",Math.floor(Math.random()*255)).replace("y",Math.floor(Math.random()*255)).replace("z",Math.floor(Math.random()*255))
    if (Math.random() > 0.2) {
      document.body.style.backgroundImage="linear-gradient(zdeg,x,y)".replace("x",color1).replace("y",color2).replace("z",Math.floor(Math.random()*360))
    } else {
      document.body.style.backgroundImage="linear-gradient(zdeg,x,y)".replace("x",color1).replace("y",color1).replace("z",0)
    }
    timeout()
  },100);
}

$(document).ready(function () {
  timeout()
});
