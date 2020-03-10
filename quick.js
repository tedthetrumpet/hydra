osc(2, 0.1, 1)
  .rotate( () => Math.sin(time/5) , 0.001)
  .scale( () => Math.sin(time/8) + 2)
  .modulateKaleid(o1)
  .out(o1)

voronoi( ()=> a.fft[0] + 10 , 0.01)
  .colorama( () => Math.sin(time/8) + 0.5)
  // .colorama(0.4)
  .rotate(() => Math.tan(time/19) / 5, 0.001)
  // .luma(0.4, 0.1)
  // .invert()
  .modulateKaleid(o1)
  // .modulateScrollY(o1)
  .scrollX( ()=> Math.sin(time/20) )
  .modulateRotate(o0, 0.4)
  .out(o2)

src(o1).mask(o2).out()

a.show()

noise()
  .scale( ()=> a.fft[0]/2 + 0.5 )
  .out(o2)
