function init() {
    canvas = document.getElementById("canvas"), content_container = document.getElementById("content_container"), anim_container = document.getElementById("animation_container"), dom_overlay_container = document.getElementById("dom_overlay_container");
    var t = AdobeAn.getComposition("1DFFE4F440F4433F950CBD9550B794D9"),
        i = t.getLibrary(),
        e = new createjs.LoadQueue(!1);
    e.installPlugin(createjs.Sound), e.addEventListener("fileload", function (i) {
        handleFileLoad(i, t)
    }), e.addEventListener("complete", function (i) {
        handleComplete(i, t)
    });
    var i = t.getLibrary();
    e.loadManifest(i.properties.manifest)
}

function handleFileLoad(t, i) {
    var e = i.getImages();
    t && "image" == t.item.type && (e[t.item.id] = t.result)
}

function handleComplete(t, e) {
    function n(t, i, e, n) {
        function s() {
            var s = o.properties.width,
                w = o.properties.height,
                _ = content_container.offsetWidth,
                c = content_container.offsetHeight,
                r = window.devicePixelRatio || 1,
                l = _ / s,
                p = c / w,
                y = 1;
            t && ("width" == i && a == _ || "height" == i && h == c ? y = f : e ? 1 == n ? y = l : 2 == n && (y = Math.max(l, p)) : (_ < s || c < w) && (y = Math.min(l, p))), canvas.width = s * r * y, canvas.height = w * r * y, canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = s * y + "px", canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = w * y + "px", stage.scaleX = r * y, stage.scaleY = r * y, a = _, h = c, f = y, stage.tickOnUpdate = !1, stage.update(), stage.tickOnUpdate = !0
        }
        var a, h, f = 1;
        window.addEventListener("resize", s), s()
    }
    var o = e.getLibrary(),
        s = e.getSpriteSheet(),
        a = t.target,
        h = o.ssMetadata;
    for (i = 0; i < h.length; i++) s[h[i].name] = new createjs.SpriteSheet({
        images: [a.getResult(h[i].name)],
        frames: h[i].frames
    });
    document.getElementById("_preload_div_").style.display = "none", canvas.style.display = "block", exportRoot = new o._06240_A6A6A1_KB_HTML5Canvas, stage = new o.Stage(canvas), stage.enableMouseOver(), exportRoot.framerate = o.properties.fps, fnStartAnimation = function () {
        stage.addChild(exportRoot), createjs.Ticker.setFPS(o.properties.fps), createjs.Ticker.addEventListener("tick", stage)
    }, n(!0, "width", !0, 1), AdobeAn.compositionLoaded(o.properties.id), fnStartAnimation()
}

function playSound(t, i) {
    return createjs.Sound.play(t, {
        interrupt: createjs.Sound.INTERRUPT_EARLY,
        loop: i
    })
}! function (t, i) {
    function e() {
        var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
    }

    function n(i, n, o) {
        var s = t.extend(i, t.MovieClip);
        return s.clone = e, s.nominalBounds = n, s.frameBounds = o, s
    }
    var o, s = {},
        a = {},
        h = {};
    s.ssMetadata = [{
        name: "_playoverlay",
        frames: [
            [0, 0, 650, 450]
        ]
    }, {
        name: "06240_atlas_",
        frames: [
            [1583, 474, 371, 518],
            [1173, 1224, 171, 290],
            [1903, 259, 140, 94],
            [1903, 355, 86, 39],
            [1346, 1261, 468, 91],
            [1346, 1354, 368, 56],
            [0, 1322, 309, 90],
            [859, 481, 722, 267],
            [0, 0, 857, 571],
            [354, 573, 352, 479],
            [0, 573, 352, 479],
            [859, 0, 485, 479],
            [1056, 750, 346, 472],
            [708, 750, 346, 472],
            [1346, 0, 415, 472],
            [1763, 432, 62, 37],
            [1763, 0, 253, 257],
            [1647, 994, 253, 252],
            [715, 1224, 227, 268],
            [944, 1224, 227, 262],
            [0, 1054, 234, 266],
            [479, 1224, 234, 260],
            [1404, 994, 241, 265],
            [236, 1054, 241, 258],
            [1763, 259, 138, 171],
            [2018, 0, 24, 26],
            [1903, 396, 84, 36],
            [1716, 1354, 251, 42]
        ]
    }], (s.playoverlayimage = function () {
        this.spriteSheet = a._playoverlay, this.gotoAndStop(0)
    }).prototype = o = new t.Sprite, (s.arm1 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(0)
    }).prototype = o = new t.Sprite, (s.arm2 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(1)
    }).prototype = o = new t.Sprite, (s.cal1 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(2)
    }).prototype = o = new t.Sprite, (s.cal2 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(3)
    }).prototype = o = new t.Sprite, (s.caltext1 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(4)
    }).prototype = o = new t.Sprite, (s.caltext2 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(5)
    }).prototype = o = new t.Sprite, (s.caltext3 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(6)
    }).prototype = o = new t.Sprite, (s.casio = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(7)
    }).prototype = o = new t.Sprite, (s.curtainsfull = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(8)
    }).prototype = o = new t.Sprite, (s.curtL1 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(9)
    }).prototype = o = new t.Sprite, (s.curtL2 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(10)
    }).prototype = o = new t.Sprite, (s.curtL3 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(11)
    }).prototype = o = new t.Sprite, (s.curtR1 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(12)
    }).prototype = o = new t.Sprite, (s.curtR2 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(13)
    }).prototype = o = new t.Sprite, (s.curtR3 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(14)
    }).prototype = o = new t.Sprite, (s.demo = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(15)
    }).prototype = o = new t.Sprite, (s.k1_d = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(16)
    }).prototype = o = new t.Sprite, (s.k1_u = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(17)
    }).prototype = o = new t.Sprite, (s.k2_d = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(18)
    }).prototype = o = new t.Sprite, (s.k2_u = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(19)
    }).prototype = o = new t.Sprite, (s.k3_d = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(20)
    }).prototype = o = new t.Sprite, (s.k3_u = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(21)
    }).prototype = o = new t.Sprite, (s.k4_d = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(22)
    }).prototype = o = new t.Sprite, (s.k4_u = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(23)
    }).prototype = o = new t.Sprite, (s.key_black = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(24)
    }).prototype = o = new t.Sprite, (s.text1 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(25)
    }).prototype = o = new t.Sprite, (s.text2 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(26)
    }).prototype = o = new t.Sprite, (s.text3 = function () {
        this.spriteSheet = a["06240_atlas_"], this.gotoAndStop(27)
    }).prototype = o = new t.Sprite, (s.playoverlay = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.playoverlayimage, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 650, 450), (s.Symbol1 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#666666").s().p("Eg3EAlWMAAAhKrMBuJAAAMAAABKrg"), this.shape.setTransform(352.5, 239), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = n(s.Symbol1, new t.Rectangle(0, 0, 705, 478), null), (s.Symbol46 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 253, 257), (s.Symbol45 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 253, 257), (s.Symbol44 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_u, this.instance.parent = this, this.instance.setTransform(0, 40.2), this.instance_1 = new s.key_black, this.instance_1.parent = this, this.instance_1.setTransform(33.9, 0), this.instance_2 = new s.k4_d, this.instance_2.parent = this, this.instance_2.setTransform(74.4, 21.2), this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 315.4, 292.2), (s.Symbol43 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k2_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 227, 268), (s.Symbol42 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k2_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 227, 268), (s.Symbol41 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k2_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 227, 268), (s.Symbol40 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k4_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 241, 265), (s.Symbol39 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k3_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 234, 266), (s.Symbol38 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k4_d, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 241, 265), (s.Symbol37 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_u, this.instance.parent = this, this.instance.setTransform(0, 40.2), this.instance_1 = new s.key_black, this.instance_1.parent = this, this.instance_1.setTransform(33.9, 0), this.instance_2 = new s.k4_u, this.instance_2.parent = this, this.instance_2.setTransform(74.4, 21.2), this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 315.4, 292.2), (s.Symbol36 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.key_black, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 138, 171), (s.Symbol35 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k2_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 227, 262), (s.Symbol34 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 253, 252), (s.Symbol33 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.key_black, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 138, 171), (s.Symbol32 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k4_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 241, 258), (s.Symbol31 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.key_black, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 138, 171), (s.Symbol30 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k3_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 234, 260), (s.Symbol29 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.key_black, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 138, 171), (s.Symbol28 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k2_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 227, 262), (s.Symbol27 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 253, 252), (s.Symbol26 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.key_black, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 138, 171), (s.Symbol25 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k4_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 241, 258), (s.Symbol24 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k2_u, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 227, 262), (s.Symbol23 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.caltext3, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 309, 90), (s.Symbol22 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#FF0000").s().p("ApcEJIAAoRIS5AAIAAIRg"), this.shape.setTransform(60.5, 26.5), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 121.1, 53), (s.Symbol20 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.caltext2, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 368, 56), (s.Symbol19 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#FF0000").s().p("AAlAtIgtgZQjKBkiLAyQgLgBgEgCQgFgCAAgPQAAgGExiaQjch3gjAAQgPAAgCgEQABgEgEgFQARg+CAA+QBEAiBmBCIAKAHIFsi4IAOAFQAGADAAAPQAAAXkMCKIg/AgQA3AeBcAzQCBBHA3AzIgEANQgFAHgQAAQiXhYidhXg"), this.shape.setTransform(37, 22), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 74, 44), (s.Symbol18 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.caltext1, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 468, 91), (s.Symbol15 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.cal2, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 86, 39), (s.Symbol14 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.cal1, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 140, 94), (s.Symbol12 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#000000").s().p("AmjC0IAAlnINHAAIAAFng"), this.shape.setTransform(42, 18), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 84, 36), (s.Symbol11 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.arm2, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 171, 290), (s.Symbol10 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.arm1, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 371, 518), (s.Symbol9 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.demo, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 62, 37), (s.Symbol7 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k4_u, this.instance.parent = this, this.instance.setTransform(0, 67.3), this.instance_1 = new s.key_black, this.instance_1.parent = this, this.instance_1.setTransform(25.5, 19.1), this.instance_2 = new s.k3_u, this.instance_2.parent = this, this.instance_2.setTransform(67.5, 47.6), this.instance_3 = new s.key_black, this.instance_3.parent = this, this.instance_3.setTransform(96.5, 0), this.instance_4 = new s.k2_u, this.instance_4.parent = this, this.instance_4.setTransform(136.1, 27.6), this.instance_5 = new s.k1_u, this.instance_5.parent = this, this.instance_5.setTransform(173.1, 17.2), this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 426.1, 325.3), (s.Symbol4 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.casio, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 722, 267), (s.Symbol3 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.curtR1, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 346, 472), (s.Symbol2 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.curtL1, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 352, 479), (s.Symbol1_1 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.curtainsfull, this.instance.parent = this, this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 857, 571), (s.StageBottom = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#073C00").s().p("AnzH0IAAvnIPnAAIAAPng"), this.shape.setTransform(50, 50), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 100, 100), (s.volcon5 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#CCCCCC").s().p("AggBZQAOgKALgMQARgVAGgdQACgKgBgIQgBgsgegeIgPgOIgBgJQAyASAKA1QAJApgRAmQgDAIgFAHQgIAMgKAKQgLAKgOAAg"), this.shape.setTransform(3.3, 9.9), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 6.7, 19.8), (s.volcon4 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#CCCCCC").s().p("AgWA/QADgJALgIQAEgEADgEQAGgLACgMQABgGAAgGIACgDQgEgkgcgWIABgGIAJgBQAXANAIAaIAEAJQAAAZgFAYQgFAXgUAKQgDABgEAAQgEAAgEgDg"), this.shape.setTransform(2.3, 6.6), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 4.7, 13.3), (s.volcon3 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#CCCCCC").s().p("AgNAhIAAgKIAFgEQAFgFACgFQACgFgBgJQgCgJgLgTQAMgCAHAKQAKAMgCAPIAAADIgBAAQAAAJgEAIQgGAMgMAAIgEgBg"), this.shape.setTransform(1.4, 3.4), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 2.9, 6.8), (s.volcon2 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#CCCCCC").s().p("AAIAbIAAgCIgBgBQgXgBgYAAIAAgDIAAgrIACAAIAAgCIAtgBIABgCIAegdIABAAQAEA2gCA7IgBACIgggfg"), this.shape.setTransform(4.1, 5.8), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 8.3, 11.6), (s.replay2 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#CCCCCC").s().p("AhXAAICuhjIAADHg"), this.shape.setTransform(8.8, 10), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 17.5, 20), (s.preload11 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.shape = new t.Shape, this.shape.graphics.f("#000000").s().p("Ah9B+IAAj7ID7AAIAAD7g"), this.shape.setTransform(12.6, 12.6), this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }).prototype = n(s.preload11, new t.Rectangle(0, 0, 25.3, 25.3), null), (s.Symbol16 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.Symbol14("synched", 0), this.instance.parent = this, this.instance.setTransform(22, 82, 1, 1, 0, 0, 0, 22, 82), this.timeline.addTween(t.Tween.get(this.instance).to({
            rotation: -15
        }, 2).to({
            regX: 21.9,
            rotation: -4.8
        }, 2).wait(1)), this.instance_1 = new s.Symbol15("synched", 0), this.instance_1.parent = this, this.instance_1.setTransform(36, 89, 1, 1, 0, 0, 0, 11, 7.5), this.timeline.addTween(t.Tween.get(this.instance_1).to({
            rotation: 7.3,
            x: 35,
            y: 92
        }, 2).to({
            regX: 10.9,
            rotation: 2.3,
            x: 35.6,
            y: 90
        }, 2).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 140, 120.5), (s.Symbol13 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.Symbol12("synched", 0), this.instance.parent = this, this.instance.setTransform(42, 18, 1, 1, 0, 0, 0, 42, 18), this.instance.alpha = 0, this.timeline.addTween(t.Tween.get(this.instance).wait(1).to({
            startPosition: 0
        }, 0).wait(1).to({
            startPosition: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 84, 36), (s.Symbol8 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.k1_u, this.instance.parent = this, this.instance.setTransform(0, 87.2), this.instance_1 = new s.key_black, this.instance_1.parent = this, this.instance_1.setTransform(30.5, 47), this.instance_2 = new s.Symbol7("synched", 0), this.instance_2.parent = this, this.instance_2.setTransform(285, 162.6, 1, 1, 0, 0, 0, 213, 162.6), this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 498, 339.2), (s.volcon1 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.preload11, this.instance.parent = this, this.instance.setTransform(12.6, 12.6, 1, 1, 0, 0, 0, 12.6, 12.6), this.instance.alpha = 0, this.timeline.addTween(t.Tween.get(this.instance).wait(3).to({
            alpha: 1
        }, 0).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 25.3, 25.3), (s.replay1 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.replay2("synched", 0), this.instance.parent = this, this.instance.setTransform(8.8, 10, 1, 1, 0, 0, 0, 8.8, 10), this.timeline.addTween(t.Tween.get(this.instance).to({
            alpha: .559
        }, 14).to({
            alpha: 1
        }, 15).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 17.5, 20), (s.Symbol17copy = function (i, e, n) {
        this.initialize(i, e, n, {}), this.frame_0 = function () {
            this.stop()
        }, this.frame_1 = function () {}, this.frame_79 = function () {
            this.stop()
        }, this.frame_80 = function () {}, this.frame_160 = function () {
            this.stop()
        }, this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(78).call(this.frame_79).wait(1).call(this.frame_80).wait(80).call(this.frame_160).wait(1)), this.instance = new s.Symbol22("synched", 0), this.instance.parent = this, this.instance.setTransform(43.5, 118.5, 1, 1, 0, 0, 0, 60.5, 26.5), this.instance.alpha = 0, this.instance_1 = new s.Symbol16("synched", 0), this.instance_1.parent = this, this.instance_1.setTransform(80.3, 74.5, 1, 1, 0, 0, 0, 70, 60.2), this.instance_1._off = !0, this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 37).to({
            state: [{
                t: this.instance_1
            }]
        }, 41).wait(82)), this.timeline.addTween(t.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(37).to({
            startPosition: 2
        }, 0).to({
            alpha: 0,
            startPosition: 3
        }, 41).wait(82)), this.instance_2 = new s.Symbol19("synched", 0), this.instance_2.parent = this, this.instance_2.setTransform(56, 165, 1, 1, 0, 0, 0, 37, 22), this.instance_2._off = !0, this.timeline.addTween(t.Tween.get(this.instance_2).wait(1).to({
            _off: !1
        }, 0).wait(37).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 41).wait(82)), this.instance_3 = new s.Symbol23("synched", 0), this.instance_3.parent = this, this.instance_3.setTransform(388.6, 139.5, 1, 1, 0, 0, 0, 154.5, 45), this.instance_3._off = !0, this.timeline.addTween(t.Tween.get(this.instance_3).wait(1).to({
            _off: !1
        }, 0).wait(37).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 41).wait(82))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(-17, 92, 121.1, 53), (s.Symbol17 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.frame_0 = function () {
            this.stop()
        }, this.frame_1 = function () {}, this.frame_79 = function () {
            this.stop()
        }, this.frame_80 = function () {}, this.frame_160 = function () {
            this.stop()
        }, this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(78).call(this.frame_79).wait(1).call(this.frame_80).wait(80).call(this.frame_160).wait(1)), this.instance = new s.Symbol22("synched", 0), this.instance.parent = this, this.instance.setTransform(43.5, 118.5, 1, 1, 0, 0, 0, 60.5, 26.5), this.instance.alpha = 0, this.instance_1 = new s.Symbol16("synched", 0), this.instance_1.parent = this, this.instance_1.setTransform(80.3, 74.5, 1, 1, 0, 0, 0, 70, 60.2), this.instance_1._off = !0, this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 39).to({
            state: [{
                t: this.instance_1
            }]
        }, 39).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 40).to({
            state: [{
                t: this.instance_1
            }]
        }, 40).wait(1)), this.timeline.addTween(t.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(39).to({
            startPosition: 4
        }, 0).to({
            alpha: 0
        }, 39).wait(1).to({
            alpha: 1,
            startPosition: 0
        }, 0).wait(40).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 40).wait(1)), this.instance_2 = new s.Symbol19("synched", 0), this.instance_2.parent = this, this.instance_2.setTransform(56, 165, 1, 1, 0, 0, 0, 37, 22), this.instance_2._off = !0, this.timeline.addTween(t.Tween.get(this.instance_2).wait(1).to({
            _off: !1
        }, 0).wait(39).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 39).wait(1).to({
            alpha: 1
        }, 0).wait(40).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 40).wait(1)), this.instance_3 = new s.Symbol18("synched", 0), this.instance_3.parent = this, this.instance_3.setTransform(380.1, 140, 1, 1, 0, 0, 0, 234, 45.5), this.instance_3._off = !0, this.instance_4 = new s.Symbol20("synched", 0), this.instance_4.parent = this, this.instance_4.setTransform(393.1, 140.5, 1, 1, 0, 0, 0, 184, 28), this.instance_4._off = !0, this.timeline.addTween(t.Tween.get(this.instance_3).wait(1).to({
            _off: !1
        }, 0).wait(39).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 39).to({
            _off: !0
        }, 1).wait(81)), this.timeline.addTween(t.Tween.get(this.instance_4).wait(80).to({
            _off: !1
        }, 0).wait(40).to({
            startPosition: 0
        }, 0).to({
            alpha: 0
        }, 40).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(-17, 92, 121.1, 53), (s.volumecontrolcopy = function (i, e, n) {
        this.initialize(i, e, n, {
            high: 1,
            med: 9,
            low: 19,
            off: 29
        }), this.frame_1 = function () {
            function t() {
                i.gotoAndStop("off")
            }
            this.stop();
            var i = this;
            currentVolume = .8, createjs.Sound.volume = currentVolume, this.button6.addEventListener("click", t)
        }, this.frame_9 = function () {
            function t() {
                i.gotoAndStop("high")
            }
            this.stop();
            var i = this;
            currentVolume = .4, createjs.Sound.volume = currentVolume, this.button14.addEventListener("click", t)
        }, this.frame_19 = function () {
            function t() {
                i.gotoAndStop("med")
            }
            this.stop();
            var i = this;
            currentVolume = .2, createjs.Sound.volume = currentVolume, this.button16.addEventListener("click", t)
        }, this.frame_29 = function () {
            function t() {
                i.gotoAndStop("low")
            }
            this.stop();
            var i = this;
            currentVolume = 0, createjs.Sound.volume = currentVolume, this.button18.addEventListener("click", t)
        }, this.timeline.addTween(t.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(8)), this.button6 = new s.volcon1, this.button6.name = "button6", this.button6.parent = this, this.button6.setTransform(10.6, 10.4, 1, 1, 0, 0, 0, 12.6, 12.6), new t.ButtonHelper(this.button6, 0, 1, 2, !1, new s.volcon1, 3), this.button14 = new s.volcon1, this.button14.name = "button14", this.button14.parent = this, this.button14.setTransform(10.6, 10.4, 1, 1, 0, 0, 0, 12.6, 12.6), new t.ButtonHelper(this.button14, 0, 1, 2, !1, new s.volcon1, 3), this.button16 = new s.volcon1, this.button16.name = "button16", this.button16.parent = this, this.button16.setTransform(10.6, 10.4, 1, 1, 0, 0, 0, 12.6, 12.6), new t.ButtonHelper(this.button16, 0, 1, 2, !1, new s.volcon1, 3), this.button18 = new s.volcon1, this.button18.name = "button18", this.button18.parent = this, this.button18.setTransform(10.6, 10.4, 1, 1, 0, 0, 0, 12.6, 12.6), new t.ButtonHelper(this.button18, 0, 1, 2, !1, new s.volcon1, 3), this.timeline.addTween(t.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.button6
            }]
        }, 1).to({
            state: [{
                t: this.button14
            }]
        }, 8).to({
            state: [{
                t: this.button16
            }]
        }, 10).to({
            state: [{
                t: this.button18
            }]
        }, 10).wait(8)), this.instance = new s.volcon5, this.instance.parent = this, this.instance.setTransform(17.5, 9.8, 1, 1, 0, 0, 0, 3.3, 9.8), new t.ButtonHelper(this.instance, 0, 1, 1), this.instance_1 = new s.volcon4, this.instance_1.parent = this, this.instance_1.setTransform(14.9, 9.7, 1, 1, 0, 0, 0, 2.3, 6.6), new t.ButtonHelper(this.instance_1, 0, 1, 1), this.instance_2 = new s.volcon3, this.instance_2.parent = this, this.instance_2.setTransform(12.5, 9.8, 1, 1, 0, 0, 0, 1.4, 3.4), new t.ButtonHelper(this.instance_2, 0, 1, 1), this.shape = new t.Shape, this.shape.graphics.f("#F8F8F8").s().p("AAAA6IACgBIAAACIgCgBgAgBg4IABgCIAAACg"), this.shape.setTransform(8.1, 9.8), this.timeline.addTween(t.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 8).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_2
            }]
        }, 10).to({
            state: []
        }, 10).wait(8)), this.instance_3 = new s.volcon2, this.instance_3.parent = this, this.instance_3.setTransform(4.2, 9.9, 1, 1, 0, 0, 0, 4.2, 5.8), this.instance_3._off = !0, new t.ButtonHelper(this.instance_3, 0, 1, 1), this.timeline.addTween(t.Tween.get(this.instance_3).wait(1).to({
            _off: !1
        }, 0).wait(36))
    }).prototype = o = new t.MovieClip, o.nominalBounds = null, (s.replay3 = function (i, e, n) {
        this.initialize(i, e, n, {}), this.instance = new s.replay1, this.instance.parent = this, this.instance.setTransform(8.8, 10, 1, 1, 0, 0, 0, 8.8, 10), this.timeline.addTween(t.Tween.get(this.instance).wait(1))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(0, 0, 17.5, 20), (s._06240_A6A6A1_KB_HTML5Canvas = function (i, e, n) {
        this.initialize(i, e, n, {
                start: 25,
                end: 2804
            }), this.frame_0 = function () {
                function t() {
                    i.playoverlay._off = !0, i.gotoAndPlay(25)
                }
                if (!0 === $.browser.mobile) {
                    this.stop();
                    var i = this;
                    this.playoverlay.addEventListener("click", t)
                } else this.gotoAndPlay(25)
            }, this.frame_25 = function () {
                function t() {
                    1 == i ? (n.gotoAndPlay(1), i = 2) : (n.gotoAndPlay(80), i = 1)
                }
                var i = 1,
                    e = this.s13,
                    n = this.cal;
                n.gotoAndStop(0), e.addEventListener("mousedown", t), playSound("calibornshort")
            }, this.frame_1635 = function () {
                function t() {
                    e.gotoAndPlay(1)
                }
                var i = this.s13_2,
                    e = this.cal2;
                i.addEventListener("mousedown", t)
            }, this.frame_2735 = function () {
                function t() {
                    createjs.Sound.stop(), e.gotoAndPlay(25)
                }

                function i() {
                    window.location = "./6244"
                }
                var e = this;
                this.replay3.addEventListener("click", t), this.s13_3.addEventListener("mousedown", i)
            }, this.frame_2804 = function () {
                this.stop()
            }, this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1610).call(this.frame_1635).wait(1100).call(this.frame_2735).wait(69).call(this.frame_2804).wait(604)), this.replay3 = new s.replay3, this.replay3.name = "replay3", this.replay3.parent = this, !0 === $.browser.mobile ? this.replay3.setTransform(29.8, 418.6, 3, 3, 0, 0, 0, 8.8, 10) : this.replay3.setTransform(9.8, 438.6, 1, 1, 0, 0, 0, 8.8, 10), this.replay3._off = !0, new t.ButtonHelper(this.replay3, 0, 1, 1), this.timeline.addTween(t.Tween.get(this.replay3).wait(2735).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 70).wait(603)), !0 === $.browser.mobile ? (this.playoverlay = new s.playoverlay("synched", 0), this.playoverlay.name = "playoverlay", this.playoverlay.parent = this, this.playoverlay.alpha = .8, this.timeline.addTween(t.Tween.get(this.playoverlay).wait(3408))) : (this.instance = new s.volumecontrolcopy, this.instance.parent = this, this.instance.setTransform(2, 1.5), this.timeline.addTween(t.Tween.get(this.instance).wait(3408))), this.cal = new s.Symbol17, this.cal.name = "cal", this.cal.parent = this, this.cal.setTransform(327.1, 460.9, 1, 1, 0, 0, 0, 307, 92.8), this.cal2 = new s.Symbol17copy, this.cal2.name = "cal2", this.cal2.parent = this, this.cal2.setTransform(327.1, 460.9, 1, 1, 0, 0, 0, 307, 92.8), this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.cal
                }]
            }, 25).to({
                state: [{
                    t: this.cal
                }]
            }, 1608).to({
                state: []
            }, 1).to({
                state: [{
                    t: this.cal2
                }]
            }, 1).to({
                state: []
            }, 1099).wait(674)), this.s13 = new s.Symbol13, this.s13.name = "s13", this.s13.parent = this, this.s13.setTransform(87, 530.5, 1, 1, 0, 0, 0, 42, 18), new t.ButtonHelper(this.s13, 0, 1, 2, !1, new s.Symbol13, 3), this.s13_2 = new s.Symbol13, this.s13_2.name = "s13_2", this.s13_2.parent = this, this.s13_2.setTransform(87, 530.5, 1, 1, 0, 0, 0, 42, 18), new t.ButtonHelper(this.s13_2, 0, 1, 2, !1, new s.Symbol13, 3), this.s13_3 = new s.Symbol13, this.s13_3.name = "s13_3", this.s13_3.parent = this, this.s13_3.setTransform(170, 530.5, 2.976, 1, 0, 0, 0, 42, 18), new t.ButtonHelper(this.s13_3, 0, 1, 2, !1, new s.Symbol13, 3), this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.s13
                }]
            }, 25).to({
                state: [{
                    t: this.s13
                }]
            }, 1608).to({
                state: []
            }, 1).to({
                state: [{
                    t: this.s13_2
                }]
            }, 1).to({
                state: [{
                    t: this.s13_2
                }]
            }, 1098).to({
                state: []
            }, 1).to({
                state: [{
                    t: this.s13_3
                }]
            }, 1).wait(673)), this.instance_1 = new s.text2,
            this.instance_1.parent = this, this.instance_1.setTransform(45, 512.5), this.instance_2 = new s.text1, this.instance_2.parent = this, this.instance_2.setTransform(18, 516.5), this.instance_3 = new s.text3, this.instance_3.parent = this, this.instance_3.setTransform(44, 509.5), this.timeline.addTween(t.Tween.get({}).to({
                state: [{
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }]
            }).to({
                state: [{
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }]
            }, 25).to({
                state: [{
                    t: this.instance_2
                }, {
                    t: this.instance_3
                }]
            }, 2710).wait(673)), this.instance_4 = new s.StageBottom("synched", 0), this.instance_4.parent = this, this.instance_4.setTransform(322.5, 880, 7.05, 8.6, 0, 0, 0, 50, 50), this.timeline.addTween(t.Tween.get(this.instance_4).wait(25).to({
                startPosition: 0
            }, 0).wait(3383)), this.instance_5 = new s.Symbol1_1("synched", 0), this.instance_5.parent = this, this.instance_5.setTransform(321.1, 224.1, 1, 1, 0, 0, 0, 428.5, 285.5), this.timeline.addTween(t.Tween.get(this.instance_5).wait(25).to({
                startPosition: 0
            }, 0).wait(132).to({
                startPosition: 0
            }, 0).to({
                alpha: 0
            }, 35).to({
                _off: !0
            }, 1).wait(3215)), this.instance_6 = new s.Symbol3("synched", 0), this.instance_6.parent = this, this.instance_6.setTransform(484.4, 229.4, 1, 1, 0, 0, 0, 173, 236), this.instance_6._off = !0, this.instance_7 = new s.curtR2, this.instance_7.parent = this, this.instance_7.setTransform(394.4, -21.6), this.instance_7._off = !0, this.instance_8 = new s.curtR3, this.instance_8.parent = this, this.instance_8.setTransform(404.4, -27.6), this.instance_8._off = !0, this.timeline.addTween(t.Tween.get(this.instance_6).wait(25).to({
                _off: !1
            }, 0).wait(257).to({
                x: 478.4,
                y: 232.4
            }, 0).wait(1).to({
                x: 499.4,
                y: 212.4
            }, 0).wait(1).to({
                x: 497.4,
                y: 214.4
            }, 0).wait(6).to({
                x: 547.4
            }, 0).to({
                _off: !0
            }, 15).wait(3103)), this.timeline.addTween(t.Tween.get(this.instance_7).wait(305).to({
                _off: !1
            }, 0).wait(11).to({
                x: 364.4
            }, 0).wait(2).to({
                x: 404.4,
                y: -31.6
            }, 0).wait(1).to({
                x: 401.4,
                y: -28.6
            }, 0).to({
                _off: !0
            }, 1).wait(3088)), this.timeline.addTween(t.Tween.get(this.instance_8).wait(320).to({
                _off: !1
            }, 0).wait(12).to({
                x: 434.4,
                y: -37.6
            }, 0).wait(10).to({
                x: 431.4
            }, 0).wait(1).to({
                x: 442.4,
                y: -6.6
            }, 0).wait(8).to({
                x: 532.4
            }, 0).wait(11).to({
                x: 602.4
            }, 0).wait(2).to({
                x: 652.4
            }, 0).to({
                _off: !0
            }, 12).wait(3032)), this.instance_9 = new s.Symbol2("synched", 0), this.instance_9.parent = this, this.instance_9.setTransform(163.4, 224.1, 1, 1, 0, 0, 0, 176, 239.5), this.instance_9._off = !0, this.instance_10 = new s.curtL2, this.instance_10.parent = this, this.instance_10.setTransform(-102.6, -25.4), this.instance_11 = new s.curtL3, this.instance_11.parent = this, this.instance_11.setTransform(-122.6, -25.4), this.instance_11._off = !0, this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.instance_9
                }]
            }, 25).to({
                state: [{
                    t: this.instance_9
                }]
            }, 258).to({
                state: [{
                    t: this.instance_9
                }]
            }, 2).to({
                state: [{
                    t: this.instance_9
                }]
            }, 1).to({
                state: [{
                    t: this.instance_9
                }]
            }, 9).to({
                state: [{
                    t: this.instance_9
                }]
            }, 7).to({
                state: [{
                    t: this.instance_9
                }]
            }, 1).to({
                state: [{
                    t: this.instance_9
                }]
            }, 1).to({
                state: [{
                    t: this.instance_10,
                    p: {
                        x: -102.6
                    }
                }]
            }, 2).to({
                state: [{
                    t: this.instance_10,
                    p: {
                        x: -92.6
                    }
                }]
            }, 12).to({
                state: [{
                    t: this.instance_11
                }]
            }, 8).to({
                state: [{
                    t: this.instance_11
                }]
            }, 2).to({
                state: [{
                    t: this.instance_11
                }]
            }, 6).to({
                state: [{
                    t: this.instance_11
                }]
            }, 11).to({
                state: [{
                    t: this.instance_11
                }]
            }, 8).to({
                state: [{
                    t: this.instance_11
                }]
            }, 10).to({
                state: []
            }, 13).to({
                state: []
            }, 3007).wait(25)), this.timeline.addTween(t.Tween.get(this.instance_9).wait(25).to({
                _off: !1
            }, 0).wait(258).to({
                x: 164.4,
                y: 221.1
            }, 0).wait(2).to({
                x: 161.4,
                y: 227.1
            }, 0).wait(1).to({
                x: 163.4,
                y: 224.1
            }, 0).wait(9).to({
                x: 133.4
            }, 0).wait(7).to({
                x: 137.4
            }, 0).wait(1).to({
                x: 135.4,
                y: 221.1
            }, 0).wait(1).to({
                x: 137.4,
                y: 224.1
            }, 0).to({
                _off: !0
            }, 2).wait(3102)), this.timeline.addTween(t.Tween.get(this.instance_11).wait(326).to({
                _off: !1
            }, 0).wait(2).to({
                x: -212.6
            }, 0).wait(6).to({
                x: -292.6
            }, 0).wait(11).to({
                x: -372.6,
                y: -45.4
            }, 0).wait(8).to({
                x: -392.6,
                y: -95.4
            }, 0).wait(10).to({
                x: -432.6
            }, 0).to({
                _off: !0
            }, 13).wait(3032)), this.instance_12 = new s.Symbol10("synched", 0), this.instance_12.parent = this, this.instance_12.setTransform(780.2, 624.5, 1, 1, 0, 0, 0, 185.5, 259), this.instance_12._off = !0, this.timeline.addTween(t.Tween.get(this.instance_12).wait(450).to({
                _off: !1
            }, 0).to({
                x: 541.2,
                y: 275.5
            }, 4).wait(1).to({
                x: 547.2,
                y: 272.5
            }, 0).wait(54).to({
                startPosition: 0
            }, 0).to({
                x: 847.2,
                y: 522.5
            }, 54).wait(106).to({
                y: 653.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 4).wait(3).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(2).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(5).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(6).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(21).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(8).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(8).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(2).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(4).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(11).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(2).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(16).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(3).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(4).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(4).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 1).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 1).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 1).wait(1).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(2).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(8).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 2).wait(10).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(7).to({
                x: 757.2,
                y: 555.5
            }, 0).to({
                x: 687.2,
                y: 543.5
            }, 3).wait(9).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 3).wait(28).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(16).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(11).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(18).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(12).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(11).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(13).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(11).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(5).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(15).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(22).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(16).to({
                x: 829.2,
                y: 611.5
            }, 0).to({
                x: 766.2,
                y: 551.5
            }, 2).wait(24).to({
                x: 736.2,
                y: 691.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 2).wait(15).to({
                startPosition: 0
            }, 0).to({
                x: 676.2,
                y: 751.5
            }, 5).wait(23).to({
                x: 736.2,
                y: 691.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 2).wait(16).to({
                startPosition: 0
            }, 0).to({
                x: 676.2,
                y: 751.5
            }, 5).wait(21).to({
                x: 736.2,
                y: 691.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 2).wait(8).to({
                x: 736.2,
                y: 691.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 2).wait(3).to({
                startPosition: 0
            }, 0).to({
                x: 676.2,
                y: 751.5
            }, 5).wait(29).to({
                x: 736.2,
                y: 691.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 2).wait(28).to({
                x: 736.2,
                y: 691.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 3).wait(5).to({
                startPosition: 0
            }, 0).to({
                x: 676.2,
                y: 751.5
            }, 5).wait(4).to({
                x: 656.2,
                y: 691.5
            }, 0).to({
                x: 576.2,
                y: 601.5
            }, 2).wait(12).to({
                x: 656.2,
                y: 691.5
            }, 0).to({
                x: 576.2,
                y: 601.5
            }, 2).wait(19).to({
                x: 656.2,
                y: 691.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(19).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(28).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(20).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(18).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(11).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(14).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(12).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 756.2,
                y: 541.5
            }, 2).wait(15).to({
                x: 796.2,
                y: 671.5
            }, 0).to({
                x: 646.2,
                y: 591.5
            }, 3).wait(31).to({
                startPosition: 0
            }, 0).to({
                x: 536.2,
                y: 276.5
            }, 12).wait(22).to({
                startPosition: 0
            }, 0).to({
                x: 846.2,
                y: 596.5
            }, 4).wait(83).to({
                y: 396.5
            }, 0).to({
                x: 516.2,
                y: 616.5
            }, 89).wait(1002).to({
                x: 514.2,
                y: 621.5
            }, 0).wait(1).to({
                x: 537.2,
                y: 611.5
            }, 0).wait(673)), this.instance_13 = new s.Symbol11("synched", 0), this.instance_13.parent = this, this.instance_13.setTransform(324.6, 541.4, 1, 1, 0, 0, 0, 85.5, 145), this.instance_13._off = !0, this.timeline.addTween(t.Tween.get(this.instance_13).wait(689).to({
                _off: !1
            }, 0).to({
                x: 305.6,
                y: 480.4
            }, 2).wait(1).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 305.6,
                y: 480.4
            }, 2).wait(7).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 249.6,
                y: 518.4
            }, 3).wait(14).to({
                startPosition: 0
            }, 0).to({
                y: 628.4
            }, 3).wait(28).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 310.6,
                y: 489.4
            }, 3).wait(16).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 249.6,
                y: 509.4
            }, 3).wait(10).to({
                startPosition: 0
            }, 0).to({
                y: 628.4
            }, 3).wait(26).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 379.6,
                y: 479.4
            }, 4).wait(9).to({
                startPosition: 0
            }, 0).to({
                y: 609.4
            }, 3).wait(22).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 110.6,
                y: 522.4
            }, 3).wait(24).to({
                x: 324.6,
                y: 541.4
            }, 0).to({
                x: 361.6,
                y: 471.4
            }, 3).wait(19).to({
                startPosition: 0
            }, 0).to({
                y: 611.4
            }, 3).wait(2).to({
                x: 82.6,
                y: 581.4
            }, 0).to({
                x: 42.6,
                y: 541.4
            }, 2).wait(25).to({
                x: 82.6,
                y: 581.4
            }, 0).to({
                x: 182.6,
                y: 521.4
            }, 3).wait(22).to({
                x: 152.6,
                y: 571.4
            }, 0).to({
                x: 122.6,
                y: 540.4
            }, 3).wait(39).to({
                x: 152.6,
                y: 571.4
            }, 0).to({
                x: 262.6,
                y: 510.4
            }, 3).wait(18).to({
                x: 272.6,
                y: 561.4
            }, 0).to({
                x: 319.6,
                y: 491.4
            }, 3).wait(5).to({
                x: 242.6,
                y: 571.4
            }, 0).to({
                x: 179.6,
                y: 521.4
            }, 2).wait(32).to({
                x: 242.6,
                y: 571.4
            }, 0).to({
                x: 111.6,
                y: 541.4
            }, 3).wait(10).to({
                startPosition: 0
            }, 0).to({
                x: 181.6,
                y: 621.4
            }, 4).wait(27).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 329.6,
                y: 501.4
            }, 2).wait(18).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 329.6,
                y: 501.4
            }, 3).wait(22).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 329.6,
                y: 501.4
            }, 3).wait(28).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 329.6,
                y: 501.4
            }, 2).wait(17).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 329.6,
                y: 501.4
            }, 2).wait(9).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 329.6,
                y: 501.4
            }, 2).wait(25).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 257.6,
                y: 513.4
            }, 2).wait(31).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 324.6,
                y: 495.4
            }, 2).wait(17).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 324.6,
                y: 495.4
            }, 2).wait(18).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 324.6,
                y: 495.4
            }, 2).wait(12).to({
                x: 348.6,
                y: 581.4
            }, 0).to({
                x: 324.6,
                y: 495.4
            }, 2).wait(24).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(32).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(8).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(14).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 3).wait(1).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(1).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(1).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(18).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 495.4
            }, 2).wait(8).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 2).wait(10).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 2).wait(1).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 2).wait(1).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 2).wait(3).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 2).wait(9).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 3).wait(6).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 3).wait(4).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 485.4
            }, 2).wait(12).to({
                x: 414.6,
                y: 575.4
            }, 0).to({
                x: 394.6,
                y: 595.4
            }, 2).wait(1894)), this.instance_14 = new s.Symbol9("synched", 0), this.instance_14.parent = this, this.instance_14.setTransform(356.4, 24.1, 1, 1, 0, 0, 0, 31, 18.5), this.instance_14._off = !0, this.instance_14.filters = [new t.ColorFilter(.46, .46, .46, 1, 0, 0, 0, 0)], this.instance_14.cache(-2, -2, 66, 41), this.timeline.addTween(t.Tween.get(this.instance_14).wait(269).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 186).wait(1079).to({
                _off: !1
            }, 0).wait(1874)), this.instance_15 = new s.Symbol37("synched", 0), this.instance_15.parent = this, this.instance_15.setTransform(-3.2, 381, 1, 1, 0, 0, 0, 157.7, 146.1), this.instance_16 = new s.Symbol44("synched", 0), this.instance_16.parent = this, this.instance_16.setTransform(-3.2, 381, 1, 1, 0, 0, 0, 157.7, 146.1), this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.instance_15
                }]
            }, 269).to({
                state: [{
                    t: this.instance_16
                }]
            }, 635).to({
                state: [{
                    t: this.instance_15
                }]
            }, 25).wait(2479)), this.instance_17 = new s.Symbol36("synched", 0), this.instance_17.parent = this, this.instance_17.setTransform(17, 291.4, 1, 1, 0, 0, 0, 69, 85.5), this.instance_17._off = !0, this.timeline.addTween(t.Tween.get(this.instance_17).wait(269).to({
                _off: !1
            }, 0).wait(3139)), this.instance_18 = new s.Symbol35("synched", 0), this.instance_18.parent = this, this.instance_18.setTransform(103.1, 364.4, 1, 1, 0, 0, 0, 113.5, 131), this.instance_19 = new s.Symbol42("synched", 0), this.instance_19.parent = this, this.instance_19.setTransform(103.1, 367.4, 1, 1, 0, 0, 0, 113.5, 134), this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.instance_18
                }]
            }, 269).to({
                state: [{
                    t: this.instance_19
                }]
            }, 582).to({
                state: [{
                    t: this.instance_18
                }]
            }, 24).to({
                state: [{
                    t: this.instance_19
                }]
            }, 82).to({
                state: [{
                    t: this.instance_18
                }]
            }, 38).to({
                state: [{
                    t: this.instance_19
                }]
            }, 67).to({
                state: [{
                    t: this.instance_18
                }]
            }, 11).wait(2335)), this.instance_20 = new s.Symbol34("synched", 0), this.instance_20.parent = this, this.instance_20.setTransform(153.1, 349.1, 1, 1, 0, 0, 0, 126.5, 126), this.instance_21 = new s.Symbol45("synched", 0), this.instance_21.parent = this, this.instance_21.setTransform(152.1, 351.6, 1, 1, 0, 0, 0, 126.5, 128.5), this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.instance_20
                }]
            }, 269).to({
                state: [{
                    t: this.instance_21
                }]
            }, 664).to({
                state: [{
                    t: this.instance_20
                }]
            }, 21).to({
                state: [{
                    t: this.instance_21
                }]
            }, 73).to({
                state: [{
                    t: this.instance_20
                }]
            }, 32).wait(2349)), this.instance_22 = new s.Symbol33("synched", 0), this.instance_22.parent = this, this.instance_22.setTransform(127.1, 268.4, 1, 1, 0, 0, 0, 69, 85.5), this.instance_22._off = !0, this.timeline.addTween(t.Tween.get(this.instance_22).wait(269).to({
                _off: !1
            }, 0).wait(3139)), this.instance_23 = new s.Symbol32("synched", 0), this.instance_23.parent = this, this.instance_23.setTransform(222.1, 332.1, 1, 1, 0, 0, 0, 120.5, 129), this.instance_23._off = !0, this.instance_24 = new s.Symbol40("synched", 0), this.instance_24.parent = this, this.instance_24.setTransform(219.1, 336.6, 1, 1, 0, 0, 0, 120.5, 132.5), this.timeline.addTween(t.Tween.get({}).to({
                state: []
            }).to({
                state: [{
                    t: this.instance_23
                }]
            }, 269).to({
                state: [{
                    t: this.instance_24
                }]
            }, 435).to({
                state: [{
                    t: this.instance_23
                }]
            }, 15).to({
                state: [{
                    t: this.instance_24
                }]
            }, 52).to({
                state: [{
                    t: this.instance_23
                }]
            }, 10).to({
                state: [{
                    t: this.instance_24
                }]
            }, 218).to({
                state: [{
                    t: this.instance_23
                }]
            }, 18).to({
                state: [{
                    t: this.instance_24
                }]
            }, 221).to({
                state: [{
                    t: this.instance_23
                }]
            }, 31).wait(2139)), this.timeline.addTween(t.Tween.get(this.instance_23).wait(269).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 435).wait(15).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 52).wait(10).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 218).wait(18).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 221).wait(31).to({
                _off: !1
            }, 0).wait(2139)), this.instance_25 = new s.Symbol31("synched", 0), this.instance_25.parent = this, this.instance_25.setTransform(196.1, 247.4, 1, 1, 0, 0, 0, 69, 85.5), this.instance_25._off = !0, this.timeline.addTween(t.Tween.get(this.instance_25).wait(269).to({
                _off: !1
            }, 0).wait(3139)), this.instance_26 = new s.Symbol30("synched", 0), this.instance_26.parent = this, this.instance_26.setTransform(289.1, 313.4, 1, 1, 0, 0, 0, 117, 130), this.instance_26._off = !0, this.instance_27 = new s.Symbol39("synched", 0), this.instance_27.parent = this, this.instance_27.setTransform(287.1, 317.4, 1, 1, 0, 0, 0, 117, 133), this.instance_27._off = !0, this.timeline.addTween(t.Tween.get(this.instance_26).wait(269).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 422).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(7).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 51).wait(16).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 252).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 81).wait(18).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(22).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(28).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(17).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(9).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(25).to({
                _off: !1
            }, 0).wait(2).to({
                startPosition: 0
            }, 0).wait(31).to({
                startPosition: 0
            }, 0).to({
                _off: !0
            }, 2).wait(17).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(18).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(12).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(24).to({
                _off: !1
            }, 0).wait(383).to({
                startPosition: 0
            }, 0).to({
                _off: !0
            }, 1).wait(1003).to({
                _off: !1
            }, 0).wait(673)), this.timeline.addTween(t.Tween.get(this.instance_27).wait(691).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 7).wait(51).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 16).wait(252).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(81).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 18).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 22).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 28).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 17).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 9).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 25).wait(35).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 17).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 18).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 12).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 24).wait(384).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1003).wait(673)), this.instance_28 = new s.Symbol29("synched", 0), this.instance_28.parent = this, this.instance_28.setTransform(268.1, 223.4, 1, 1, 0, 0, 0, 69, 85.5), this.instance_28._off = !0, this.timeline.addTween(t.Tween.get(this.instance_28).wait(269).to({
                _off: !1
            }, 0).wait(3139)), this.instance_29 = new s.Symbol28("synched", 0), this.instance_29.parent = this, this.instance_29.setTransform(356.1, 293.4, 1, 1, 0, 0, 0, 113.5, 131), this.instance_29._off = !0, this.instance_30 = new s.Symbol41("synched", 0), this.instance_30.parent = this, this.instance_30.setTransform(355.1, 296.4, 1, 1, 0, 0, 0, 113.5, 134), this.instance_30._off = !0, this.timeline.addTween(t.Tween.get(this.instance_29).wait(269).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 545).wait(8).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 56).wait(20).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 404).wait(12).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(19).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 15).wait(32).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(8).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(14).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(18).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(8).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(10).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(9).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(6).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(12).to({
                _off: !1
            }, 0).wait(1896)), this.timeline.addTween(t.Tween.get(this.instance_30).wait(814).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 8).wait(56).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 20).wait(404).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 12).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 19).wait(15).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 32).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 8).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 14).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 18).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 8).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 10).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 9).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 6).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 12).wait(1896)), this.instance_31 = new s.Symbol27("synched", 0), this.instance_31.parent = this, this.instance_31.setTransform(405.1, 278.1, 1, 1, 0, 0, 0, 126.5, 126), this.instance_31._off = !0, this.instance_32 = new s.Symbol46("synched", 0), this.instance_32.parent = this, this.instance_32.setTransform(405.1, 280.6, 1, 1, 0, 0, 0, 126.5, 128.5), this.instance_32._off = !0, this.timeline.addTween(t.Tween.get(this.instance_31).wait(269).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 848).wait(16).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 29).wait(17).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 27).wait(8).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 35).wait(28).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(6).to({
                _off: !1
            }, 0).wait(10).to({
                startPosition: 0
            }, 0).to({
                _off: !0
            }, 189).wait(32).to({
                _off: !1
            }, 0).wait(1885)), this.timeline.addTween(t.Tween.get(this.instance_32).wait(1117).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 16).wait(29).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 17).wait(27).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 8).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(35).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 28).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 6).wait(199).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 32).wait(1885)), this.instance_33 = new s.Symbol26("synched", 0), this.instance_33.parent = this, this.instance_33.setTransform(378.1, 196.4, 1, 1, 0, 0, 0, 69, 85.5), this.instance_33._off = !0, this.timeline.addTween(t.Tween.get(this.instance_33).wait(269).to({
                _off: !1
            }, 0).wait(3139)), this.instance_34 = new s.Symbol25("synched", 0), this.instance_34.parent = this, this.instance_34.setTransform(471.1, 258.1, 1, 1, 0, 0, 0, 120.5, 129), this.instance_34._off = !0, this.instance_35 = new s.Symbol38("synched", 0), this.instance_35.parent = this, this.instance_35.setTransform(470.1, 263.6, 1, 1, 0, 0, 0, 120.5, 132.5), this.instance_35._off = !0, this.timeline.addTween(t.Tween.get(this.instance_34).wait(269).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 404).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(5).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(6).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(21).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(7).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(8).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(11).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(16).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(8).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(10).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(7).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(9).to({
                _off: !1
            }, 0).wait(2522)), this.timeline.addTween(t.Tween.get(this.instance_35).wait(673).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 5).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 6).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 21).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 7).wait(4).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 8).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 11).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 16).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 3).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 4).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(1).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 1).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 2).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 8).wait(2).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 10).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 7).wait(3).to({
                _off: !1
            }, 0).to({
                _off: !0
            }, 9).wait(2522)), this.instance_36 = new s.key_black;
        this.instance_36.parent = this, this.instance_36.setTransform(382.1, 81.9), this.instance_36._off = !0, this.timeline.addTween(t.Tween.get(this.instance_36).wait(269).to({
            _off: !1
        }, 0).wait(3139)), this.instance_37 = new s.Symbol24("synched", 0), this.instance_37.parent = this, this.instance_37.setTransform(538.1, 237.4, 1, 1, 0, 0, 0, 113.5, 131), this.instance_37._off = !0, this.instance_38 = new s.Symbol43("synched", 0), this.instance_38.parent = this, this.instance_38.setTransform(539.1, 242.4, 1, 1, 0, 0, 0, 113.5, 134), this.instance_38._off = !0, this.timeline.addTween(t.Tween.get(this.instance_37).wait(269).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 620).wait(28).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(16).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(18).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(12).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(13).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(5).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(15).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(22).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(16).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(24).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 222).wait(19).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(28).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(20).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(18).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(14).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 3).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(15).to({
            _off: !1
        }, 0).wait(1920)), this.timeline.addTween(t.Tween.get(this.instance_38).wait(889).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 28).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 16).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 18).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 12).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 13).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 5).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 15).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 22).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 16).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 24).wait(222).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 19).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 28).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 20).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 18).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 14).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 15).wait(1920)), this.instance_39 = new s.Symbol8("synched", 0), this.instance_39.parent = this, this.instance_39.setTransform(710.6, 179.5, 1, 1, 0, 0, 0, 249, 169.6), this.instance_39._off = !0, this.timeline.addTween(t.Tween.get(this.instance_39).wait(269).to({
            _off: !1
        }, 0).wait(3139)), this.instance_40 = new s.Symbol4("synched", 0), this.instance_40.parent = this, this.instance_40.setTransform(328.4, 115.4, 1, 1, 0, 0, 0, 361, 133.5), this.instance_40._off = !0, this.timeline.addTween(t.Tween.get(this.instance_40).wait(269).to({
            _off: !1
        }, 0).wait(3139)), this.instance_41 = new s.Symbol1, this.instance_41.parent = this, this.instance_41.setTransform(315, 214, 1.03, .988, 0, 0, 0, 352.4, 239), this.instance_41.filters = [new t.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)], this.instance_41.cache(-2, -2, 709, 482), this.timeline.addTween(t.Tween.get(this.instance_41).wait(3408)), this.instance_42 = new s.Symbol1, this.instance_42.parent = this, this.instance_42.setTransform(322.4, 219.1, 1, 1.799, 0, 0, 0, 352.4, 239), this.instance_42.filters = [new t.ColorFilter(0, 0, 0, 1, 7, 60, 0, 0)], this.instance_42.cache(-2, -2, 709, 482), this.timeline.addTween(t.Tween.get(this.instance_42).wait(3408))
    }).prototype = o = new t.MovieClip, o.nominalBounds = new t.Rectangle(217.6, 72.6, 857, 1521), s.properties = {
        id: "1DFFE4F440F4433F950CBD9550B794D9",
        width: 650,
        height: 567,
        fps: 25,
        color: "#073C00",
        opacity: 1,
        manifest: [{
            src: "_playoverlay.png",
            id: "_playoverlay"
        }, {
            src: "06240_atlas_.png",
            id: "06240_atlas_"
        }, {
            src: "calibornshort.mp3",
            id: "calibornshort"
        }],
        preloads: []
    }, (s.Stage = function (t) {
        createjs.Stage.call(this, t)
    }).prototype = o = new createjs.Stage, o.setAutoPlay = function (t) {
        this.tickEnabled = t
    }, o.play = function () {
        this.tickEnabled = !0, this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }, o.stop = function (t) {
        t && this.seek(t), this.tickEnabled = !1
    }, o.seek = function (t) {
        this.tickEnabled = !0, this.getChildAt(0).gotoAndStop(s.properties.fps * t / 1e3)
    }, o.getDuration = function () {
        return this.getChildAt(0).totalFrames / s.properties.fps * 1e3
    }, o.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / s.properties.fps * 1e3
    }, i.bootcompsLoaded = i.bootcompsLoaded || [], i.bootstrapListeners || (i.bootstrapListeners = []), i.bootstrapCallback = function (t) {
        if (i.bootstrapListeners.push(t), i.bootcompsLoaded.length > 0)
            for (var e = 0; e < i.bootcompsLoaded.length; ++e) t(i.bootcompsLoaded[e])
    }, i.compositions = i.compositions || {}, i.compositions["1DFFE4F440F4433F950CBD9550B794D9"] = {
        getStage: function () {
            return exportRoot.getStage()
        },
        getLibrary: function () {
            return s
        },
        getSpriteSheet: function () {
            return a
        },
        getImages: function () {
            return h
        }
    }, i.compositionLoaded = function (t) {
        i.bootcompsLoaded.push(t);
        for (var e = 0; e < i.bootstrapListeners.length; e++) i.bootstrapListeners[e](t)
    }, i.getComposition = function (t) {
        return i.compositions[t]
    }
}(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn, canvas, stage, exportRoot, content_container, anim_container, dom_overlay_container, fnStartAnimation;