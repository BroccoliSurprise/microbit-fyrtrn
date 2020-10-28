function pling () {
    led.setBrightness(255)
    radio.sendNumber(postNummer)
    basic.showNumber(postNummer)
    led.setBrightness(5)
}
input.onButtonPressed(Button.A, function () {
    postNummer += -1
    if (postNummer < 1) {
        postNummer = 1
    }
    led.stopAnimation()
    basic.showNumber(postNummer)
})
input.onButtonPressed(Button.AB, function () {
    pling()
})
input.onButtonPressed(Button.B, function () {
    postNummer += 1
    led.stopAnimation()
    basic.showNumber(postNummer)
})
let postNummer = 0
postNummer = 1
radio.setGroup(1)
radio.setTransmitPower(1)
led.setBrightness(5)
basic.showNumber(postNummer)
basic.forever(function () {
    pling()
    basic.pause(1000)
})
