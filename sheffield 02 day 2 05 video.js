// actually totally nothing new here really
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true

vid.src = "/Users/jsimon/Documents/ Simon's music/Projects by app/Hydra/hydra-examples-master/assets/jelly.webm"

vid.pause()

// use video within hydra
s0.init({src: vid})

src(s0)
  .rotate(0, 0.2)
  .repeat(5, 3, 0.5)
  .saturate(3.0)
//  .color(1.0, 0.7, -1)
  .scrollX(0, -0.1)
  .diff(osc(2, 0.3, 2))
//  .kaleid(3)
  .diff(src(s0).saturate().hue(0.2))
  .out()

src(s0).out()
