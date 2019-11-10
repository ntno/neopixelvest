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
    light.defaultStrip().setPixelColor(0, 0xFF0000)
    light.defaultStrip().setPixelColor(9, 0xFF0000)
    showStripPixel(0)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(2)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(3)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(4, 0xFF0000)
    light.defaultStrip().setPixelColor(5, 0xFF0000)
    showStripPixel(2)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(1)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(0)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(3)
    printStrip(light.defaultStrip())
    pause(pauseTime)
    clearStrips(true, true, true)
}
function showStrips() {
    rightStrip.show()
    leftStrip.show()
    light.defaultStrip().show()
}
function showStripPixel(idx: number) {
    rightStrip.setPixelColor(idx, 0xff0000)
    leftStrip.setPixelColor(idx, 0xff0000)
}
let leftStrip: light.NeoPixelStrip = null
let rightStrip: light.NeoPixelStrip = null
function printStrip(strip: light.NeoPixelStrip) {
    console.log("-------------")
    for (let i = 0; i < strip.length(); i++) {
        console.log(i + "," + strip.pixelColor(i));
    }
    console.log("-------------")
}
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
