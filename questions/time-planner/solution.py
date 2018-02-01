def meeting_planner(slotsA, slotsB, dur):
  a = b = 0
  while (a < len(slotsA)) and (b < len(slotsB)):
    durS = max(slotsA[a][0], slotsB[b][0])
    durE = min(slotsA[a][1], slotsB[b][1])
    if (durE - durS) >= dur:
      return [durS, durS + dur]
    if slotsA[a][1] < slotsB[b][1]:
      a += 1
    else:
      b += 1
  return []


slotsA = [[10, 50], [60, 120], [140, 210]]
slotsB = [[0, 15], [60, 70]]
dur = 8

print meeting_planner(slotsA, slotsB, dur)
