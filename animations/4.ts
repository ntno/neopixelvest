function cylon(pauseTime: number) {
    hue = 255
    brightness = 255
    light.defaultStrip().setPixelColor(0, 0xFF0000)
    light.defaultStrip().setPixelColor(9, 0xFF0000)
    showStripPixel(0, 0)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(1, 1)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(2, 2)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(3, 3)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(4, 0xFF0000)
    light.defaultStrip().setPixelColor(5, 0xFF0000)
    showStripPixel(0, 0)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(3, 0xFF0000)
    light.defaultStrip().setPixelColor(6, 0xFF0000)
    showStripPixel(1, 1)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(2, 0xFF0000)
    light.defaultStrip().setPixelColor(7, 0xFF0000)
    showStripPixel(2, 2)
    pause(pauseTime)
    clearStrips(true, true, true)
    light.defaultStrip().setPixelColor(1, 0xFF0000)
    light.defaultStrip().setPixelColor(8, 0xFF0000)
    showStripPixel(3, 3)
    pause(pauseTime)
    clearStrips(true, true, true)
}

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

function cycleRainbow() {
    for (let index = 0; index <= 9; index++) {
        updateHue()
        light.defaultStrip().setPixelColor(index, light.hsv(hue, 255, brightness))
        showStripPixel(-1, index % 4)
        showStripPixel(index % 4, -1)
        pause(10)
    }
    updateBrightness()
}

function updateBrightness() {
    brightness = (brightness + 1) % 255
    if (brightness <= 100) {
        brightness = brightness + 100
    }
}

function updateHue() {
    hue = (hue + 1) % 255
}

function showStripPixel(rightIdx: number, leftIdx: number) {
    if (rightIdx >= 0) rightStrip.setPixelColor(rightIdx, light.hsv(hue, 255, brightness))
    if (leftIdx >= 0) leftStrip.setPixelColor(leftIdx, light.hsv(hue, 255, brightness))
}

let leftStrip: light.NeoPixelStrip = null
let rightStrip: light.NeoPixelStrip = null
let brightness = 0
let hue = 0

rightStrip = light.createStrip(pins.A1, 4)
leftStrip = light.createStrip(pins.A6, 4)
hue = 255
brightness = 100

for (let index = 0; index <= 9; index++) {
    light.defaultStrip().setPixelColor(index, light.hsv(hue, 255, brightness))
}

forever(function () {
    if (input.switchRight()) {
        cycleRainbow()
    } else {
        cylon(300)
    }
})
