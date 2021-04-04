var balloon;
var balloonPosition;
var database;
var position;
var balloonIMG,backgroungIMG;

function preload(){
    balloonIMG = loadImage("Hot Air Ballon-02.png")
    backgroundIMG = loadImage("Hot Air Ballon-01.png")
}

function setup(){
    createCanvas(1200,800)
    database = firebase.database()
    balloon = createSprite(100,400,40,40)
    balloon.addImage(balloonIMG)
    balloon.scale = 0.7
    balloonPosition = database.ref("balloon/position")
    balloonPosition.on("value",readPosition)
}
function draw(){
    background(backgroundIMG)

    if (keyDown(RIGHT_ARROW)){
        writePosition(1,0)
    }
    if (keyDown(LEFT_ARROW)){
        writePosition(-1,0)
    }
    if (keyDown(UP_ARROW)){
        writePosition(0,-1)
    }
    if (keyDown(DOWN_ARROW)){
        writePosition(0,1)
    }
    drawSprites()
} 
function readPosition(data){
    position = data.val()
    balloon.x = position.x
    balloon.y = position.y
}
function writePosition(x,y){
    database.ref("balloon/position").set({
        "x":position.x + x,
        "y":position.y + y
    })
    
}