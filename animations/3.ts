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
    cycleRainbow()
})
