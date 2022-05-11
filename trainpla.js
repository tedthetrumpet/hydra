solid().out()
/////////////// 7calls

osc(30,[0.05,-0.03].smooth(),8).diff(noise(0.001))
.modulateRotate(osc(40,0.05,0.7).rotate([0.7,0.8].fast(2),0.004))
.mask(shape([20,19,7,9].smooth(2).fast(2)).scale(2).diff(noise(0.01)))
.modulateScale(o0)
.out()

/////////////// stereo play

voronoi([9,3,11].smooth(2).fast(0.1),0.5)
.colorama([0.7,0.2,0.3].smooth())
.modulateScale(osc(30,0.05,[0.7,1]))
//.modulate(o0)
//.modulateRotate(o0,3)
.modulateScale(o0, -0.1)
.out()
