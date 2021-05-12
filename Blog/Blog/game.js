function whereAreYou (arr){
    let hidingSpot = arr.find(door => {
        return door.hiding === "Scooby"
    })

    if (hidingSpot === undefined){
        return 0
    } else{
        return hidingSpot.door
    }
}

function deBee (str){
    var wordsArr = str.split(" ")

    let result = wordsArr.filter(words => {
        return words.toLowerCase() !== "buzz"
    })

    return result.join(" ");
}

athleteArray.forEach(person => {
    person.win = function () {
        console.log(person.name + " won the " + person.sport + " event!")
    }
})

const unjumble = (word) => {
    return word.split("").reverse().join("")
}

const removeOdds = (numbers) => {
    return numbers.filter(num => {
        return !(num%2)
    })
}

const newAthlete = (name, age, sport, quote)
=> {
    return {
        name,
        age,
        sport,
        quote
    }
}