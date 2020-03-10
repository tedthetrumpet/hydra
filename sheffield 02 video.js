vid = document.createElement('video')
vid.autoplay = true // not sure this works any more
vid.muted = true
vid.loop = true
s0.init({src: vid})
vid.play() // seem to need this now

vid.src = '/Volumes/Finty/movies/lcodemovies/bacteria_friend_and_foe_512kb.mp4'; vid.play()
vid.src = '/Volumes/Finty/movies/lcodemovies/2018\ wttc\ wt\ final\ 2\ DING\ Ning\ HIRANO\ Miu\ NA\ no\ sound\ 33mins\ 02.mov'; vid.play()
vid.src = "/Volumes/Finty/movies/John\ Cage\ -\ Water\ Walk.mp4"; vid.play()
vid.src = "/Volumes/Finty/movies/Sharing\ Palmour.mov"; vid.play()
vid.src = "/Volumes/Finty/movies/lcodemovies/HowtheEye_edit.mov"; vid.play()

vid.currentTime = 20;

vid.currentTime = 0;

vid.pause()

vid.play()

// alt-cmd I for console, run code there to get a post

// setInterval(function, milliseconds)
// set that to a variable
// clearInterval
jump = setInterval(() => {
  vid.currentTime = Math.random() * vid.duration
}, 429)

clearInterval(jump)

src(s0).out() // just the vid
solid().out()

src(s0)
.colorama(0.3)
.kaleid(2)
.scrollX(0.1,0.1)
.rotate(0,0.1)
.modulate(s0)
.out() // just the vid
