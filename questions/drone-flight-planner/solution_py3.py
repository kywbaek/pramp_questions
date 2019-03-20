def calc_drone_min_energy(route):
    maxH = route[0][2]
    for i in range(1, len(route)):
        if route[i][2] > maxH:
            maxH = route[i][2]
    return maxH - route[0][2]


route = [[0, 2, 10],
         [3, 5, 0],
         [9, 20, 6],
         [10, 12, 15],
         [10, 10, 8]]

""" Expected output: 5 #
    less than 5 kWh and the drone would crash before the finish line.
    More than 5 kWh and it'd end up with excess energy."""
print(calc_drone_min_energy(route))
