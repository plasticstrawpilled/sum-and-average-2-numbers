let n1 = game.askForNumber("number 1", 4)
let n2 = game.askForNumber("number 2", 4)
let sum = n1 + n2
let mean = sum / 2
game.splash("" + n1 + "+" + n2 + "=" + sum, "mean=" + mean)
