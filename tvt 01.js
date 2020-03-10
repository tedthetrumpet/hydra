vid = document.createElement('video')
vid.autoplay = true
vid.muted = true
vid.loop = true
s0.init({src: vid})

vid.src = '/Volumes/Finty/movies/lcodemovies/tvtstrings.mov'; vid.play()

vid.currentTime = 20;

vid.currentTime = 0;

vid.pause()

vid.play()


src(s0).out() // vid
solid().out()

src(s0)
.colorama(0.3)
.kaleid(2)
// .scrollX(0.1,0.1)
// .rotate(0,0.1)
.modulate(s0)
.out()
