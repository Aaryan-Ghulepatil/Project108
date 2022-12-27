

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("",modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_label").innerHTML="Detected voice is "+results[0].label;

    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";

    if(result[0].label=="Barking"){
      document.getElementById("img1").src="dog.png";

    }
    else if(result[0].label=="Meowing"){
        document.getElementById("img1").src="cat-removebg-preview.png";
    }
  }
}