shape( ()=> Math.sin(time/4)*4, ()=> Math.sin(time/2)/4 + 0.5 )
  .scale(0.5)
  .colorama( ()=> 0.1 + Math.sin(time/5)/2)
  .modulateScale(o1)
  .out()

voronoi(2, 0.1)
  .out(o1)
