// kawung

shape(50).color(89/256,49/256,40/256).scale(1, 0.6, 1)
.diff(shape(50).color(239/256,172/256,84/256).scale(1, 0.6, 1).scrollX(0.1))
.diff(shape(50).color(240/256,171/256,85/256).scale(1, 0.6, 1).scrollX(-0.1))
.blend(shape(50).color(238/256,170/256,86/256).scale(1, 0.6, 1).scrollY(-0.25))
.blend(shape(50).color(238/256,170/256,86/256).scale(1, 0.6, 1).scrollY(0.25))
.repeat(2,2)
.repeat(2,2)
.repeat(2,2)
.out()
