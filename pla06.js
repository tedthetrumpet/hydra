osc(30,0.5,0.9)
  .rotate( () => Math.sin(time/5) + 2)
  .scale(0.4)
  .out(o1)

osc(31, 0.05, 0.8)
  .rotate( () => Math.sin(time/4) + 1)
  .scale(0.5)
  .pixelate(10,50)
  .kaleid(9)
  .modulateScrollY(o1, 0.1)
  .out()