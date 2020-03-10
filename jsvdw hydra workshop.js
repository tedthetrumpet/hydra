solid().out()
osc()
osc().out()
osc(200).out()
osc(20).out() // not 20 lines on screen!
osc(20,1).out()
osc(20,0.05).out()
osc(20,0.05,1).out()
osc(20,0.05,0.5).out()
osc(20,-0.1,0.5).out()

osc(30, -0.1, 0.4).rotate().out()
osc(30, 0.1, 0.4).rotate(3.14/2).out()
osc(30, 0.1, 0.4).rotate(3.14/2, 0.5).out()
osc(30, 0.1, 0.4).rotate(0, -0.1).out()
osc(30, 0.1, 0.4).rotate(0, -0.2).out()

// https://github.com/ojack/hydra/blob/master/docs/funcs.md
// geometry

osc(30, 0.1, 0.4).kaleid().out() // puzzle: how to make this go out, not in?
osc(30, 0.1, 0.4).kaleid(9).out()
osc(30, 0.1, 0.4).pixelate().out()
osc(30, 0.1, 0.4).pixelate(100).out()
osc(30, 0.1, 0.4).kaleid().pixelate().out()
osc(30, 0.1, 0.4).pixelate().kaleid().out() // order can make a difference

// sources
gradient().out()
gradient(1).kaleid().out()
shape().out()

// color

shape().color(0.1,0.3,0.4).out()
shape().colorama(0.5).out()
voronoi().colorama(0.5).out()

// global variables: using the mouse

osc().out()
osc( () => mouse.x ).out()
osc( () => mouse.x, 0.1 ).out()
osc( () => mouse.x * 0.1 + 20, 0.1, 1 ).out()
osc(20, 0.1, 1 ).rotate( () => mouse.x * 0.001 ).out()

// global variables: time

osc(20, 0.1, 0.5).kaleid( () => Math.sin(time/20) * 10 ).out()

// audio reactivity

a.show()
osc(100, 0.01, 1.4).rotate( () => a.fft[0] ).out(o0)
a.setSmooth(0.9)

// that's quite a lot
// next would be init the camera
// then the four outs, show blend() first, probably?

s0.initCam()
src(s0).out()
src(s0).rotate(0,1).repeat(3,7).out()

solid().out()
osc().out()
render()
osc().out(o0)
src(s0).out(o1)
voronoi().out(o2)
noise().out(o3)
solid().out(o2);solid().out(o3)

src(o0).blend(o1).out(o2)
src(o0).blend(o1, 0.8).out(o2)

// operators
src(o0).diff(o1).out(o2)
src(o0).mult(o1).out(o2)
src(o0).mask(o1).out(o2)

// all in one line to o0
osc().out(o0) // reminder
src(o0).blend(o1).out(o2)

// next step

src(s0).out(o1) // reminder
osc().blend(s0).out(o3)

solid().out(o1);solid().out(o2);solid().out(o3)

s0.initCam() // reminder
osc().blend(s0).out(o0)

render(o0) // default

// source can also be another window or even another person with hydra on the internet!
// but needs a bit of set up, leave that for now

// modulation
  // to do

// feedback
  // to do, need spare webcam ideally
