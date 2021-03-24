// pin0=red
// pin1=green
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
// pin0=red
// pin1=green
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
	
})
