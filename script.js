//!Mini Project:- Sticky  Notes Overcrowded.
const canvas1=document.getElementById("canvas1"); //"canvas1" is an object.
console.dir(canvas1);
const ctx=canvas1.getContext("2d"); //2d shapes like rectangle,circle,polygon

//* Canvas Setup
const canvas1Height=canvas1.height=240;
const canvas1Width=canvas1.width=320;
const randomNumber=Math.random()*255; // 0 to 1;
console.log(randomNumber);
//! Drawing shapes on canvas
//Creating a rectangle inside canvas
    // ctx.fillStyle="red";
    // ctx.fillRect(0,0,10,10);

// ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`// 0 to 255;
// ctx.fillRect(Math.random()*320*0.95,Math.random()*240*0.95,10,10);

// Creating function to generate rectangles at random positions with random colors.
function stickyNotes() {
    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`// 0 to 255;
    ctx.fillRect(Math.random()*320*0.95,Math.random()*240*0.95,10,10);
    requestAnimationFrame(()=>{
        setTimeout(stickyNotes,10)
    });
};
stickyNotes();
boxShadow()
function boxShadow(){
    canvas1.style.boxShadow=`0 0 ${10+Math.random()*100}px ${10+Math.random()*10}px rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    requestAnimationFrame(()=>{
        setTimeout(boxShadow,1000)
    });
}


