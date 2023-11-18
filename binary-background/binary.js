$(document).ready(function(){
  generateBinary();
	setInterval('updateBinary()', 5);
});

function generateBinary(){
  str = "";
  for ( var i = 0; i < 3500; i++ ) {
    str = str + Math.round(Math.random());
  }
  $(".bin").html(str);
}

function updateBinary() {
  str = $(".bin").html();
  n = str.length;
  r = Math.floor(Math.random() * n + 1)
  $(".bin").html(str.substring(0, r) + Math.round(Math.random()) + str.substring(r + 1));
}