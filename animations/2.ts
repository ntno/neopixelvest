function cycleRainbow () {
    for (let index = 0; index <= 9; index++) {
        updateHue()
        light.defaultStrip().setPixelColor(index, light.hsv(hue, 255, brightness))
        pause(10)
    }
    updateBrightness()
}

function updateBrightness () {
    brightness = (brightness + 1) % 255
    if (brightness <= 100) {
        brightness = brightness + 100
    }
}

function updateHue () {
    hue = (hue + 1) % 255
}

let brightness = 0
let hue = 0
hue = 255
brightness = 100

for (let index = 0; index <= 9; index++) {
    light.defaultStrip().setPixelColor(index, light.hsv(hue, 255, brightness))
}

forever(function () {
    cycleRainbow()
})
