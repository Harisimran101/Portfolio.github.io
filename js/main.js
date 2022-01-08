AOS.init({
    offset: 280,
});

var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });

  window.lazyLoadOptions = {
    // Your custom settings go here
  };
  // Listen to the initialization event
  // and get the instance of LazyLoad
  window.addEventListener(
    "LazyLoad::Initialized",
    function (event) {
      window.lazyLoadInstance = event.detail.instance;
    },
    false
  );

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