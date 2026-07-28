const button = document.getElementById("btn");

const profileImage = document.getElementById("profile-img");
const callImage = document.getElementById("call-img");

const text = document.getElementById("text");


const hoverSound = new Audio("./assets/sounds/ipadclick.mp3");

hoverSound.volume = 0.1;
hoverSound.preload = "auto";



const tl = gsap.timeline({ paused: true });

tl.to(text,{
    x: 0,
    opacity:1,
    zIndex:0,
    duration:0.2
})
.to(profileImage,{
    opacity:1,
    x:10,
    rotation:360,
    filter:"blur(0px)",
    duration:0.3,
    zIndex:1
},0)
.to(callImage,{
    opacity:1,
    filter:"blur(0px)",
    x:-90,
    rotation:-360,
    duration:0.3,
    zIndex:1000
},0);

button.addEventListener("mouseenter",()=>{
    tl.play();

    
});

button.addEventListener("mouseleave",()=>{
    tl.reverse();

});



