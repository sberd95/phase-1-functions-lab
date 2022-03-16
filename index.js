// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block <= 42) {
        return 42 - block
    }
    else {
        return block - 42
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264
    }
    else {
        return (start - end) * 264
    }
}

function calculatesFarePrice(start, end) {
    let dist = distanceTravelledInFeet(start, end)
    if (dist > 2500) {
        return 'cannot travel that far'
    }
    else if (dist <= 400) {
        return 0
    }
    else if (dist >= 2000) {
        return 25
    }
    else {
        return 0.02 * (dist-400)
    }
}