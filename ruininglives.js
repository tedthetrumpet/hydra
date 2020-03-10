// shift for a line, ctrl for a block!
// start sc first, otherwise quiet?
solid().out()

// simple
osc()
.colorama(() => Math.sin(time))
.modulateScale(voronoi())
.out()

// audio
osc()
.colorama(() => Math.sin(time))
.modulateScale(voronoi(() => a.fft[0] * 5 + 10, 0.1, 0.8))
// .modulate(o0)
.out()


// maelstrom of code
s0.initScreen(0)
src(s0).scrollX(0.01).rotate(1, 0.01).out()

src(s0).scrollX( () => Math.sin(time/40)).rotate(1, 0.01).out() // variation

// fb pentangles
shape(5)
.colorama(2)
.scrollX(0,0.1)
.add(o0, 0.94)
.rotate(1,0.5)
.modulate(o0)
.repeat(2,2)
.out(o0)


//demo

osc().rotate(1.2,[3,4,5]).colorama().modulate(o0).out()
