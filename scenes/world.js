function setWorld(worldState) {
    function makeTile(type) {
        return [
            sprite('tile'),
            {type}
        ]
    }

    const map = [
        addLevel([
            '                                                                                                                       ',
            '  cdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde      cddddddddddddddde',
            '  3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000      00000000000000002',
            '  3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000      00000000000000002',
            '  3000000000011111000000000000000111110000000000000000000000000000000011111000000111110000000000      00001111130000002',
            '       300002     300001111100002     30002         300000000000000002     30002      3000000002      3002     3002',
            '       300002     30002     30002     30002         300000000000000002     30002      3000000002      3002     3002',
            '       300002     30002     30002     30002         300000000000000002     30002      3002  0000      3002     3002',
            '       300002     30002     30002     300000002     300000000000000002     30002      3002  0000      3002     30000002',
            '       300002     30002     30002     300000002     300011100001110002     30002      3002   0000     3002     30000002',
            '       300002     30002     30002     111100002     3002   3002   3002     30002      3002   0000     3002     30000002',
            '       300002     300000000000002         30002     3002   3002   3002     30002      3002    0000    3002     30000002',
            '       300002     300000000000002         30002     3002   3002   3002     30002      3002    0000    3002     3002',
            '  cdddd000002     300000000000002         30002     3002   3002   3002     30002      3002     0000   3002     3002',
            '  30000000002     300001111100002         30002     3002   3002   3002     30002      3002     0000   3002     3002',
            '  30000000002     30002     30002         30002     3002   3002   3002     30002      3002      0000  0002     30000002',
            '  30000000002     30002     30002     300000002     3002   3002   3002    3000002     3002      0000000002     30000002',
            '  30000000002     30002     30002     300000002     3002   3002   3002    3000002     3002       000000002     30000002',
            '  11111111111     11111     11111     111111111     1111   1111   1111    1111111     1111       111111111     11111111',
        ], {
            tileWidth: 8,
            tileHeight: 8,
            tiles: {
                '0': () => makeTile('grass-m'),
                '1': () => makeTile('grass-water'),
                '2': () => makeTile('grass-r'),
                '3': () => makeTile('grass-l'),
                '4': () => makeTile('ground-m'),
                '5': () => makeTile('ground-r'),
                '6': () => makeTile('ground-l'),
                '7': () => makeTile('sand-1'),
                '8': () => makeTile('grass-mb'),
                '9': () => makeTile('grass-br'),
                'a': () => makeTile('grass-bl'),
                'b': () => makeTile('rock-water'),
                'c': () => makeTile('grass-tl'),
                'd': () => makeTile('grass-tm'),
                'e': () => makeTile('grass-tr')
            }
        }),
        addLevel([
            '                                                                                                                        ',
            '                                                                                                                        ',
            '       0000                                000                                                                                 ',
            '         00                                00                             00                                        00        ',
            '                                           0                              00                                       000       ',
            '                    77                                                                                                     ',
            '                    77                                                                     0000                               ',
            '                                                                            07              0000                            ',
            '                                                        000  00             77                                               ',
            '                             000                          0000              07                                 55              ',
            '                               00            7                              07         77                      66          ',
            '                                0           77                              000                                         ',
            '                                0            7                               0                  00                         ',
            '       00                       0                                                             000                             ',
            '        0000                    0       5                                                5                                   ',
            '  55                         0000       6     5        7          555                    6                                   ',
            '  66              77777        00             6     77            666                                                    ',
            '                                                                                                                        ',
            '                                                                                                                         ',
            '                                                                                                                        ',
        ], {
            tileWidth: 8,
            tileHeight: 8,
            tiles: {
                '0': () => makeTile(),
                '1': () => makeTile('bigtree-pt1'),
                '2': () => makeTile('bigtree-pt2'),
                '3': () => makeTile('bigtree-pt3'),
                '4': () => makeTile('bigtree-pt4'),
                '5': () => makeTile('tree-t'),
                '6': () => makeTile('tree-b'),
                '7': () => makeTile('bush'),
            }
        }),
        addLevel([
            '  000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 ',
            ' 0                                                                                               0   0                 0',
            ' 0                                                                                               0   0                 0',
            ' 0                                                                                               0   0                 0',
            ' 0                                                                                               0   0                 0',
            '  00000      00000               00000     000000000                  00000     000000           0   0     0000    0000 ',
            '      0      0   0     00000     0   0     0       0                  0   0     0    0           0   0     0  0    0    ',
            '      0      0   0     0   0     0   0     0000    0                  0   0     0    0    00     0   0     0  0    0000 ',
            '      0      0   0     0   0     0   0         0   0                  0   0     0    0    00     0   0     0  0        0',
            '      0      0   0     0   0     0   0         0   0                  0   0     0    0    0 0     0  0     0  0        0',
            '      0      0   0     00000     0   0         0   0    000    000    0   0     0    0    0 0     0  0     0  0        0',
            '      0      0   0               0    0000     0   0    0 0    0 0    0   0     0    0    0  0     0 0     0  0        0',
            '  00000      0   0               0       0     0   0    0 0    0 0    0   0     0    0    0  0     0 0     0  0    0000 ',
            ' 0           0   0               0       0     0   0    0 0    0 0    0   0     0    0    0   0     00     0  0    0    ',
            ' 0           0   0               0       0     0   0    0 0    0 0    0   0     0    0    0   0     00     0  0    0000 ',
            ' 0           0   0     00000     0    0000     0   0    0 0    0 0    0   0     0    0    0    0            0  0        0',
            ' 0           0   0     0   0     0   0         0   0    0 0    0 0    0  0       0   0    0    0            0  0        0',
            ' 0           0   0     0   0     0   0         0   0    0 0    0 0    0  0       0   0    0     0           0  0        0',
            ' 0           0   0     0   0     0   0         0   0    0 0    0 0    0  0       0   0    0     0           0  0        0',
            '  00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        ], {
            tileWidth: 8,
            tileHeight: 8,
            tiles: {
                '0': () => [
                    area({shape: new Rect(vec2(0), 16, 16)}),
                    body({isStatic: true})
                ],
                '1': () => [
                    area({
                        shape: new Rect(vec2(0), 8, 8),
                        offset: vec2(4, 4)
                    }),
                    body({isStatic: true})
                ],
                '2': () => [
                    area({shape: new Rect(vec2(0), 2, 16)}),
                    body({isStatic: true})
                ],
                '3': () => [
                    area({
                    shape: new Rect(vec2(0), 16, 20),
                    offset: vec2(0, -4)
                    }),
                    body({isStatic: true})
                ]
            }
        })
    ]

    for (const layer of map) {
        layer.use(scale(4))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }

    const hakuMon = add([sprite('haku'), area(), body({isStatic: true}), pos(3300,500), scale(1.5), 'Jazzzy'])
    hakuMon.flipX = true

    add([sprite('mini-mons'), area(), body({isStatic: true}), pos(600,400), scale(4), 'cat'])

    const spiderMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(2500,500), scale(4), 'spider'])
    spiderMon.play('spider')
    spiderMon.flipX = true

    const centipedeMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(300,100), scale(4), 'centipede'])
    centipedeMon.play('centipede')
    centipedeMon.flipX = true

    const grassMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(1750, 500), scale(4), 'grass'])
    grassMon.play('grass')

    const npc_start = add([ sprite('npc_start'), scale(3), pos(80,70), area(), body({isStatic: true}), 'npc_start'])

    const npc_end = add([ sprite('npc_end'), scale(3), pos(3750,480), area(), body({isStatic: true}), 'npc_end'])
    npc_end.flipX = true

    const player = add([
        sprite('player-down'),
        pos(100,100),
        scale(4),
        area(),
        body(),
        {
            currentSprite: 'player-down',
            speed: 350,
            increase_speed: 500,
            isInDialogue: false
        },
    ])

    let tick = 0
    onUpdate(() => {
        camPos(player.pos)
        tick++
        if ((isKeyDown('down') || isKeyDown('up')) 
        && tick % 20 === 0 
        && !player.isInDialogue) {
            player.flipX = !player.flipX
        }
    })

    function setSprite(player, spriteName) {
        if (player.currentSprite !== spriteName) {
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }

    onKeyDown('down', () => {
        if (player.isInDialogue) return
        setSprite(player, 'player-down')
        player.move(0, player.speed)
    })

    onKeyDown('up', () => {
        if (player.isInDialogue) return
        setSprite(player, 'player-up')
        player.move(0, -player.speed)
    })

    onKeyDown('left', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)

    })

    onKeyDown('right', () => {
        if (player.isInDialogue) return
        player.flipX = true
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })

    onKeyDown('s', () => {
        if (player.isInDialogue) return
        setSprite(player, 'player-down')
        player.move(0, player.increase_speed)
    })

    onKeyDown('w', () => {
        if (player.isInDialogue) return
        setSprite(player, 'player-up')
        player.move(0, -player.increase_speed)
    })

    onKeyDown('a', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.increase_speed, 0)
    })

    onKeyDown('d', () => {
        if (player.isInDialogue) return
        player.flipX = true
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.increase_speed, 0)
    })

    onKeyRelease('left', () => {
        player.stop()
    })

    onKeyRelease('right', () => {
        player.stop()
    })

    if (!worldState) {
        worldState = {
            playerPos : player.pos,
            faintedMons: []
        }
    }

    player.pos = vec2(worldState.playerPos)
    for (const faintedMon of worldState.faintedMons) {
        destroy(get(faintedMon)[0])
    }

    player.onCollide('npc_start', () => {
        player.isInDialogue = true
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 200),
            outline(5),
            pos(150, 500),
            fixed()
        ])
        const dialogue = "Welcome to the JASMINE Land!     Happy Anniversay Babe 0..0//"
        const content = dialogueBox.add([
            text('', 
            {
                size: 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10,10,10),
            pos(40,30),
            fixed()
        ])

        if (worldState.faintedMons < 4) {
            content.text = dialogue
        } else {
            content.text = "Did you defeat the Angry Girlfriend for me...(〒︿〒)"
        }

        onUpdate(() => {
            if (isKeyDown('space')) {
                destroy(dialogueBox)
                player.isInDialogue = false
            }
        })
    })

    player.onCollide('npc_end', () => {
        player.isInDialogue = true
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 200),
            outline(5),
            pos(150, 500),
            fixed()
        ])
        const dialogue = "Congratualtions on Defeating the Angry Girlfriend! I ROOOOOOOOOOVE YOU!"
        const content = dialogueBox.add([
            text('', 
            {
                size: 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10,10,10),
            pos(40,30),
            fixed()
        ])

        console.log(worldState.faintedMons.length)
        if (worldState.faintedMons.length > 4) {
            content.text = dialogue
        } else {
            content.text = "You defeated the Angry Girlfriend...but there are other monsters out there...(〒︿〒)"
        }

        onUpdate(() => {
            if (isKeyDown('space')) {
                destroy(dialogueBox)
                player.isInDialogue = false
            }
        })
    })

    function flashScreen() {
        const flash = add([rect(1280, 720), color(10,10,10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 0.5, (val) => flash.opacity = val, easings.easeInBounce)
    }

    function onCollideWithPlayer(enemyName, player, worldState) {
        player.onCollide(enemyName, () => {
            flashScreen()
            setTimeout(() => {
                worldState.playerPos = player.pos
                worldState.enemyName = enemyName
                go('battle', worldState) 
            }, 1000)
        })
    }



    onCollideWithPlayer('cat', player, worldState)
    onCollideWithPlayer('spider', player, worldState)
    onCollideWithPlayer('centipede', player, worldState)
    onCollideWithPlayer('grass', player, worldState)
    onCollideWithPlayer('Jazzzy', player, worldState)
}