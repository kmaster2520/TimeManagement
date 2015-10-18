$(document).ready(function() {
                  var canvas = document.getElementById("bar");
                  var context = canvas.getContext('2d');
                  
                  var rowHeight = 100
                  var tileSize = 16
                  
                  for (var i = 0; i < 144; i++) {
                  
                  var r = parseInt(i / 36);
                  var c = i % 36;
                  
                  context.rect(c * tileSize + 50, r * rowHeight + 100, tileSize, tileSize);
                  context.strokeStyle = '#000000';
                  context.stroke();
                  
                  
                  }
                  
                  context.font = "16px Arial";
                  context.fillText("12 AM", 0, 115);
                  context.fillText("6 AM",  0, 115 + rowHeight);
                  context.fillText("12 PM", 0, 115 + rowHeight * 2);
                  context.fillText("6 PM",  0, 115 + rowHeight * 3);
});