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

// ojack demo of colour theory
render()
solid(1,0,0).out(o0)
solid(0,1,0).out(o1)
src(o0).blend(o1).out(o2) // average
solid(0.5,0.5,0).out(o3)

// ojack basic demo of modulate
render()
s0.initCam()
osc().out(o0)
src(s0).out(o1)
src(o1).modulate(o0).out(o2)

// ojack basic three (four) screen demo
render()
s0.initCam()
osc(80,0.1,0.9).rotate(0.1,0.05).out(o0)
src(s0).rotate(3.14).out(o1)
src(o0).diff(o1).out(o2)
src(o2).modulate(o2).out(o3)

// sierpinksi
shape()
.add(o0, 0.94)
.repeat(2,2)
.out(o0)
