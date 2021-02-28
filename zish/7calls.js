voronoi(5,0.5,2)
  .mult(o1)
  .out()

osc()
  .out(o1)

voronoi(4,0.4,2)
  .out(o1)






//

shape(100)
  .scale(()=>Math.sin(time) / 16 + 2.5, 0.6)
  .mult(o1)
  .scale(0.6)
  .scrollY(-0.05,0)
  .modulate(o1)
  .out()
noise(9,0.05)
  .rotate(1,0.2)
  .color(()=>Math.sin(time/9),()=>Math.sin(time/7),()=>Math.sin(time/8))
  .out(o1)

solid().out()


///////////////

shape(100)
  .scale(()=>Math.random() / 16 + 2, 0.6)
  .mult(o1)
  .modulateScale(o1)
  .scale(0.7,1,0.8)
  .out()
voronoi(10,0.1,0.4)
  .kaleid(8)
  .colorama([1,2,9,7,14,3].fast(4))
  .rotate(1,6)
  .modulate(o1)
  .out(o1)


solid().out()

///////////////
// default
gradient(5).mask(voronoi(),3,0.5).invert([0,1]).out()

// algae pulse
osc(10,-0.25,1).color(0,0,1).saturate(2).kaleid(50)
  .mask(noise(25,2).modulateScale(noise(0.25,0.05)))
  .modulateScale(osc(6,-0.5,2).kaleid(50))
  .mult(osc(3,-0.25,2).kaleid(50))
  .scale(0.5,0.5,0.75)
  .out()





///////////////
osc(10,0.1,() => Math.sin(time/15) * 10)
  .rotate( () => Math.tan(time/17) / 2 , 1)
  .modulateKaleid(o0,[7,9])
  .modulate(o1)
  .out()

solid().out()

shape([7,8,9].fast(0.5))
  .scrollX(() => Math.sin(time) / 40)
  .scrollY(() => Math.sin(time + 1) / 30)
  .rotate(1,0.1)
  .scale(0.7)
  .out(o1)
