https://teachablemachine.withgoogle.com/models/rCfuRjrUF/

function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rCfuRjrUF/model.json", modelready)
    }
    
    function modelready(){
    classifier.classify(getResults);
    }