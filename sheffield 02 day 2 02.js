solid().out()

render(o0)

shape(3, () => mouse.x/1000).out(o0)

a.show()

shape(3, () => a.fft[0]).out(o0)

a.setSmooth(0.94)

a.show()

a.setCutoff(2)

a.setScale(50)

zort = () => Math.sin(time/4) * 0.5 +  0.5
zort = (speed) => () => Math.tan(time/speed) * 0.5 +  0.5

shape(3, zort).out(o0)
shape(3, zort(3)).out(o0)
