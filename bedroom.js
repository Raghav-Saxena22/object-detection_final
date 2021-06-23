img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(600,400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function preload()
{
    img = loadImage("bedroom1_img.jpg");
}

function draw()
{
    image(img,0,0,600,400);
    /*fill("red");
    text("Dog",50,75);
    noFill();
    stroke("red");
    rect(30,60,350,350);

fill("orange");
    text("Cat",320,90);
    noFill();
    stroke("orange")
    rect(300,80,270,330)*/

    if(status != "") 
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y)
            stroke("red")
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
        }
    }
}

function modelLoaded()
{
console.log("modelLoaded");
status = true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
if(error)
{
    console.log(error)
}
else
{
    console.log(results);
    objects = results;
}
}

function back()
{
    window.location = "index.html"
}
