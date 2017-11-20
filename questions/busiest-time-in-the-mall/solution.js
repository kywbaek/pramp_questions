// Pseudocode
function findBusiestPeriod(data):
    n = data.length
    count = 0
    maxCount = 0
    maxPeriodTime = 0

    for i from 0 to n-1:
        // update count
        if (data[i][2] == 1): // visitors entered the mall
            count += data[i][1]
        else if (data[i][2] == 0): // visitors existed the mall
            count -= data[i][1]

        // check for other data points with the same timestamp
        if (i < n-1 AND data[i][0] == data[i+1][0]):
            continue

        // update maximum
        if (count > maxCount):
            maxCount = count
            maxPeriodTime = data[i][0]

    return maxPeriodTime
