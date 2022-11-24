let etat_actuel = 0
basic.forever(function () {
    servos.P0.setRange(60, 150)
    servos.P0.setAngle(150)
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    servos.P0.setRange(0, 180)
    if (etat_actuel == 1) {
        servos.P0.setAngle(60)
        basic.pause(2000)
        servos.P0.setAngle(150)
    }
})
