input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < randint(1, 5); index++) {
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.NorthEast)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.SouthEast)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.SouthWest)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.NorthWest)
    }
    tilfeldigTall = randint(0, 7)
    for (let indeks = 0; indeks <= tilfeldigTall; indeks++) {
        piler[indeks].showImage(0)
        basic.pause(200)
    }
    for (let index = 0; index < 10; index++) {
        basic.clearScreen()
        basic.pause(100)
        piler[tilfeldigTall].showImage(0)
        basic.pause(100)
    }
})
let tilfeldigTall = 0
let piler: Image[] = []
piler = [
images.arrowImage(ArrowNames.North),
images.arrowImage(ArrowNames.NorthEast),
images.arrowImage(ArrowNames.East),
images.arrowImage(ArrowNames.SouthEast),
images.arrowImage(ArrowNames.South),
images.arrowImage(ArrowNames.SouthWest),
images.arrowImage(ArrowNames.West),
images.arrowImage(ArrowNames.NorthWest)
]
basic.showArrow(ArrowNames.North)
