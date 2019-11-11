function clearStrips(right: boolean, left: boolean, ring: boolean) {
    if (right) {
        rightStrip.clear()
    }
    if (left) {
        leftStrip.clear()
    }
    if (ring) {
        light.defaultStrip().clear()
    }
}
function cylon(pauseTime: number) {
    clearStrips(false, true, true)
    light.defaultStrip().setPixelColor(0, 0xFF0000)
    light.defaultStrip().setPixelColor(9, 0xFF0000)
    showStripPixel(3, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(2, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(1, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(0, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(4, 0xFF0000)
    light.defaultStrip().setPixelColor(5, 0xFF0000)
    showStripPixel(-1, 0)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(-1, 1)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(-1, 2)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(-1, 3)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, false, true)
    light.defaultStrip().setPixelColor(0, 0xFF0000)
    light.defaultStrip().setPixelColor(9, 0xFF0000)
    showStripPixel(-1, 3)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(-1, 2)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(-1, 1)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(-1, 0)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(4, 0xFF0000)
    light.defaultStrip().setPixelColor(5, 0xFF0000)
    showStripPixel(0, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(1, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(2, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)

    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(3, -1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
}
function showStrips() {
    rightStrip.show()
    leftStrip.show()
    light.defaultStrip().show()
}
function showStripPixel(rightIdx: number, leftIdx: number) {
    if (rightIdx >= 0) rightStrip.setPixelColor(rightIdx, 0xff0000)
    if (leftIdx >= 0) leftStrip.setPixelColor(leftIdx, 0xff0000)
}
function printStrip(strip: light.NeoPixelStrip) {
    console.log("-------------")
    for (let i = 0; i < strip.length(); i++) {
        console.log(i + "," + strip.pixelColor(i));
    }
    console.log("-------------")
}

let leftStrip: light.NeoPixelStrip = null
let rightStrip: light.NeoPixelStrip = null
rightStrip = light.createStrip(pins.A1, 4)
leftStrip = light.createStrip(pins.A6, 4)
let frameTime = 300
forever(function () {
    if (input.switchRight()) {
        leftStrip.showAnimationFrame(light.rainbowAnimation)
        rightStrip.showAnimationFrame(light.rainbowAnimation)
        light.showAnimationFrame(light.rainbowAnimation)
    } else {
        cylon(frameTime)
    }
})
