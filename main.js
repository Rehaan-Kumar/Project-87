var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
image_width = 30;
image_height = 30;
player_object = "";
image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(image_width);
        block_object.scaleToHeight(image_height);
        block_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    console.log(e);
    key_press = e.keyCode;
    console.log(key_press);

    if (e.shiftKey == true && key_press == "80") {
        console.log("Shift + P");
        image_height = image_height + 10;
        image_width = image_width + 10;
        document.getElementById("width").innerHTML = image_width;
        document.getElementById("height").innerHTML = image_height;
    }

    if (e.shiftKey == true && key_press == "77") {
        console.log("Shift + M");
        image_height = image_height - 10;
        image_width = image_width - 10;
        document.getElementById("width").innerHTML = image_width;
        document.getElementById("height").innerHTML = image_height;
    }

    if (key_press == "38") {
        console.log("up arrow");
        up();
    }

    if (key_press == "40") {
        console.log("down arrow");
        down();
    }

    if (key_press == "37") {
        console.log("left arrow");
        left();
    }

    if (key_press == "39") {
        console.log("right arrow");
        right();
    }

    if (key_press == "70") {
        console.log("face");
        new_image("ironman_face.png");
    }

    if (key_press == "66") {
        console.log("body");
        new_image("spiderman_body.png");
    }

    if (key_press == "76") {
        console.log("legs");
        new_image("hulk_legs.png");
    }

    if (key_press == "82") {
        console.log("right_hand");
        new_image("thor_right_hand.png");
    }

    if (key_press == "72") {
        console.log("left_hand");
        new_image("captain_america_left_hand.png");
    }
}