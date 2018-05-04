function getTimeCategory(time) {
    let timeCategory = '';
    const timeFormat = 'HH:mm:ss';

    if (
        time.isBetween(moment('00:00:00', timeFormat), moment('04:59:59', timeFormat)) ||
        time.isSame(moment('00:00:00', timeFormat)) ||
        time.isSame(moment('04:59:59', timeFormat))
    ) {
        timeCategory = 'Hello, night owl.';
    } else if (
        time.isBetween(moment('05:00:00', timeFormat), moment('11:59:59', timeFormat)) ||
        time.isSame(moment('05:00:00', timeFormat)) ||
        time.isSame(moment('11:59:59', timeFormat))
    ) {
        timeCategory = 'Good Morning.';
    } else if (
        time.isBetween(moment('12:00:00', timeFormat), moment('16:59:59', timeFormat)) ||
        time.isSame(moment('12:00:00', timeFormat)) ||
        time.isSame(moment('16:59:59', timeFormat))
    ) {
        timeCategory = 'Good Afternoon.';
    } else if (
        time.isBetween(moment('17:00:00', timeFormat), moment('23:59:59', timeFormat)) ||
        time.isSame(moment('17:00:00', timeFormat)) ||
        time.isSame(moment('23:59:59', timeFormat))
    ) {
        timeCategory = 'Good Evening.';
    }

    return timeCategory;
}

function hello() {
    var time = moment()
    var greeting = getTimeCategory(time);

    var containerGreeting = document.querySelector('.landing-title__greeting');
    var containerName = document.querySelector('.landing-title__name');
    containerGreeting.innerHTML = greeting;
    containerName.innerHTML = 'I am Sebastian.';

    // Wrap every letter in a span
    $('.landing-title__greeting').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\,|\.|\w)/g, "<span class='letter'>$&</span>"));
    });
    $('.landing-title__name').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\.|\w)/g, "<span class='letter'>$&</span>"));
    });


    anime.timeline({
        loop: false
    }).add({
        targets: '.landing-title',
        translateY: [-100, "-50%"],
        translateZ: 0,
        translateX: ["50%", "50%"],
        opacity: [0, 1],
        duration: 1400,
        easing: "easeOutExpo",
    });

    setTimeout(function () {
        anime.timeline({
                loop: false
            }).add({
                targets: '.landing-title__greeting .letter',
                translateY: [-100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: function (el, i) {
                    return 300 + 30 * i;
                }
        });
    }, 200);

    setTimeout (function () {
        anime.timeline({
                loop: false
            }).add({
                targets: '.landing-title__name .letter',
                translateY: [-100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: function (el, i) {
                    return 300 + 30 * i;
                }
        });
    }, 1400);


   // setTimeout(function () {
        anime.timeline({
            loop: false
        }).add({
            targets: '.landing-title__content',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 3000
        });
  //  },2800)
};

(function () {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            hello();
        }
    };

})();

(function () {
    // ParticlesJS Config.
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00838F"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 173,
                    "line_linked": {
                        "opacity": 0.1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
})();

(function cvButton() {
    console.log('da');

})();
