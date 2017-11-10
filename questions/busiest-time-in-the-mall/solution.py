def find_busiest_period(data):
  n = len(data)
  busyTime = 0
  curVisitor = 0
  maxVisitor = 0
  for i in range(n):
    if data[i][2] == 1:
      curVisitor += data[i][1]
    elif data[i][2] == 0:
      curVisitor -= data[i][1]
    if (i < (n - 1)) and (data[i+1][0] == data[i][0]):
      continue
    if curVisitor > maxVisitor:
       busyTime = data[i][0]
       maxVisitor = curVisitor
  return busyTime

data = [ [1487799425, 14, 1],
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]

print find_busiest_period(data)
