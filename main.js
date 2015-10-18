var canvas, context;
var rowHeight, tileSize;
var tlc = ['#FF00FF', '#00FFFF'];

function sortByStartTime(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j + 1] < arr[j]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

function getData() {
    var reddit = Array();
    reddit.push( ["Math", "100", "7"] );
    reddit.push( ["Health", "110", "7"] );
    return reddit;
}

function presentData() {
    var dataPoints = sortByStartTime(getData())//list of tuples
    for (var i = 0; i < dataPoints.length; i++) {
        console.log(dataPoints[i]);
        var name = dataPoints[i][0];
        var start = parseInt(dataPoints[i][1])
        var len = parseInt(dataPoints[i][2])
        //
        for (var j = 0; j < len; j++) {
            var k = start + j;
            var r = parseInt(k / 36);
            var c = k % 36;
            
            context.beginPath();
            context.rect(c * tileSize + 65, r * rowHeight + 100, tileSize, tileSize);
            context.strokeStyle = '#000000';
            context.stroke();
            context.fillStyle = tlc[i % 2];
            context.fill();
        }
        
        var r = parseInt(start / 36);
        var c = start % 36;
        context.font = "14px Arial";
        context.fillStyle='#000000';
        context.fillText(name, c * tileSize + 66, r * rowHeight + 98 , 115);
    }
}

function redraw() {
    
}

function fillColor(color) {
    context.rect(0, 0, 720, 500);
    context.fillStyle = color;
    context.fill();
}

function drawTimeLine() {
    for (var i = 0; i < 144; i++) {
        
        var r = parseInt(i / 36);
        var c = i % 36;
        
        context.beginPath();
        context.rect(c * tileSize + 65, r * rowHeight + 100, tileSize, tileSize);
        context.strokeStyle = '#222222';
        context.stroke();
    }
    context.font = "16px Arial";
    context.fillStyle = '#000000';
    context.fillText("12 AM", 10, 115);
    context.fillText("06 AM", 10, 115 + rowHeight);
    context.fillText("12 PM", 10, 115 + rowHeight * 2);
    context.fillText("06 PM", 10, 115 + rowHeight * 3);
}

function init() {
    canvas = document.getElementById("bar");
    context = canvas.getContext('2d');
    
    rowHeight = 100
    tileSize = 16
    
    fillColor('#FFFFFF');
    drawTimeLine();
    
    presentData();
}

window.onload = init;
