function コロブチカを鳴らす () {
    music.setTempo(60)
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    動くやつ.change(LedSpriteProperty.X, -1)
})
function ブロックがとまった () {
    全体[動くやつ.get(LedSpriteProperty.Y)].push(game.createSprite(動くやつ.get(LedSpriteProperty.X), 動くやつ.get(LedSpriteProperty.Y)))
    if (全体[4].length == 5) {
        for (let 消すやつ of 全体.removeAt(4)) {
            消すやつ.delete()
        }
        全体.insertAt(0, [])
        for (let カウンター = 0; カウンター <= 4; カウンター++) {
            for (let 落ちるやつ of 全体[カウンター]) {
                落ちるやつ.change(LedSpriteProperty.Y, 1)
            }
        }
        music.playTone(659, music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Eighth))
        game.addScore(1)
    }
}
input.onButtonPressed(Button.B, function () {
    動くやつ.change(LedSpriteProperty.X, 1)
})
let 動くやつ: game.LedSprite = null
let 変数: game.LedSprite = null
let tmp: game.LedSprite = null
let 全体: game.LedSprite[][] = []
全体 = []
for (let カウンター = 0; カウンター <= 4; カウンター++) {
    tmp = game.createSprite(2, 0)
    全体.push([tmp])
    tmp.delete()
}
for (let 行 of 全体) {
    変数 = 行.pop()
}
動くやつ = game.createSprite(2, 0)
let 間隔 = 500
basic.forever(function () {
    コロブチカを鳴らす()
})
basic.forever(function () {
    while (動くやつ.get(LedSpriteProperty.Y) != 4 && !(led.point(動くやつ.get(LedSpriteProperty.X), 動くやつ.get(LedSpriteProperty.Y) + 1))) {
        動くやつ.change(LedSpriteProperty.Y, 1)
        basic.pause(間隔)
    }
    if (0 < 全体[0].length) {
        music.playTone(131, music.beat(BeatFraction.Breve))
        game.gameOver()
    }
    ブロックがとまった()
    動くやつ.set(LedSpriteProperty.X, 2)
    動くやつ.set(LedSpriteProperty.Y, 0)
    basic.pause(間隔)
    間隔 += -10
})
