input.onButtonPressed(Button.A, function () {
    position_sur_x += -1
    led.unplot(position_sur_x, 0)
    if (position_sur_x < 0) {
        position_sur_x = 0
    }
    led.plot(position_sur_x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(position_sur_x, 0)
    position_sur_x += 1
    led.plot(position_sur_x, 0)
})
let position_sur_x = 0
position_sur_x = 2
led.plot(position_sur_x, 0)
