vid = document.createElement('video')
vid.autoplay = true
vid.muted = true
vid.loop = true
s0.init({src: vid})

vid.src = '/Volumes/Finty/movies/Sharing\ Palmour.mov'; vid.play()

vid.currentTime = 200;
vid.currentTime = 0;

vid.pause()
vid.play()

src(s0).out() // vid
solid().out()

src(s0)
.scrollX(0.1,0.1)
.rotate(() => Math.sin(time/10),0.1)
.modulateScale(s0)
.out()
