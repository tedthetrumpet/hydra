// image
pic = document.createElement ('img')
s0.initImage('/Users/jsimon/Documents/\ Simon\'s\ folder/Graphics/livecode/hungarangda.png')
pic.src = '/Users/jsimon/Documents/\ Simon\'s\ folder/Graphics/livecode/hungarangda.png' // works
pic.src = '/Users/jsimon/Documents/\ Simon\'s\ folder/Graphics/livecode/spirangle.png' //
s0.init({src:pic})

src(s0)
  .scale( () => a.fft[0] + 1)
  .colorama( () => Math.sin(time/4))
  .rotate(0.1, 0.05)
  .out()



  s0.initImage("https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg")
  src(s0).out()
