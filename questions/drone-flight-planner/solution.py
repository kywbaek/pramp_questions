def calc_drone_min_energy(route):
  maxH = route[0][2]
  for i in xrange(1,len(route)):
    if route[i][2] > maxH:
      maxH = route[i][2]
  return maxH - route[0][2]
