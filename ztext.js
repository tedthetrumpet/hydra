//text disnae wurk
text = document.createTextNode("Hello World")

s0.init({src:text})

src(s0)
  .scale( () => a.fft[0] + 1)
  // .rotate(()=>Math.sin(time/8))
  .rotate(0.1, 0.05)
  .out()


  // image
  elem = document.createElement ('img')

  elem.src = '/Users/jsimon/Documents/\ Simon\'s\ folder/Graphics/livecode/hungarangda.png' // works

  s0.init({src:elem})

  src(s0)
    .scale( () => a.fft[0] + 1)
    // .rotate(()=>Math.sin(time/8))
    .rotate(0.1, 0.05)
    .out()
