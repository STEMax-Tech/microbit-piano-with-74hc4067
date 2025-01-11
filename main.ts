function doSomething (num: number, num2: number, num3: number, num4: number) {
    pins.digitalWritePin(DigitalPin.P13, num)
    pins.digitalWritePin(DigitalPin.P14, num2)
    pins.digitalWritePin(DigitalPin.P15, num3)
    pins.digitalWritePin(DigitalPin.P16, num4)
    fValue = pins.analogReadPin(AnalogReadWritePin.P2)
    return fValue
}
let fValue = 0
basic.showIcon(IconNames.Heart)
let threshold = 950
music.setVolume(125)
basic.forever(function () {
    if (doSomething(0, 0, 0, 0) >= threshold) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 0, 0, 1) >= threshold) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 0, 1, 0) >= threshold) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 0, 1, 1) >= threshold) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 1, 0, 0) >= threshold) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 1, 0, 1) >= threshold) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 1, 1, 0) >= threshold) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(0, 1, 1, 1) >= threshold) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(1, 0, 0, 0) >= threshold) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(1, 0, 0, 1) >= threshold) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(1, 0, 1, 0) >= threshold) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(1, 0, 1, 1) >= threshold) {
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(1, 1, 0, 0) >= threshold) {
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (doSomething(1, 1, 0, 1) >= threshold) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.A)) {
        music.setVolume(Math.max(music.volume() - 5, 5))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.B)) {
        music.setVolume(Math.min(music.volume() + 5, 255))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
