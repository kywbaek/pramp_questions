def roundCoord(point):
  return (round(point[0],2),round(point[1],2))

def drawLine(x,y):
  print roundCoord(x), '-', roundCoord(y)

def drawHTree(c, l, d):
  if d==0:
    return
  drawLine((c[0]-l/2,c[1]),(c[0]+l/2,c[1]))
  drawLine((c[0]-l/2,c[1]+l/2),(c[0]-l/2,c[1]-l/2))
  drawLine((c[0]+l/2,c[1]+l/2),(c[0]+l/2,c[1]-l/2))
  print 'Drew the H-tree with center at', roundCoord(c)

  drawHTree((c[0]-l/2,c[1]+l/2), l/(2**0.5), d-1)
  drawHTree((c[0]-l/2,c[1]-l/2), l/(2**0.5), d-1)
  drawHTree((c[0]+l/2,c[1]+l/2), l/(2**0.5), d-1)
  drawHTree((c[0]+l/2,c[1]-l/2), l/(2**0.5), d-1)

drawHTree((0,0), 2, 3)
