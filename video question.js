vid = document.createElement('video')
vid.autoplay = true
vid.muted = true
vid.loop = true
vid.src = '/Users/jsimon/Documents/\ Simon\'s\ music/Projects\ by\ app/Hydra/hydra-examples-master/assets/jelly.webm'

s0.init({src: vid})

src(s0).out()

vid.currentTime = 3;

solid().out()

console.log(2+2)

console.log(time%10)

a.show()

test =  () => { if(a.fft[0] > 0.01) return 1
  return 0}

test =  () => { if(a.fft[0] > 0.01) vid.currentTime = 0
  vid.currentTime = 1}

console.log(test())
