(function () {
    'use strict';

        const jsTitle = document.querySelectorAll('.js-mv_tit-item');
        jsTitle.forEach(target => {
            let newText = '';
            const text = target.textContent;
            const result = text.split('');
            for (let i = 0; i < result.length; i++) {
                newText += '<span>' + result[i] + '</span>';
            }
            target.innerHTML = newText;
        });

    (function () {

        gsap.registerPlugin(MotionPathPlugin);

        const jsOptext = '.js-loader-Optext > span';
        const jsLoaderBg = '.js-loader-bg';
        const jsLoaderSnoopy = '.js-loader-snoopy';
        const jsPic = '.js-mv-pic [id*=item]';
        // const jsTitle = '.js-mv_tit-item span';
        const jsReaddText = '.js-mv_tit-read';
        const jsHeader = '.js-header';

        gsap.set(
            // [jsPic, jsTitle, jsReaddText],
            [jsPic],
            {
                opacity: 0,
                y: 30
            },
        );

        gsap.set(jsOptext, {
            opacity: 0,
            y: -50
        });

        gsap.set(jsHeader, {
            opacity: 0,
            y: -50
        });

        const tl = gsap.timeline();
        tl.to(
            jsOptext, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.8,
                stagger: {
                    amount: 1,
                    from: "start",
                    ease: "sine.in"
                }
            },
        ).to(
            jsOptext, {
                opacity: 0
            }
        ).to(
            jsLoaderSnoopy, {
                scale: 50,
                opacity: 0,
                ease: "power1.in",
            }
        ).to(
            jsLoaderBg, {
                // y: '-100%',
                opacity: 0,
            },
            '-=0.5'
        ).to(jsPic, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                amount: 0.6,
                from: "start",
                ease: "elastic.inOut(1, 0.3)"
            }
        }, '+=0.2'
        // ).to(
        //     jsTitle, { opacity: 1,
        //         y: 0,
        //         stagger: {
        //             amount: 1,
        //             from: "start",
        //             ease: "elastic.inOut(1, 0.5)"
        //         }
        //     },
        //     "-=0.1"
        // ).to(
        //     jsReaddText, {
        //         opacity: 1,
        //         y: 0,
        //     },
        //     "-=0.2"
        ).to(
            jsHeader, {
                opacity: 1,
                y: 0,
            },
            '<'
        );


    /*
    // 円形ズーム表示
    const svg = document.querySelector("#svg");
    const img = document.querySelector("#img");
    const circle = document.querySelector("#circle");
    const pad = 4;

    let radius = +circle.getAttribute("r");
    let imgWidth, imgHeight;

    gsap.set(img, {
        scale: 2,
        xPercent: -50,
        yPercent: -50
    });

    var tl = gsap.timeline({
        scrollTrigger: {
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
        },
        defaults: {
            duration: 1
        }
    })
        .to(circle, {
            attr: {
                r: () => radius
            }
        }, 0)
        .to(img, {
            scale: 1,
        }, 0)
        .to("#whiteLayer", {
            alpha: 0,
            ease: "power1.in",
            duration: 1 - 0.25
        }, 0.25);

    window.addEventListener("load", init);
    window.addEventListener("resize", resize);

    function init() {

        imgWidth = img.naturalWidth;
        imgHeight = img.naturalHeight;

        resize();
    }

    function resize() {

        tl.progress(0);

        const r = svg.getBoundingClientRect();
        const rectWidth = r.width + pad;
        const rectHeight = r.height + pad;

        const rx = rectWidth / imgWidth;
        const ry = rectHeight / imgHeight;

        const ratio = Math.max(rx, ry);

        const width = imgWidth * ratio;
        const height = imgHeight * ratio;

        const dx = rectWidth / 2;
        const dy = rectHeight / 2;
        radius = Math.sqrt(dx * dx + dy * dy);

        gsap.set(img, { width, height });

        tl.invalidate();

        ScrollTrigger.refresh();
    }
     */

    // const animationIsOkay = window.matchMedia(
    //     "(prefers-reduced-motion: no-preference)"
    // ).matches;

// turn this on to prevent animation for people who don't want it
// if (animationIsOkay) {

    gsap.from("#cameraPath", {
        xPercent: 100,
        yPercent: 100,
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: "#cameraSVG",
            start: "center 110%", // when the center of the trigger hits 40% from the top of the viewport
            end: "10%", // end after scrolling 1000px beyond the start
            scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    });

    gsap.from("#snoopy-love", {
        xPercent: -100,
        yPercent: 100,
        duration: 3,
        scrollTrigger: {
            trigger: "#snoopy-img1",
            // start: "-180%", // when the center of the trigger hits 40% from the top of the viewport
            // start: 'top center', // アニメーション開始位置
            start: 'top center', //y軸50%からさらに10%プラス側に指定
            end: 'top center+=30%', // アニメーション終了位置
            // start: 'top 60', //y軸50%からさらに10%プラス側に指定
            // end: 'bottom+=600 top', // 要素のbottomを下方向に200px
            pin: true,
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true
        }
    });

    gsap.from("#snoopy-plain", {
        xPercent: 100,
        yPercent: 100,
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: "#snoopy-img2",
            start: "center 110%", // when the center of the trigger hits 40% from the top of the viewport
            end: "10%", // end after scrolling 1000px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true
        }
    });

    gsap.from("#footPath", {
        xPercent: -100,
        yPercent: 100,
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: "#footSVG",
            // start: "center 110%", // when the center of the trigger hits 40% from the top of the viewport
            // end: "10%", // end after scrolling 1000px beyond the start
            start: 'top center+=10%', //y軸50%からさらに10%プラス側に指定
            end: 'bottom+=600 top', // 要素のbottomを下方向に200px
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // trigger: "#footSVG",
            // trigger: "#snoopy-area", // What element triggers the scroll
            // start: "center 110%", // when the center of the trigger hits 40% from the top of the viewport
            // start: "bottom bottom",
            // end: "10%", // end after scrolling 1000px beyond the start
            // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true
        }
    });

    const snoopyImg = document.querySelector("#snoopy");
    const snoopyArea = gsap.timeline({
        scrollTrigger: {
            id: "snoopy", // Custom label to the marker
            trigger: "#snoopy-area", // What element triggers the scroll
            scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
            start: "top top", // Start at top of Trigger and at the top of the viewport
            end: "+=100% 50px", // The element is 500px hight and end 50px from the top of the viewport
            // markers:true,
        }
    });

    snoopyArea
        .from(snoopyImg, {
            scale: 30,
            // opacity: 0,
        })
        // .to(".image-1", {
        //     scale: 1.5
        // }, "sameTime")
        .to(snoopyImg, {
            scale: 1,
            // opacity: 1,
        })

    // gsap.from("#snoopy", {
    //     // xPercent: 100,
    //     // yPercent: 100,
    //     // duration: 2,
    //     scale: 1,
    //     scrollTrigger: {
    //         trigger: "#snoopy-area",
    //         start: "top 40%",
    //         end: "+=2000",
    //         markers:true,
    //         pin:true,
    //         scrub: true
    //     }
    // });

    // gsap.set(snoopyImg, {
    //     opacity: 1,
    //     scale: 1,
    // });
    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: 0.2,
    //     },
    //     defaults: {
    //         duration: 1
    //     }
    // })
    //     tl.to(snoopyImg, {
    //         scale: 2,
    //     }, 0)
        // .to("#whiteLayer", {
        //     alpha: 0,
        //     ease: "power1.in",
        //     duration: 1 - 0.25
        // }, 0.25);

    ScrollTrigger.create({
        trigger: ".article_image-1",
        start: "top 60",
        endTrigger: ".article_text-1",
        end: `center 40%`,
        pin: true,
        pinSpacing: false,
    });
    ScrollTrigger.create({
        trigger: ".article_image-2",
        start: "top 60",
        endTrigger: ".article_text-2",
        end: `center 40%`,
        pin: true,
        pinSpacing: false,
    });
    ScrollTrigger.create({
        trigger: ".article_image-3",
        start: "top 60",
        endTrigger: ".article_text-3",
        end: `center 40%`,
        pin: true,
        pinSpacing: false,
    });
    ScrollTrigger.create({
        trigger: ".article_image-4",
        start: "top 60",
        endTrigger: ".article_text-4",
        end: `center 40%`,
        pin: true,
        pinSpacing: false,
    });

    const slideTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".slideSection",
            start: "top 150",
            pin: true,
            end: `+=${innerHeight}`,
            scrub: 1,
        },
    });

    const target = document.querySelector(".slide");
    slideTl.to(target, {
        delay: 0.1,
        x: -target.clientWidth + innerWidth - 120,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: ".bottom-1",
        start: "top 50%",
        // start: "bottom bottom",
        // toggleClass: "is-crossed-1",
    });
    const bottomTl_1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".bottom-1",
            start: "top bottom",
            // start: "top top",
            end: "center center",
            // end: "top top",
            // end: 'bottom+=600 top', // 要素のbottomを下方向に200px
            scrub: 1,
            // markers: true
        },
    });
    bottomTl_1
        .fromTo('.bottom-1', {
            backgroundColor: "#fff",
        }, {
            backgroundColor: "#0a0b0b",
        })
        .fromTo(
            ".js-bottom_left-1",
            {
                xPercent: -100,
            },
            {
                xPercent: 0
            }
        )
        .fromTo(
            ".js-bottom_right-1",
            {
                xPercent: 100,
            },
            {
                xPercent: 0
            },
            "<"
        );

        gsap.to(".box", 5,{
            repeat: 999,
            repeatDelay: 1,
            ease: "power1.inOut",
            // rotationY: 180,
            motionPath: [
                // {
                //     x:270, y:30
                // },{
                //     x:150, y:180
                // },{
                //     x:30, y:30
                // }
                {x:500, y:400},
                {x:300, y:0},
                {x:100, y:250},
            ]
            // motionPath:{
            //     path: "#path",
            //     align: "#path",//pathのIDを持つ要素を選択、ターゲットが左上が揃う
            //     alignOrigin: [0.5, 0.5],  //ターゲットを中心に置きたい場合はalignOrigin: [0.5, 0.5]
            // }
        });

        const area = document.querySelector(".area50");
        const panels = document.querySelectorAll(".pn50");
        const num = panels.length;

        const backTl = gsap.timeline({
            scrollTrigger: {
                trigger: area,
                start: "top top",
                end: "+=150%",
                scrub: true,
                pin: true,
            }
        });

        panels.forEach((panel, i) => {
            gsap.set(panel, {
                zIndex : num - i,
            });
        });

        gsap.set(".waku50", { scale: 0.9, });
        gsap.set(".pn51", { scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%", });
        gsap.set(".pn52", { scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%", });
        gsap.set(".pn53", { scale: 0, width: "100%", height: "75%", left: 0, top: "12.5%", });

        backTl.to(".waku50", { scale: 1.2, duration: 0.5})
            .to(".pn51", { scale: 1, left: "-37.5%", top: "5%", duration: 1 },"-=0.5")
            .to(".pn51", { opacity: 0, duration: 0.2 }, "-=0.2")
            .to(".pn52", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
            .to(".pn52", { opacity: 0, duration: 0.2 }, "-=0.2")
            .to(".pn53", { scale: 1, duration: 1 }, "-=0.5")

        ////3点リード
    const addTruncationCSS = (element, lineNumber) => {

        if('WebkitLineClamp' in element.style) {

            element.style.display = '-webkit-box';
            element.style.WebkitLineClamp = lineNumber;
            element.style.WebkitBoxOrient = 'vertical';
            element.style.overflow = 'hidden';

        } else {

            // IE11などline-clamp非対応の処理
            const limitHeight = parseFloat(getComputedStyle(element).lineHeight) * Number(lineNumber);
            element.style.overflowY = 'hidden';
            element.style.height = String(limitHeight) + 'px';
        }
    }

    const truncationElements = document.querySelectorAll('[data-truncation]');

    if(truncationElements) {
        for (const elemet of truncationElements) {
            const lineNumber = elemet.dataset.truncation;
            addTruncationCSS(elemet, lineNumber);
        }
    }
    })();


})();