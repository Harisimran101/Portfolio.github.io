AOS.init({
    offset: 280,
});

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 130,
    loop: true,
    strings: [  
        '^700Haris', '^500a WebGL Dev', '^500 also Frontend Dev', 
    ],
    smartBackspace: true
});

LottieInteractivity.create({
mode:"seek",
player:'#firstLottie',
container: "#lottie-container",
actions: [
{
visibility:[0,1],
type: "seek",
frames: [0, 600],
},
]  
});