// hack opacity in styles.less, see preferences > themes >your stylesheet
// to get audio into atom, launch from terminal :)
vid = document.createElement('video')
vid.autoplay = true // ok?
vid.muted = true
vid.loop = true

vid.src = '/Users/jsimon/Desktop/secondsunday/congruent_triangles_512kb.mp4'

vid.src = '/Users/jsimon/Desktop/secondsunday/journey_to_the_center_of_a_triangle_512kb.mp4'

vid.pause()
vid.currentTime = 0;
vid.play()

s0.init({src: vid})

src(s0).out(0) // just the vid
solid(0.2,0.2,0.2).out()


src(s0) // congruent triangles
  // .colorama([0.3,0.4].fast(2))
  .scale(01)
  // .scale(() => (Math.tan(time/8)/1) - 8)
  // .scale(()=>Math.random() / 16 + 2, 2)
  // .scale(()=>Math.sin(time/5)/2,()=>Math.sin(time/8)/5)
  // .modulateScale(voronoi(3,0.1,0.1),1,0.1)
  // .modulateKaleid(o0,3)
  // .kaleid([1,2,3,5])
  .out()
