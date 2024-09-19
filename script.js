function loadingAnimation()
{
    
var tl = gsap.timeline()
tl.from('.line h1', {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5

})
tl.from('.line-part1, .line h2', {
    opacity: 0,
    onStart: function () {
        var timer = document.querySelector('.line-part1 h5')
        var grow = 0
        setInterval(function () {
            if (grow <= 100) {
                timer.innerHTML = grow++
            }
            else {
                grow = 100
            }

        }, 10)
    }
})
tl.to('.line h2',{
    animationName:'anim',
    opacity:0
})
tl.to('#loader', {
    opacity: 0,
    duration: 0.4,
    delay:2
})

tl.from('.page1',{
    y:1200,
    opacity:0,
    ease:Power4
})

tl.to('#loader',{
    display:'none'
})
tl.from('.nav',{
    opacity:0
})

tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1',{
 y:120,
 stagger:0.2
})
}
loadingAnimation()