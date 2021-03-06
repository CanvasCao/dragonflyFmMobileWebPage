/**
 * Created by Administrator on 2016/8/3.
 */
function preloadComplete() {
    preload_part1 ? preload_part2 ? preload_part3 || (preload_part3 = !0, $("#sceneEnd").css({backgroundImage: "url(" + $(preloadQueue.getResult("end_background")).attr("src") + ")"}), $(".glassSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("glassSprite")).attr("src") + ")"}), $(".shareLogo1Sprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("sharelogo1_sprite")).attr("src") + ")"}), $(".shareLogo2Sprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("sharelogo2_sprite")).attr("src") + ")"}), $(".shareLogo3Sprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("sharelogo3_sprite")).attr("src") + ")"}), $(".ledSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("led_sprite")).attr("src") + ")"}), 3 == pageStatus && InitSceneEnd(), $("#loading").fadeOut(300)) : (preload_part2 = !0, $(".capDropSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("cap_drop_sprite")).attr("src") + ")"}), $(".capSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("cap_sprite")).attr("src") + ")"}), $(".explosionSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("explosion_sprite")).attr("src") + ")"}), $(".thorSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("thor_sprite")).attr("src") + ")"}), $(".thorDropSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("thor_drop_sprite")).attr("src") + ")"}), $(".hawkeysSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("hawkeys_sprite")).attr("src") + ")"}), $(".ironSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("iron_sprite")).attr("src") + ")"}), $(".hulkASprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("hulk_a_sprite")).attr("src") + ")"}), $(".hulkBSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("hulk_b_sprite")).attr("src") + ")"}), $(".ultronEyeSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("ultron_eye_sprite")).attr("src") + ")"}), $("#sceneHero > .animation1 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation1_glasscrack")).attr("src") + ")"}), $("#sceneHero > .animation2 .glasscrack1").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation2_glasscrack1")).attr("src") + ")"}), $("#sceneHero > .animation2 .glasscrack2").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation2_glasscrack2")).attr("src") + ")"}), $("#sceneHero > .animation2 .glasscrack3").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation2_glasscrack3")).attr("src") + ")"}), $("#sceneHero > .animation2 .glasscrack4").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation2_glasscrack4")).attr("src") + ")"}), $("#sceneHero > .animation2 .glasscrack5").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation2_glasscrack5")).attr("src") + ")"}), $("#sceneHero > .animation3 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation3_glasscrack")).attr("src") + ")"}), $("#sceneHero > .animation4 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation4_glasscrack")).attr("src") + ")"}), $("#sceneHero > .animation5 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation5_glasscrack")).attr("src") + ")"}), $("#sceneHero .ultron").css({backgroundImage: "url(" + $(preloadQueue.getResult("ultron")).attr("src") + ")"}), $("#sceneHero .ultron .light").css({backgroundImage: "url(" + $(preloadQueue.getResult("ultron_light")).attr("src") + ")"}), $("#sceneHero > .animation5 .iconBody").css({backgroundImage: "url(" + $(preloadQueue.getResult("ironman_body")).attr("src") + ")"}), 2 == pageStatus && InitSceneHero(), $("#loading").fadeOut(300)) : (preload_part1 = !0, $(".fireSprite").css({backgroundImage: "url(" + $(preloadQueue.getResult("fire_sprite")).attr("src") + ")"}), Init(), $("#loading").fadeOut(300))
}
function animationFire() {
    var e = $("#sceneFire .animatedFire");
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        14 > a ? (e.removeClass("fire_" + a).addClass("fire_" + (a + 1)), e.attr("data-frame", a + 1)) : 38 > a ? e.attr("data-frame", a + 1) : (e.removeClass("fire_14").addClass("fire_1"), e.attr("data-frame", 1))
    }
}
function animationShare() {
    var e = animationSceneEndShareLogo1, a = animationSceneEndShareLogo2;
    if (e.is(":visible")) {
        var n = parseFloat(e.attr("data-frame")), t = n + .45;
        12 > n ? (e.removeClass(function (e, a) {
            return (a.match(/(^|\s)sharelogo1_\S+/g) || []).join(" ")
        }).addClass("sharelogo1_" + parseInt(t)).attr("data-frame", t), a.removeClass(function (e, a) {
            return (a.match(/(^|\s)sharelogo2_\S+/g) || []).join(" ")
        }).addClass("sharelogo2_" + parseInt(t)).attr("data-frame", t)) : (e.removeClass("sharelogo1_" + n).addClass("sharelogo1_1").attr("data-frame", 1), a.removeClass("sharelogo2_" + n).addClass("sharelogo2_1").attr("data-frame", 1))
    }
    if (e = animationSceneEndShareLogo3, e.is(":visible")) {
        var n = parseInt(e.attr("data-frame"));
        24 > n ? (e.removeClass("sharepage2_" + n).addClass("sharepage2_" + (n + 1)), e.attr("data-frame", n + 1)) : 99 > n ? e.attr("data-frame", n + 1) : (e.removeClass("sharepage2_24").addClass("sharepage2_1"), e.attr("data-frame", 1))
    }
}
function animationLoading() {
    var e = $("#loading .animation");
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        10 > a ? (e.removeClass("loading_" + a).addClass("loading_" + (a + 1)), e.attr("data-frame", a + 1)) : (e.removeClass("loading_" + a).addClass("loading_1"), e.attr("data-frame", 1))
    }
}
function InitAnimation(e, a, n) {
    e.stop(!0, !0).css({display: "none"}).attr("data-frame", 1).removeClass(function (e, a) {
        return (a.match(n) || []).join(" ")
    }).addClass(a + "_1")
}
function animation1Loop() {
    var e = animationSceneHeroCap;
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        22 > a && (e.removeClass("cap_" + a).addClass("cap_" + (a + 1)), e.attr("data-frame", a + 1), 12 == a ? ($("#sceneHero > .animation1 .glasscrack").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300)) : 21 == a && (animationLock = !1, $("#canvas .wrapper .copy").delay(1e3).fadeOut(500, function () {
            $("#canvas .wrapper .hits2").fadeIn(500)
        })))
    }
    if (e = animationSceneHeroCapDrop, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        24 > a ? (1 == a && animationSceneHeroCap.fadeOut(0), e.removeClass("cap_drop_" + a).addClass("cap_drop_" + (a + 1)), e.attr("data-frame", a + 1)) : e.fadeOut(0)
    }
}
function animation2Loop() {
    var e = animationSceneHeroExplosion1;
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        9 > a ? (e.removeClass("explosion1_" + a).addClass("explosion1_" + (a + 1)), e.attr("data-frame", a + 1), 1 == a && ($("#sceneHero > .animation2 .glasscrack1").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 150))) : e.fadeOut(0, function () {
            animationSceneHeroCapDrop.fadeIn(0), animationSceneHeroExplosion2.fadeIn(0)
        })
    }
    if (e = animationSceneHeroExplosion2, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        15 > a ? (e.removeClass("explosion2_" + a).addClass("explosion2_" + (a + 1)), e.attr("data-frame", a + 1), 1 == a && ($("#sceneHero > .animation2 .glasscrack2").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 150))) : e.fadeOut(0, function () {
            animationSceneHeroExplosion3.fadeIn(0)
        })
    }
    if (e = animationSceneHeroExplosion3, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        10 > a ? (e.removeClass("explosion3_" + a).addClass("explosion3_" + (a + 1)), e.attr("data-frame", a + 1), 1 == a && ($("#sceneHero > .animation2 .glasscrack3").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 150))) : e.fadeOut(0, function () {
            animationSceneHeroExplosion4.fadeIn(0)
        })
    }
    if (e = animationSceneHeroExplosion4, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        9 > a ? (e.removeClass("explosion1_" + a).addClass("explosion1_" + (a + 1)), e.attr("data-frame", a + 1), 1 == a && ($("#sceneHero > .animation2 .glasscrack4").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 150))) : e.fadeOut(0, function () {
            animationSceneHeroExplosion5.fadeIn(0)
        })
    }
    if (e = animationSceneHeroExplosion5, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        15 > a ? (e.removeClass("explosion2_" + a).addClass("explosion2_" + (a + 1)), e.attr("data-frame", a + 1), 1 == a && ($("#sceneHero > .animation2 .glasscrack5").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 150))) : e.fadeOut(0, function () {
            animationLock = !1, $("#canvas .wrapper .copy").delay(1e3).fadeOut(500, function () {
                $("#canvas .wrapper .hits2").fadeIn(500)
            })
        })
    }
}
function animation3Loop() {
    var e = animationSceneHeroThor;
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        28 > a ? (e.removeClass("thor_" + a).addClass("thor_" + (a + 1)), e.attr("data-frame", a + 1), 1 == a ? createjs.Sound.play("audio_thor") : 4 == a && ($("#sceneHero > .animation3 .glasscrack").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300))) : 52 > a ? e.removeClass(function (e, a) {
            return (a.match(/(^|\s)thor_\S+/g) || []).join(" ")
        }).addClass("thor_" + (a - 24 + 1)).attr("data-frame", a + 1) : 76 > a && (e.removeClass(function (e, a) {
            return (a.match(/(^|\s)thor_\S+/g) || []).join(" ")
        }).addClass("thor_" + (a - 48 + 1)).attr("data-frame", a + 1), 75 == a && (animationLock = !1, $("#canvas .wrapper .copy").delay(2e3).fadeOut(500, function () {
            $("#canvas .wrapper .hits2").fadeIn(500)
        })))
    }
    if (e = animationSceneHeroThorDrop, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        34 > a && (e.removeClass("thor_drop_" + a).addClass("thor_drop_" + (a + 1)), e.attr("data-frame", a + 1), 33 == a && e.fadeOut(0, function () {
            animationLock = !1, $("#canvas .wrapper .copy").delay(1e3).fadeOut(500, function () {
                $("#canvas .wrapper .hits2").fadeIn(500)
            })
        }))
    }
}
function animation4Loop() {
    var e = animationSceneHeroHawkeys;
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        12 > a ? (e.removeClass("hawkeys_" + a).addClass("hawkeys_" + (a + 1)), e.attr("data-frame", a + 1), 7 == a && (animationSceneHeroThor.fadeOut(0), animationSceneHeroThorDrop.fadeIn(0), $("#sceneHero > .animation4 .glasscrack").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300))) : e.fadeOut(0)
    }
}
function animation5Loop() {
    var e = animationSceneHeroIron;
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        40 > a ? (e.removeClass("iron_" + a).addClass("iron_" + (a + 1)), e.attr("data-frame", a + 1), 35 == a && ($("#sceneHero > .animation5 .glasscrack").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300))) : 65 > a ? e.attr("data-frame", a + 1) : 82 > a ? (65 == a && $("#sceneHero > .animation5 .iconBody").fadeOut(500), e.removeClass(function (e, a) {
            return (a.match(/(^|\s)iron_\S+/g) || []).join(" ")
        }).addClass("iron_" + (82 - a)), e.attr("data-frame", a + 1)) : e.fadeOut(0, function () {
            animationLock = !1, $("#canvas .wrapper .copy").delay(1e3).fadeOut(500, function () {
                $("#canvas .wrapper .hits2").fadeIn(500)
            })
        })
    }
}
function animation6Loop() {
    var e = animationSceneHeroHulk1;
    if (e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        15 > a ? (e.removeClass("hulk_a_" + a).addClass("hulk_a_" + (a + 1)), e.attr("data-frame", a + 1), 4 == a && ($("#sceneHero > .animation6 .glasscrack").fadeIn(0), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300))) : e.fadeOut(0, function () {
            animationSceneHeroHulk2.fadeIn(0)
        })
    }
    if (e = animationSceneHeroHulk2, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        13 > a ? (e.removeClass("hulk_b_" + a).addClass("hulk_b_" + (a + 1)), e.attr("data-frame", a + 1), 4 == a && ($("#sceneHero > .animation6 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation6_glasscrack2")).attr("src") + ")"}), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300))) : e.fadeOut(0, function () {
            animationSceneHeroHulk3.delay(200).fadeIn(0)
        })
    }
    if (e = animationSceneHeroHulk3, e.is(":visible")) {
        var a = parseInt(e.attr("data-frame"));
        15 > a ? (e.removeClass("hulk_a_" + a).addClass("hulk_a_" + (a + 1)), e.attr("data-frame", a + 1), 4 == a && ($("#sceneHero > .animation6 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation6_glasscrack3")).attr("src") + ")"}), $("#sceneHero").trigger("startRumble"), setTimeout(function () {
            $("#sceneHero").trigger("stopRumble")
        }, 300))) : e.fadeOut(0, function () {
            animationLock = !1, $("#canvas .wrapper .copy").delay(1e3).fadeOut(500, function () {
                $("#canvas .wrapper .hits3").fadeIn(500)
            })
        })
    }
}
function animation7Loop() {
    var e = animationSceneUltron;
    if (e.is(":visible")) {
        var a = parseFloat(e.attr("data-frame")), n = a + .72;
        12 > a ? e.removeClass(function (e, a) {
            return (a.match(/(^|\s)ultron_eye_\S+/g) || []).join(" ")
        }).addClass("ultron_eye_" + parseInt(n)).attr("data-frame", n) : e.removeClass("ultron_eye_" + a).addClass("ultron_eye_1").attr("data-frame", 1)
    }
}
var animationSceneHeroCap = $("#sceneHero .animatedCap"), animationSceneHeroCapDrop = $("#sceneHero .animatedCapDrop"), animationSceneHeroExplosion1 = $("#sceneHero .animatedExplosion1"), animationSceneHeroExplosion2 = $("#sceneHero .animatedExplosion2"), animationSceneHeroExplosion3 = $("#sceneHero .animatedExplosion3"), animationSceneHeroExplosion4 = $("#sceneHero .animatedExplosion4"), animationSceneHeroExplosion5 = $("#sceneHero .animatedExplosion5"), animationSceneHeroThor = $("#sceneHero .animatedThor"), animationSceneHeroThorDrop = $("#sceneHero .animatedThorDrop"), animationSceneHeroHawkeys = $("#sceneHero .animatedHawkeys"), animationSceneHeroIron = $("#sceneHero .animatedIron"), animationSceneHeroHulk1 = $("#sceneHero .animatedHulk1"), animationSceneHeroHulk2 = $("#sceneHero .animatedHulk2"), animationSceneHeroHulk3 = $("#sceneHero .animatedHulk3"), animationSceneUltron = $("#sceneHero .ultron .eye"), animationSceneEndShareLogo1 = $("#sceneEnd .logo1"), animationSceneEndShareLogo2 = $("#sceneEnd .logo2"), animationSceneEndShareLogo3 = $("#sceneEnd .logo3"), screenRate = 1.608, canvasWidth = $("#canvas").width(), canvasHeight = $("#canvas").height(), spriteScale = $("#canvas .wrapper").width() / 640, spriteScale2 = $("#canvas .wrapper").width() / 640 * 2;
$("#canvas").height() / $("#canvas").width() >= screenRate ? canvasHeight = screenRate * canvasWidth : (canvasWidth = canvasHeight / screenRate, spriteScale = $("#canvas .wrapper").height() / 1008, spriteScale2 = $("#canvas .wrapper").height() / 1008 * 2), $("#loading, #canvas .wrapper").css({
    width: canvasWidth,
    height: canvasHeight,
    left: "50%",
    marginLeft: -canvasWidth / 2
}), $(".loadingSprite, .animatedCap, .animatedCapDrop, .explosionSprite, .hulkASprite, .hulkBSprite, .ultronEyeSprite, .ledSprite, .shareLogo1Sprite, .shareLogo3Sprite").css({
    transformOrigin: "top left",
    transform: "scale(" + spriteScale + ")"
}), $(".thorSprite, .thorDropSprite, .hawkeysSprite, .ironSprite, .glassSprite").css({
    transformOrigin: "top left",
    transform: "scale(" + spriteScale2 + ")"
}), $(".sharepage1Sprite").css({
    transformOrigin: "top left",
    transform: "scale(" + 1.33333 * spriteScale + ")"
}), $(".shareLogo2Sprite, #sceneEnd > .shadow").css({
    transformOrigin: "top left",
    transform: "scale(" + 1.47 * spriteScale + ")"
}), $(".fireSprite").css({
    transformOrigin: "top left",
    transform: "scale(" + 2.2 * spriteScale + ")"
}), $("#sceneEnd > .rotationMask").css({
    width: 119 * spriteScale,
    height: 118 * spriteScale
}), $("#sceneHero, #sceneEnd").jrumble({
    x: 2,
    y: 2,
    rotation: 1,
    speed: 0
}), $("#loading .animation").css({left: ($("#loading").width() - $("#loading .animation").width() * spriteScale) / 2}), $("#loading").fadeIn(0), $(".hits1, .hits2, .hits3").css({fontSize: 24 * $("#canvas .wrapper").width() / 640});
var pageStatus = 1, preload_part1 = !1, preload_part2 = !1, preload_part3 = !1, preload_part4 = !1, preloadQueue = new createjs.LoadQueue;
preloadQueue.installPlugin(createjs.Sound), preloadQueue.setMaxConnections(5), preloadQueue.on("complete", preloadComplete, this), preload_part1 || preloadQueue.loadManifest([{
    id: "home_title",
    src: "img/home_title.png"
}, {id: "home_background", src: "img/home_background.jpg"}, {
    id: "home_btn_remind",
    src: "img/home_btn_remind.png"
}, {id: "home_btn_sms", src: "img/home_btn_sms.png"}, {
    id: "fire_sprite",
    src: "sprite/fire_sprite.jpg"
}, {id: "copy_cap", src: "img/copy_cap.png"}, {id: "copy_hawkeye", src: "img/copy_hawkeye.png"}, {
    id: "copy_hulk1",
    src: "img/copy_hulk1.png"
}, {id: "copy_iron", src: "img/copy_iron.png"}, {id: "copy_thor", src: "img/copy_thor.png"}, {
    id: "copy_ultron",
    src: "img/copy_ultron.png"
}, {id: "copy_ultron1", src: "img/copy_ultron1.png"}, {
    id: "copy_ultron2",
    src: "img/copy_ultron2.png"
}, {id: "copy_ultron3", src: "img/copy_ultron3.png"}, {
    id: "copy_widow",
    src: "img/copy_widow.png"
}, {id: "audio_bg_phone", src: "sound/bgm/bgm phone.mp3"}, {
    id: "audio_bg",
    src: "sound/bgm/bgm.mp3"
}, {id: "audio_ultron", src: "sound/audio/00-ultron.mp3"}]);
var backgroundMusic, InitSceneHome = function () {
    var e = new createjs.Bitmap(preloadQueue.getResult("home_title")), a = new createjs.Bitmap(preloadQueue.getResult("home_background")), n = new createjs.Bitmap(preloadQueue.getResult("home_btn_remind")), t = new createjs.Bitmap(preloadQueue.getResult("home_btn_sms"));
    titleImg = e.image, bgImg = a.image, iconRemindImg = n.image, iconSMSImg = t.image, InitSceneHomeCanvas(), backgroundMusic && backgroundMusic.stop(), backgroundMusic = createjs.Sound.play("audio_bg_phone"), backgroundMusic.setLoop(99999), $("#sceneHome").fadeIn(300, function () {
        preload_part2 || preloadQueue.loadManifest([{
            id: "cap_drop_sprite",
            src: "sprite/cap_drop_sprite.jpg"
        }, {id: "cap_sprite", src: "sprite/cap_sprite.jpg"}, {
            id: "explosion_sprite",
            src: "sprite/explosion_sprite.jpg"
        }, {id: "thor_sprite", src: "sprite/thor_sprite.jpg"}, {
            id: "thor_drop_sprite",
            src: "sprite/thor_drop_sprite.jpg"
        }, {id: "hawkeys_sprite", src: "sprite/hawkeys_sprite.jpg"}, {
            id: "iron_sprite",
            src: "sprite/iron_sprite.jpg"
        }, {id: "hulk_a_sprite", src: "sprite/hulk_a_sprite.jpg"}, {
            id: "hulk_b_sprite",
            src: "sprite/hulk_b_sprite.jpg"
        }, {id: "ultron_eye_sprite", src: "sprite/ultron_eye_sprite.jpg"}, {
            id: "animation1_glasscrack",
            src: "img/animation1_glasscrack.png"
        }, {id: "animation2_glasscrack1", src: "img/animation2_glasscrack1.png"}, {
            id: "animation2_glasscrack2",
            src: "img/animation2_glasscrack2.png"
        }, {id: "animation2_glasscrack3", src: "img/animation2_glasscrack3.png"}, {
            id: "animation2_glasscrack4",
            src: "img/animation2_glasscrack4.png"
        }, {id: "animation2_glasscrack5", src: "img/animation2_glasscrack5.png"}, {
            id: "animation3_glasscrack",
            src: "img/animation3_glasscrack.png"
        }, {id: "animation4_glasscrack", src: "img/animation4_glasscrack.png"}, {
            id: "animation5_glasscrack",
            src: "img/animation5_glasscrack.png"
        }, {id: "animation6_glasscrack1", src: "img/animation6_glasscrack1.png"}, {
            id: "animation6_glasscrack2",
            src: "img/animation6_glasscrack2.png"
        }, {id: "animation6_glasscrack3", src: "img/animation6_glasscrack3.png"}, {
            id: "ultron",
            src: "img/ultron.jpg"
        }, {id: "ultron_light", src: "img/ultron_light.png"}, {
            id: "ironman_body",
            src: "img/animation5_ironman_body.png"
        }, {id: "audio_cap", src: "sound/audio/01-cap.mp3"}, {
            id: "audio_widow",
            src: "sound/audio/02-widow.mp3"
        }, {id: "audio_thor", src: "sound/audio/03-thor.mp3"}, {
            id: "audio_hawkeye",
            src: "sound/audio/04-hawkeye.mp3"
        }, {id: "audio_ironman", src: "sound/audio/05-ironman.mp3"}, {
            id: "audio_hulk",
            src: "sound/audio/06-hulk.mp3"
        }, {id: "audio_ultron2", src: "sound/audio/07-ultron.mp3"}])
    })
}, InitSceneFire = function () {
    $("#sceneHome").fadeOut(1e3, function () {
        backgroundMusic && backgroundMusic.stop(), backgroundMusic = createjs.Sound.play("audio_bg"), backgroundMusic.setLoop(99999), $("#sceneFire").fadeIn(0), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(0, function () {
            $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_ultron")).attr("src") + ")"}).fadeIn(200, function () {
                $(this).delay(3200).fadeOut(500, function () {
                    $("#canvas .wrapper .hits1").fadeIn(500)
                })
            })
        }), createjs.Sound.play("audio_ultron")
    })
}, heroPager, animationLock, InitSceneHero = function () {
    pageStatus = 2, heroPager = 1, animationLock = !0, $("#sceneHero").fadeIn(0), $("#sceneHome").fadeOut(0), $("#sceneHero").find(".glasscrack, .glasscrack1, .glasscrack2, .glasscrack3, .glasscrack4, .glasscrack5").fadeOut(0), InitAnimation(animationSceneHeroCap, "cap", /(^|\s)cap_\S+/g), createjs.Sound.play("audio_cap"), animationSceneHeroCap.delay(300).fadeIn(0), InitAnimation(animationSceneHeroCapDrop, "cap_drop", /(^|\s)cap_drop_\S+/g), InitAnimation(animationSceneHeroExplosion1, "explosion1", /(^|\s)explosion1_\S+/g), InitAnimation(animationSceneHeroExplosion2, "explosion2", /(^|\s)explosion2_\S+/g), InitAnimation(animationSceneHeroExplosion3, "explosion3", /(^|\s)explosion3_\S+/g), InitAnimation(animationSceneHeroExplosion4, "explosion1", /(^|\s)explosion1_\S+/g), InitAnimation(animationSceneHeroExplosion5, "explosion2", /(^|\s)explosion2_\S+/g), InitAnimation(animationSceneHeroThor, "thor", /(^|\s)thor_\S+/g), InitAnimation(animationSceneHeroThorDrop, "thor_drop", /(^|\s)thor_drop_\S+/g), $("#sceneHero > .animation4 .hawkeysLight").fadeOut(0), InitAnimation(animationSceneHeroHawkeys, "hawkeys", /(^|\s)hawkeys_\S+/g), $("#sceneHero > .animation5 .iconBody").fadeOut(0), InitAnimation(animationSceneHeroIron, "iron", /(^|\s)iron_\S+/g), $("#sceneHero > .animation6 .glasscrack").css({backgroundImage: "url(" + $(preloadQueue.getResult("animation6_glasscrack1")).attr("src") + ")"}), InitAnimation(animationSceneHeroHulk1, "hulk_a", /(^|\s)hulk_a_\S+/g), InitAnimation(animationSceneHeroHulk2, "hulk_b", /(^|\s)hulk_b_\S+/g), InitAnimation(animationSceneHeroHulk3, "hulk_a", /(^|\s)hulk_a_\S+/g), InitAnimation(animationSceneUltron, "ultron_eye", /(^|\s)ultron_eye_\S+/g), $("#sceneHero").find(".ultron, .ultron .light, .ultron .eye").fadeOut(0), $("#canvas .wrapper .hits1").stop(!0, !0).fadeOut(0), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(500, function () {
        $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_cap")).attr("src") + ")"}).fadeIn(500, function () {
            $(this).delay(3e3).fadeOut(500, function () {
                $("#canvas .wrapper .hits2").fadeIn(500)
            })
        })
    }), preload_part3 || preloadQueue.loadManifest([{
        id: "glassSprite",
        src: "sprite/glass_sprite.png"
    }, {id: "end_background", src: "img/end_background.jpg"}, {
        id: "sharelogo1_sprite",
        src: "sprite/sharelogo1_sprite.png"
    }, {id: "sharelogo2_sprite", src: "sprite/sharelogo2_sprite.png"}, {
        id: "sharelogo3_sprite",
        src: "sprite/sharelogo3_sprite.png"
    }, {id: "led_sprite", src: "sprite/led_sprite.png"}, {
        id: "audio_button",
        src: "sound/audio/button.mp3"
    }, {id: "audio_lastscreen", src: "sound/audio/lastscreen.mp3"}, {
        id: "audio_sharing",
        src: "sound/audio/sharing.mp3"
    }])
}, ledInterval, InitSceneEnd = function () {
    pageStatus = 3, $("#sceneHero").fadeOut(0), $("#sceneEnd").find(".led, .led_dp, .led_hero1, .led_hero2, .led_hero3, .led_hero4, .led_hero5, .led_hero6").fadeOut(0), $("#sceneEnd").fadeIn(0);
    for (var e = 1; 20 >= e; e++)$("#sceneEnd").find(".glass" + e).css({marginTop: 0}, 0);
    $("#sceneEnd").trigger("startRumble"), setTimeout(function () {
        $("#sceneEnd").trigger("stopRumble")
    }, 700), setTimeout(function () {
        for (var e = 1; 20 >= e; e++)$("#sceneEnd").find(".glass" + e).css({zIndex: 999}).animate({marginTop: "+=200%"}, 2e3 * Math.random() + 200);
        InitAnimation(animationSceneEndShareLogo1, "sharelogo1", /(^|\s)sharelogo1_\S+/g), InitAnimation(animationSceneEndShareLogo2, "sharelogo2", /(^|\s)sharelogo2_\S+/g), InitAnimation(animationSceneEndShareLogo3, "sharepage2", /(^|\s)sharepage2_\S+/g), $("#sceneEnd .shadow").fadeOut(0), animationSceneEndShareLogo1.fadeIn(0), animationSceneEndShareLogo2.fadeIn(0), animationSceneEndShareLogo3.fadeIn(0), clearInterval(ledInterval), ledInterval = setInterval(function () {
            $("#sceneEnd .led").fadeIn(0).delay(80).fadeOut(0).delay(50).fadeIn(0).delay(80).fadeOut(0).delay(50).fadeIn(0).delay(80).fadeOut(0).delay(50).fadeIn(0).delay(80).fadeOut(0), $("#sceneEnd .led_dp").fadeIn(500).fadeOut(500).delay(1e3).fadeIn(500).fadeOut(500);
            var e = Math.floor(6 * Math.random()) + 1;
            $("#sceneEnd .led_hero" + e).fadeIn(500).fadeOut(500, function () {
                e = Math.floor(6 * Math.random()) + 1, $("#sceneEnd .led_hero" + e).fadeIn(500).fadeOut(500, function () {
                    e = Math.floor(6 * Math.random()) + 1, $("#sceneEnd .led_hero" + e).fadeIn(500).fadeOut(500, function () {
                        e = Math.floor(6 * Math.random()) + 1, $("#sceneEnd .led_hero" + e).fadeIn(500).fadeOut(500)
                    })
                })
            })
        }, 4500), backgroundMusic.stop(), backgroundMusic = createjs.Sound.play("audio_lastscreen"), backgroundMusic.setLoop(99999)
    }, 600)
}, Init = function () {
    pageStatus = 1, clearInterval(ledInterval), $("#sceneHero, #sceneEnd, #sceneHome, #sceneFire").stop().fadeOut(0), $("#canvas .wrapper").stop().find(".hits1,.hits2,.hits3").fadeOut(0), InitSceneHome()
}, mainLoopInterval = setInterval(function () {
    if (1 == pageStatus && animationFire(), 2 == pageStatus)switch (heroPager) {
        case 1:
        case 2:
            animation1Loop(), animation2Loop();
            break;
        case 3:
        case 4:
            animation3Loop(), animation4Loop();
            break;
        case 5:
            animation5Loop();
            break;
        case 6:
            animation6Loop(), animation7Loop()
    } else 3 == pageStatus && animationShare();
    animationLoading()
}, 40);
$("#sceneHome .btnAnswer").click(function () {
    InitSceneFire()
}), $("#sceneFire, #canvas .wrapper .hits1").click(function () {
    $("#sceneFire").fadeOut(0), preload_part2 ? InitSceneHero() : ($("#loading").fadeIn(0), pageStatus = 2)
}), $("#sceneEnd > .btn .btn_back").bind("touchstart", function (e) {
    $(this).css({backgroundColor: "rgba(0,0,0,0.5)"})
}).bind("touchend", function (e) {
    $(this).css({backgroundColor: ""})
}).click(function () {
    createjs.Sound.play("audio_button"), Init(), _hmt.push(["_trackEvent", "button_again", "click", "PlayAgain"])
});
var dp_url = "http://evt.dianping.com/movie/fulian2share/share.html";
$("#sceneEnd > .btn .btn_tickets").bind("touchstart", function (e) {
    $(this).css({backgroundColor: "rgba(0,0,0,0.5)"})
}).bind("touchend", function (e) {
    $(this).css({backgroundColor: ""})
}).click(function () {
    _hmt.push(["_trackEvent", "button_tickets", "click", "BuyTickets"]), createjs.Sound.play("audio_button"), window.open(dp_url)
}), $("#sceneEnd > .btn_tickets199").click(function () {
    _hmt.push(["_trackEvent", "button_tickets_19_9", "click", "BuyTickets19_9"]), createjs.Sound.play("audio_button"), window.open(dp_url)
}), $("#sceneEnd > .btn_ticketsDP").click(function () {
    _hmt.push(["_trackEvent", "button_tickets_dp", "click", "BuyTicketsDP"]), createjs.Sound.play("audio_button"), window.open(dp_url)
}), $("#sceneEnd > .btn .btn_share").bind("touchstart", function (e) {
    $(this).css({backgroundColor: "rgba(0,0,0,0.5)"})
}).bind("touchend", function (e) {
    $(this).css({backgroundColor: ""})
}).click(function () {
    createjs.Sound.play("audio_button"), $("#popup_share .rotationMask").css({transform: "rotate(0deg)"}), $("#sceneEnd .shadow").fadeIn(1e3), $("#popup_share").fadeIn(1e3, function () {
        createjs.Sound.play("audio_sharing"), $("#sceneEnd > .rotationMask").css({transform: "rotate(-108deg)"})
    }), _hmt.push(["_trackEvent", "button_share_wechat", "click", "ShareWeChat"])
}), $("#popup_share").click(function (e) {
    $(this).fadeOut(300), $("#sceneEnd .shadow").fadeOut(300), createjs.Sound.play("audio_sharing"), $("#sceneEnd > .rotationMask").css({transform: "rotate(0deg)"})
}), $("#sceneHero, .copy, #canvas .wrapper .hits2, #canvas .wrapper .hits3").click(function () {
    if (!animationLock)switch (animationLock = !0, heroPager) {
        case 1:
            createjs.Sound.play("audio_widow"), $("#canvas .wrapper .hits2").stop(!0, !0).fadeOut(0), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(100, function () {
                $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_widow")).attr("src") + ")"}).fadeIn(100)
            }), animationSceneHeroExplosion1.delay(1200).fadeIn(0), heroPager++;
            break;
        case 2:
            $("#canvas .wrapper .hits2").stop(!0, !0).fadeOut(0), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(200, function () {
                $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_thor")).attr("src") + ")"}).fadeIn(500)
            }), animationSceneHeroThor.fadeIn(0), heroPager++;
            break;
        case 3:
            $("#canvas .wrapper .hits2").stop(!0, !0).fadeOut(0), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(100, function () {
                $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_hawkeye")).attr("src") + ")"}).fadeIn(100)
            }), createjs.Sound.play("audio_hawkeye"), $("#sceneHero > .animation4 .hawkeysLight").fadeIn(100).fadeOut(100).delay(60).fadeIn(100).fadeOut(100).delay(60).fadeIn(100).fadeOut(100).delay(60).fadeIn(100).fadeOut(100).delay(520).fadeOut(0, function () {
                animationSceneHeroHawkeys.fadeIn(0)
            }), heroPager++;
            break;
        case 4:
            $("#canvas .wrapper .hits2").stop(!0, !0).fadeOut(0), createjs.Sound.play("audio_ironman"), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(200, function () {
                $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_iron")).attr("src") + ")"}).fadeIn(500)
            }), $("#sceneHero > .animation5 .iconBody").fadeIn(500, function () {
                animationSceneHeroIron.delay(500).fadeIn(0)
            }), heroPager++;
            break;
        case 5:
            $("#canvas .wrapper .hits2").stop(!0, !0).fadeOut(0), createjs.Sound.play("audio_hulk"), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(200, function () {
                $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_hulk1")).attr("src") + ")"}).fadeIn(500)
            }), animationSceneHeroHulk1.delay(1e3).fadeIn(0), heroPager++;
            break;
        case 6:
            $("#canvas .wrapper .hits3").stop(!0, !0).fadeOut(0), $("#sceneHero .ultron").stop(!0, !0).fadeIn(500, function () {
                createjs.Sound.play("audio_ultron2"), $("#sceneHero .ultron .light").fadeIn(50).fadeOut(50).delay(40).fadeIn(50).fadeOut(50).delay(500).fadeIn(50, function () {
                    animationSceneUltron.fadeIn(0), $("#canvas .wrapper .hits3").stop(!0, !0).fadeOut(0), $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(200, function () {
                        $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_ultron1")).attr("src") + ")"}).fadeIn(500, function () {
                            $(this).delay(800).fadeOut(500, function () {
                                $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_ultron2")).attr("src") + ")"}).fadeIn(500, function () {
                                    $(this).delay(3500).fadeOut(400, function () {
                                        $(this).css({backgroundImage: "url(" + $(preloadQueue.getResult("copy_ultron3")).attr("src") + ")"}).fadeIn(500, function () {
                                            $(this).delay(2e3).fadeOut(500)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }).delay(9500).fadeOut(500, function () {
                $("#canvas .wrapper .copy").stop(!0, !1).fadeOut(300), preload_part3 ? InitSceneEnd() : ($("#loading").fadeIn(0), pageStatus = 3)
            })
    }
});
var homeCanvas = document.getElementById("homeCanvas"), context = homeCanvas.getContext("2d"), titleImg = new Image, bgImg = new Image, iconRemindImg = new Image, iconSMSImg = new Image, w, h, offset, glitchInterval, InitSceneHomeCanvas = function () {
    clearInterval(glitchInterval), w = homeCanvas.width, offset = .1 * w, h = ~~(titleImg.height * ((w - 2 * offset) / titleImg.width)), DrawUI(), glitchInterval = setInterval(function () {
        setTimeout(GlitchImg, randInt(250, 500)), setTimeout(GlitchImg, randInt(250, 500)), setTimeout(GlitchImg, randInt(250, 500)), setTimeout(DrawUI, 800)
    }, 1800)
}, DrawUI = function () {
    context.clearRect(0, 0, w, h), context.drawImage(bgImg, 0, 0, homeCanvas.width, homeCanvas.height), context.drawImage(titleImg, (homeCanvas.width - titleImg.width) / 2, 110, titleImg.width, titleImg.height), context.drawImage(iconRemindImg, 95, homeCanvas.height - 400, iconRemindImg.width, iconRemindImg.height), context.drawImage(iconSMSImg, 483, homeCanvas.height - 400, iconSMSImg.width, iconSMSImg.height)
}, GlitchImg = function () {
    var e = 0;
    e = 0 == randInt(0, 2) ? 110 : homeCanvas.height - 500;
    for (var a = 0; a < randInt(1, 13); a++) {
        var n = Math.random() * w, t = Math.random() * h + e, r = w - n, o = randInt(5, h / 3);
        context.drawImage(homeCanvas, 0, t, r, o, n, t, r, o), context.drawImage(homeCanvas, r, t, n, o, 0, t, n, o)
    }
}, randInt = function (e, a) {
    return ~~(Math.random() * (a - e) + e)
};