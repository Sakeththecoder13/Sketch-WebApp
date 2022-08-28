function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    strokeWeight(12);
    stroke('black');
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results);
        document.getElementById("name").innerHTML = 'Label:' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Confidence' + Math.round(results[0].confidence * 100) + '%';
        utterThis = new
        SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
    
    
    
}

function clearfunc(){
    background("white");
}