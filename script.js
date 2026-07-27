const button = document.getElementById("btn");

const profileImage = document.getElementById("profile-img");
const callImage = document.getElementById("call-img");

const text = document.getElementById("text");


// button.addEventListener("mouseenter", () => {
//     console.log("it's activated")
//     profileImage.classList.add("activeProfile");
//     callImage.classList.add("activeCall");
//     text.classList.add('activeText');
// })

// button.addEventListener("mouseleave", () => {
//     console.log("it's removed");
//     profileImage.classList.remove("activeProfile");
//     callImage.classList.remove("activeCall");
//     text.classList.remove('activeText');
// })


const tl = gsap.timeline({ paused: true });

tl.to(text,{
    x: 50,
    opacity:1,
    zIndex:0,
    duration:0.2
})
.to(profileImage,{
    opacity:1,
    x:10,
    rotation:360,
    filter:"blur(0px)",
    duration:0.6,
    zIndex:1
},0)
.to(callImage,{
    opacity:1,
    filter:"blur(0px)",
    x:-90,
    rotation:-360,
    duration:0.6,
    zIndex:1000
},0);

button.addEventListener("mouseenter",()=>{
    tl.play();
});

button.addEventListener("mouseleave",()=>{
    tl.reverse();
});