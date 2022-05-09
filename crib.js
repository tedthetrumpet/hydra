(cmd shift p is command palette)
shift enter is single line
ctrl enter is a block
move line up/down is ctrl+command arrow

osc( frequency = 60, sync = 0.1, offset = 0.0 )
render( output buffer = o0 )
shape( sides = 3, radius = 60.0, smoothing = 0.01 )
solid( r = 0.0, g = 0.0, b = 0.0 , a = 1.0 )       // solid().out() go to black
gradient( speed = ? )
src( input ) [eg o0, s1]
noise( scale = 10.0, offset = 0.1 )
voronoi( scale = 5.0, speed = 0.3, blending = 0.3 )
.color( r, g, b ) [floats]
.colorama( amount = 0.005 )
.contrast( amount = 1.6 ) .saturate() .hue() .invert() .posterize()
.luma( threshold = 0.5 , tolerance = 0.1 ) // ???
.thresh( threshold = 0.5 , tolerance = 0.04 ) // ???
.add( texture, amount = 0.5 )
.blend( texture, amount )
.diff( texture )
.layer() [?]
.mult( texture, amount = 1.0 )
.modulate( texture, amount = 0.1 )
.modulateHue( color, amount = 1.0 )
.modulateKaleid( nSides = 4.0 ) [really?]
.modulatePixelate( multiple = 10.0, offset = 3.0 )
.modulateRotate( multiple = 1.0 , offset = 0.0 )
.modulateScale( multiple = 1.0, offset = 1.0 )
.modulateScrollX( multiple = ?, scrollX = 0.5, speed  = 0.0 )     .modulateScrollY( multiple = ?, scrollY = 0.5,  speed = 0.0 )
.kaleid( nSides = 4.0)
.rotate( angle = 10.0, speed = 0.0 )
.repeat(repeatX = 3, repeatY = 3, offsetX = 0, offsetY = 0 )
.scale( size = ?, xMult = 1.0 , yMult = 1.0 )
.pixelate( x = 20.0, y = 20.0 )
.scrollX( scrollX = 0.5, speed = 0.0 )     .scrollY( scrollY = 0.5, speed = 0.0 )
.out( output buffer ) [out: o0, o1, o2, o3 src: s0, s1, s2, s3]
Sequences
osc( [80, 100, 200, 50], 1 ).out(o0)     osc( [80, 100, 200, 50].fast(0.2), 1 ).out(o0)
Audio   [example]  osc(20, () => a.fft[0]/2, 0.5)
.hide()    .setBins( int )    .setCutoff( float )    .setScale( float )    .setSmooth( float )    .show()
Globals
time [example] osc( () => Math.sin(time) ).out(o0)     mouse [example] osc( () => mouse.x ).out(o0)
Sources
s0.initScreen(0)
s0.initCam(0)
src(s0).out()
a.show()
