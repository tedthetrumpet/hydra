render()

solid().out(o3)

shape().rotate(0,0.3).scale(1/2).out(o0)

s0.initCam()

src(s0).out(o1)

src(o0).diff(o1).out(o2)
