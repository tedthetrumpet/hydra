vid = document.createElement('video')
vid.autoplay = true // not sure this works any more
vid.muted = true
vid.loop = true
s0.init({src: vid})
vid.play() // seem to need this now

vid.src = '/Volumes/Finty/movies/lcodemovies/bacteria_friend_and_foe_512kb.mp4'

vid.src = '/Volumes/Finty/movies/lcodemovies/2018\ wttc\ wt\ final\ 2\ DING\ Ning\ HIRANO\ Miu\ NA\ no\ sound\ 33mins\ 02.mov'

vid.src = "/Volumes/Finty/movies/John\ Cage\ -\ Water\ Walk.mp4" // fab, keep, 9 mins

vid.src = "/Volumes/Finty/movies/Sharing\ Palmour.mov"

vid.src = "/Volumes/Finty/movies/lcodemovies/HowtheEye_edit.mov"

src(s0).out(0) // just the vid

src(s0)  // ding-miu
  .rotate(() => a.fft[0]/4, 0.04) // angle, speed
  .saturate(2)
  // .diff(osc(2, 0.3, 2)) // yes, lose that
  .modulateScale(o0, 0.3)
  .contrast(0.5)
  .out()

src(s0) // cage
  .rotate (() => a.fft[0]/8)
  .modulateScale(voronoi(2,0.1,0.1),1,0.1)
  .contrast( () => a.fft[0] + 0.05)
  .out()

src(s0) // sharing palmour and/or bacteria
  .scale(() => a.fft[0]*2 + 0.05)
  // .modulateScale(o0, 0.1)
  .modulateRotate(o0, 0.1)
  .rotate(() => a.fft[0]*2 + 0.05)
  .out()
a.setSmooth(0.8)

src(s0) // eye
  .colorama(0.3)
  .out()

solid(0.2,0.2,0.2).out()

// text
s1.initScreen(0)

src(s1)
  .scrollY(() => Math.tan(time*2), [0.01,-0.1,0.2].fast(1/2))
  // .scrollX(() => Math.tan(time/2), [0.01,-0.1].fast(1/3))
  .modulateScale(o0)
  // .modulateRotate(o0, () => Math.tan(time/4)*2)
  .thresh(0.5, 0.2)
  .colorama(() => Math.random()/5)
  .contrast(0.8)
  .out()

// simpler
src(s1)
  .scrollY(() => Math.sin(time/16)/8, [0.01,-0.1,0.2].fast())
  .scrollX(() => Math.sin(time/8), [0.01,-0.1].fast())
  //.modulateScale(o0)
  //.modulateRotate(o0, () => Math.tan(time/4)*2)
  .contrast(0.8)
  .out()

/////////////////
//Flor de fuego >>> Black Hole Glitch <<<
solid()
.add(src(o0).rotate(() => Math.sin(time * 0.001), -0.001)).diff(o0)
.modulate(src(o0),0.001).add(o1).luma(0.03)
.mult(shape(200).rotate(1,2).scale(()=>Math.random() * time * Math.sin(time*0.001) * 0.01,0.5)
.add(src(o0)).invert(1)).blend(src(o0),()=>Math.sin(0.5*time)*1.2).modulateRotate(o0,0.01).out()
osc(15,0.1,0.1).rotate(11).kaleid(3)
.hue(()=>Math.sin(0.001*time)).saturate(4).modulate(noise(8)).modulate(o1,0.01).luma(0.01).out(o1)

// Deme Té > Ariel Contini / CLiC
osc(1,3,()=>a.fft[0]*11)
.diff(osc(1,.03,10))
.add(osc(0.10,.000001,1))
.add(voronoi(()=>a.fft[0]*0.080,()=>a.fft[0]*.001110))
//.modulatePixelate(osc(1,1,1))
.mult(shape(111,.015,.18))//////
.blend(noise(.4,.8))
.color(2025,2)
.rotate(2,.2)
.modulateRotate(o0,10)
//.repeatX(3)
// .scale(4,1)
.color(10,1,200)
.add(noise(1000,1000))
//.diff(voronoi(100000,10))
//.invert()
//.modulate(osc(10,.1,100))
//.color(-2,-2,90)
.rotate(.01,.60)
.modulateKaleid(o0,2)
.out()
