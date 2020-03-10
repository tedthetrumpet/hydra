// shift for a line, ctrl for a block!
// start sc first, otherwise quiet?

// video
vid = document.createElement('video')
vid.autoplay = true // some problem here
vid.muted = true
vid.loop = true
s0.init({src: vid})

vid.src = '/Volumes/Finty/movies/lcodemovies/bacteria_friend_and_foe_512kb.mp4'; vid.play()
vid.src = '/Volumes/Finty/movies/lcodemovies/2018\ wttc\ wt\ final\ 2\ DING\ Ning\ HIRANO\ Miu\ NA\ no\ sound\ 33mins\ 02.mov'; vid.play()
vid.src = "/Volumes/Finty/movies/John\ Cage\ -\ Water\ Walk.mp4"; vid.play()
vid.src = "/Volumes/Finty/movies/Sharing\ Palmour.mov"; vid.play()
vid.src = "/Volumes/Finty/movies/lcodemovies/HowtheEye_edit.mov"; vid.play()

vid.currentTime = 200;
vid.currentTime = 0;

vid.pause()
vid.play()

jump = setInterval(() => {
  vid.currentTime = Math.random() * vid.duration
}, 1000/2.33)

clearInterval(jump)

src(s0).out() // just the vid
solid().out()

src(s0)
// .rotate(0,[0.4,-0.4])
// .colorama(0.3)
//.scrollX(0.1,0.1)
// .rotate(0,0.2)
// .modulate(voronoi())
//.modulateRotate(noise())
// .kaleid(1)
// .mask(voronoi())
// .mask(s0)
.modulate(s0)
.out()

//////////////

solid().out()
render(o0)

// maelstrom of code
s0.initScreen(0)
src(s0).scrollX(0.01).rotate(1, 0.01).out()
src(s0).scrollX( () => Math.sin(time/40)).rotate(1, 0.01).out() // variation

// fb pentangles
shape(5)
.add(o0, 0.94)
.scrollX(0,0.1)
.rotate(1,0.1)
// .repeat(2,2)
.out(o0)
