render(o0)

solid().out(o0)
solid().out(o1)
solid().out(o2)
solid().out(o3)

s0.initCam()

osc(3,2).rotate(3.14/2).thresh().out(o0)

src(s0).out(o1)

src(o1).modulate(o0,0.9).out(o2)
