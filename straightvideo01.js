vid = document.createElement('video')
vid.autoplay = true
vid.muted = true
vid.loop = true

vid.src = '/Users/jsimon/Documents/\ Simon\'s\ music/Projects\ by\ app/Hydra/hydra-examples-master/assets/jelly.webm'

vid.src = '/Volumes/Finty/movies/lcodemovies/bacteria_friend_and_foe_512kb.mp4'

vid.src = '/Volumes/Finty/movies/lcodemovies/2018\ wttc\ wt\ final\ 2\ DING\ Ning\ HIRANO\ Miu\ NA\ no\ sound\ 33mins\ 02.mov'

vid.currentTime = 20;

vid.currentTime = 0;

vid.pause()

vid.play()

s0.init({src: vid})

src(s0)
.repeat(2, 5, 0.1)
  .rotate(0, 0.02)
  .saturate(4)
//  .color(1.0, 0.7, -1)
  .scrollX(0, -0.01)
  .diff(osc(2, 0.3, 2))
//  .kaleid(3)
  .diff(src(s0).saturate().hue(0.2))
  .modulateScale(o0)
  .out()

src(s0)
  .rotate( ()=> a.fft[0] / 2, 0.1)
  // .modulateScale(o0)
  .scale(0.1)
  .out(o0)

  solid().out()
