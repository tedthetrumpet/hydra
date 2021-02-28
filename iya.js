solid().out()
/////////////// 7calls

noise(9,0.05)
  .rotate(1,0.2)
  .color(()=>Math.sin(time/9),()=>Math.sin(time/7),()=>Math.sin(time/8))
  .out(o1)
shape(100)
  .scale(()=>Math.sin(time) / 16 + 2.5, 0.6)
  .mult(o1)
  .scale(0.6)
  .scrollY(-0.05,0)
  .modulate(o1)
  .out()

//

voronoi(10,0.1,0.4)
  .kaleid(8)
  .colorama([1,2,9,7,14,3].fast(4))
  .rotate(1,6)
  .modulate(o1)
  .out(o1)
shape(100)
  .scale(()=>Math.random() / 16 + 2, 0.6)
  .mult(o1)
  .modulateScale(o1)
  .scale(0.7,1,0.8)
  .out()

///////////////////// flok
voronoi(30,2,1)
  .colorama(0.3)
  .scrollX(1,0.15)
  .rotate(()=> Math.sin(time/4))
//.blend(o1)
  .modulate(o0)
  .out()

//////////////////// image
s0.initImage('/Users/jsimon/Documents/\ Simon\'s\ folder/Graphics/livecode/hungarangda.png')
s0.initImage('/Users/jsimon/Documents/\ Simon\'s\ folder/Graphics/livecode/spirangle.png')
s0.initImage("https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg")

src(s0)
  .scale( () => a.fft[0] + 1)
  .colorama( () => Math.sin(time/4))
  .rotate(0.1, 0.05)
  .out()
