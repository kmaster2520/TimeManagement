$(document).ready(function() {
                  var canvas = document.getElementById("bar");
                  var context = canvas.getContext('2d');
                  
                  var rowHeight = 100
                  var tileSize = 16
                  
                  context.rect(0, 0, 720, 500);
                  context.fillStyle='#FFFFFF';
                  context.fill();
                  
                  for (var i = 0; i < 144; i++) {
                  
                  var r = parseInt(i / 36);
                  var c = i % 36;
                  
                  context.rect(c * tileSize + 65, r * rowHeight + 100, tileSize, tileSize);
                  context.strokeStyle = '#000000';
                  context.stroke();
                  
                  
                  }
                  
                  context.font = "16px Arial";
                  context.fillStyle='#000000';
                  context.fillText("12 AM", 10, 115);
                  context.fillText("06 AM", 10, 115 + rowHeight);
                  context.fillText("12 PM", 10, 115 + rowHeight * 2);
                  context.fillText("06 PM", 10, 115 + rowHeight * 3);
                  
                  
                  presentData()
                  
                  
                  
});

function getData() {
    
}

function presentData() {
    var dataPoints = getData()//list of tuples
    for (var i = 0; dataPoints.length; i++) {
        
    }
}