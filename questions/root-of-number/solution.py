def root(x, n):
  if x == 0:
    return 0
  hi = float(max(1,x))
  lo = 0
  md = (lo+hi)/2
  while lo+0.002 < hi:
    if md**n < x:
      lo = md
    elif md**n > x:
      hi = md
    else:   # md^n = x
      break
    md = (lo+hi)/2
  return round(md,3)
