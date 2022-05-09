vid = document.createElement('video')
vid.autoplay = true // not sure this works any more
vid.muted = true
vid.loop = true

vid.src = '/Users/jsimon/Desktop/rebetiko/TA_MATOKLADA_SOU_LAMPOUN_HQ.mp4'

s0.init({src: vid})

vid.play() // seem to need this now
vid.pause()

vid.currentTime = 20; // maybe in seconds?
vid.currentTime = 43;
vid.currentTime = 79;
vid.currentTime = 0;

src(s0).out(0) // just the vid
solid().out()

// this works!
jump = setInterval(() => {
  vid.currentTime = Math.random() * vid.duration
}, 1000/2.33)

clearInterval(jump)

// yes!
jump = setInterval(() => {
  vid.currentTime = 79.5
}, 1500)

clearInterval(jump)
