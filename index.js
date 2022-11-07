function findMatching(drivers, name){
    return drivers.filter(x => x.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function (x){
        return x.startsWith(letters)
    })
}

function matchName(drivers, names){
    return drivers.filter(function (x){
        return x.name === names;
    })
}

