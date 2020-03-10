solid().out()
solid().out(o1)
solid().out(o2)
solid().out(o3)

shape(3, () => mouse.x/1000).out() // or * by .0001

osc(20)
  .colorama(() => mouse.x/1000)
  .rotate(() => mouse.y/1000 * -1 + 500)
  .repeat(15,16)
  .kaleid()
  .out(o0)

  // useful console.log(mouse.y)

voronoi()
  .kaleid( () => mouse.x/100 )
  .colorama( () => mouse.x/1000 )
  .scale(1/2)
  .modulate(o0)
  .out()

s0.initCam()
src(s0).out()

gradient()
  .layer(
    src(s0).luma(() => mouse.x/1000)
).out()

gradient(0.3)
  .layer(
    src(s0).mask(src(s0).thresh(0.1))
).out()

//
render()

gradient().out()
// only light parts of image
src(s0).thresh(() => mouse.x/1000).invert().out(o1)

src(s0).mask(o1).out(o2)

src(o0).layer(o2).out(o3)
