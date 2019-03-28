let can1,p1,can2,p2;

function yes(){
  can1=createCanvas(windowWidth,windowHeight-30);
  can1.position(0,0);
  can1.background(255,255,0);
  textAlign(CENTER,CENTER);
 textSize(50);
 text('Great choice, come outside!',width/2,height/2);
}

function no(){
   can1=createCanvas(windowWidth,windowHeight-30);
  can1.position(0,0);
  can1.background(255,255,0);
  textAlign(CENTER,CENTER);
 textSize(40);
 text("I'm only putting this here to give you the choice. Please say yes.",width/2,height/2);
}

let radio2;
function burrito2(){
radio2 = createRadio();
radio2.position(windowWidth/2,2*windowHeight/3);
  radio2.class("bdd");
  radio2.option('YES!!!',4);
  radio2.option('No... ',5);
  radio2.style('width','50px');

}

function drawburrito2(){
var val2 = radio2.value();
  if(val2){
  switch(val2){
case '4': yes();break; //yes
case '5': no();break; //no
	}
  }
}
