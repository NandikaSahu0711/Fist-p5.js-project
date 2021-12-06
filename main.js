function setup(){
    canvas = createCanvas(600,600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
 image(video, 100, 100, 400, 400);
 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(40, 40, 60)

 fill(255, 145, 145);
 stroke(255, 145, 145);
 circle(110, 40, 60)

 fill(55, 200, 200);
 stroke(55, 200, 200);
 circle(180, 40, 60)

 fill(25, 250, 45);
 stroke(25, 250, 45);
 circle(250, 40, 60)

 fill(55, 15, 25);
 stroke(55, 15, 25);
 circle(320, 40, 60)

 fill(155, 230, 255);
 stroke(155, 230, 255);
 circle(390, 40, 60)

 fill(34, 65, 175);
 stroke(34, 55, 175);
 circle(460, 40, 60)

 fill(230, 110, 21);
 stroke(230, 110, 21);
 circle(530, 40, 60)


 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(40, 546, 60)

 fill(255, 145, 145);
 stroke(255, 145, 145);
 circle(110, 560, 60)

 fill(55, 200, 200);
 stroke(55, 200, 200);
 circle(180, 560, 60)

 fill(25, 250, 45);
 stroke(25, 250, 45);
 circle(250, 560, 60)

 fill(55, 15, 25);
 stroke(55, 15, 25);
 circle(320, 560, 60)

 fill(155, 230, 255);
 stroke(155, 230, 255);
 circle(390, 560, 60)

 fill(34, 65, 175);
 stroke(34, 55, 175);
 circle(460, 560, 60)

 fill(230, 110, 21);
 stroke(230, 110, 21);
 circle(530, 560, 60)
}

function take_snapshot(){
    save('MyPhotoWithFrame.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}