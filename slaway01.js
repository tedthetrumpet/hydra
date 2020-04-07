vid = document.createElement('video')
vid.muted = true
vid.loop = true
vid.src = '/Volumes/Finty/movies/lcodemovies/slaway.mov';

s0.init({src: vid})

src(s0).out(); vid.play()

src(s0)
.scale(() => Math.random() / 70 + 1)
.scrollX(0.1,-0.05)
.rotate(10,0.1)
.colorama(() => Math.sin(time/8) / 9)
.kaleid(2)
.modulate(s0)
.out()

solid().out()

osc().out()

vid.currentTime = 0;
vid.pause();
vid.play();

voronoi()
.colorama(() => Math.sin(time/8))
.kaleid(9)
.rotate(10,0.5)
.modulateScale(o0)
.out()
