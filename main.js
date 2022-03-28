var canvas = new fabric.Canvas("myCanvas")
playerX = 10;
playerY = 10;
holey = 400;
holex = 800;
block_img_w = 30;
block_img_h = 30;
var player_object=""
var block_img_object=""
function player_update(){
    fabric.Image.fromURL("ball.png", function(Img){
    player_object = Img;
    player_object.scaleToWidth(50);
    player_object.scaleToHeight(50);
    player_object.set({
        top:playerY,
        left:playerX
    });
    canvas.add(player_object);
    })
}
function new_image(){
    fabric.Image.fromURL("golf-h.png", function(Img){
    block_img_object = Img;

    block_img_object.scaleToWidth(50);
    block_img_object.scaleToWidth(50);
    block_img_object.set({
        top:holey,
        left:holex
    });
    canvas.add(block_img_object);
    })
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if( keyPressed== '38'){
    up()
    console.log("up")
    }
    if( keyPressed== '40'){
    down()
    console.log("down")
    }   
    if( keyPressed== '37'){
    left()
    console.log("left")
    }
    if( keyPressed== '39'){
    right()
    console.log("right")
    }
}
function up(){
    if(playerY > 0){
        playerY = playerY - block_img_h
        console.log("x = " + playerX + ", Y = " + playerY)
        console.log(block_img_h + " = block img height")
        canvas.remove(player_object)
        player_update()
        new_image()
    }
}
function down(){
    if(playerY < 460){
        playerY = playerY + block_img_h
        console.log("x = " + playerX + ", Y = " + playerY)
        console.log(block_img_h + " = block img height")
        canvas.remove(player_object)
        player_update()
        new_image()
    }
}
function left(){
    if(playerX > 0){
        playerX = playerX - block_img_w
        console.log("x = " + playerX + ", Y = " + playerY)
        console.log(block_img_w + " = block img height")
        canvas.remove(player_object)
        player_update()
        new_image()
    }
}
function right(){
    if(playerX < 850){
        playerX = playerX + block_img_w
        console.log("x = " + playerX + ", Y = " + playerY)
        console.log(block_img_w + " = block img height")
        canvas.remove(player_object)
        player_update()
        new_image()
    }
}