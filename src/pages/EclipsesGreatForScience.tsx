import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";


import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

export const EclipsesGreatForScience = (_props: any) => {
    let gphcxel: gsap.TweenTarget = useRef<HTMLSpanElement>(null),
        intro: gsap.TweenTarget = useRef<HTMLSpanElement>(null),
        introimg: gsap.TweenTarget = useRef<HTMLSpanElement>(null),
        etp: gsap.TweenTarget = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        TweenMax.from(
            intro, { y: 300, opacity: 0 });
        TweenMax.to(
            intro, 1, { y: 0, opacity: 1 });
        TweenMax.from(
            introimg, 1, { scale: 2 });
        TweenMax.to(
            introimg, 3, { scale: 1 });
    }, [])
    return <div className="EclipseTypesPage ContentPage" ref={el => etp = el} onLoad={() => {
        TweenMax.to(
            etp,
            {
                css: {
                    visibility: 'visible'
                },
            }
        );
    }}>
        <span ref={el => gphcxel = el} onLoad={() =>
            TweenMax.to(
                gphcxel, 1,
                {
                    css: { opacity: 1, rotate: 30, transition: "opacity .5s ease-in" }
                }
            )} className="gphcx">
            <img src={gphcx} alt="moon" loading="lazy" />
        </span>
        <NavBar />

        <div className="contentWrap">
            <div className="HB36">
                <h3> Why eclipses are </h3>
                <h3> great for science?</h3>
            </div>
            <div>
                <h5 className="HB24">
                    In addition to inspiring artists and musicians, eclipses have driven numerous scientific discoveries. For over a century, solar eclipses helped scientists decipher the Sun’s structure and explosive events, find evidence for the theory of general relativity, discover a new element, and much more.
                    NASA scientists still study eclipses to make new discoveries about the Sun, Earth, and our space environment. Total solar eclipses are particularly important because they allow scientists to see a part of the Sun’s atmosphere – known as the corona – which is too faint to see except when the bright light of the Sun’s surface is blocked.
                    Scientists use instruments called coronagraphs to block the Sun’s light in a manner similar to a total eclipse, but these instruments still struggle to reveal the region of the corona closest to the Sun, where many important processes occur.( Eclipses offer scientists a rare view of the sun in its totality. It is a unique opportunity to observe the effects of the solar corona. As the moon blocks out parts of the solar disk, the corona becomes more visible. Scientists study the solar corona from both the Earth's surface and with telescopes and spacecraft)</h5>
                <h5 className="HB24">
                    what is an eclipse season?</h5>
                <p className="BM14">
                    An eclipse season is one of only two periods during each year when the Sun, Moon, and Earth are aligned, allowing eclipses to occur. Each season lasts about 35 days and repeats just short of every six months.</p>
                <h5 className="HB24">
                    Why are the total solar eclipses important?</h5>
                <p className="BM14">
                    Total solar eclipses are particularly important because they allow scientists to see a part of the Sun’s atmosphere known as the corona, which is too faint to see except when the bright light of the Sun’s surface is blocked. Total solar eclipses also provide an opportunity to study Earth’s atmosphere under uncommon conditions. In contrast to the global change in light that occurs every day at dusk and dawn, a solar eclipse changes the illumination of Earth and its atmosphere under a comparatively small region of the Moon’s shadow. This localized blocking of solar energy is useful for studying the Sun’s effects on our atmosphere, especially the upper atmosphere where the Sun’s energy creates a layer of charged particles called the ionosphere. Understanding this region is important because it hosts many low-Earth-orbiting satellites as well as communications signals (such as radio waves and the signals that make the Global Positioning System [GPS] work), and changes there can significantly impact our technology and communication systems.</p>
                <h5>
                    How do eclipses occur?</h5>
                <p>
                    A solar eclipse occurs when the Moon passes between the Sun and Earth, casting the Moon's shadow on Earth. A solar eclipse can only happen during a New Moon. A Lunar eclipse occurs when the Sun casts Earth's shadow onto the Moon. For this to happen, the Earth must be physically between the Sun and Moon with all three bodies lying on the same plane of orbit. A lunar eclipse can only occur during a Full Moon and when the Moon passes through all or a portion of Earth's shadow.</p>
                <h5>
                    Why do only some people on Earth see an eclipse at a given time?</h5>
                <p>For an eclipse to be visible from a certain location on Earth, three things must be present:
                    1. The eclipse must fall within that location's time zone.
                    2. The moon must be in the right position relative to the sun and the Earth.
                    3. The atmosphere must allow for the eclipse to be visible.</p>
                <p>
                    If all these three conditions are met, then the eclipse can be seen from that location. However, if even one of these conditions are not met, then the eclipse becomes invisible from that specific location. That is why people on earth cannot see the same eclipse at the same time.</p>
                <h5>
                    By exploring these famous eclipses, we can appreciate their impact on science, culture, and human curiosity throughout the ages. Eclipses continue to inspire and captivate us, leaving an indelible mark on our collective consciousness.</h5>



            </div>
        </div>

        <PNL />
        <Footer />
    </div>;
}

/**
 









 * <p className="BM12">
                    Credits. <br />
                    Moaaz - Mohammed - Sandy - Sara</p>
 * 
 How_to_Safely_Watch_a_Solar_Eclipse_ExonFXrnHKE_298
 * 
 * Some eclipses could cause eye damage to us. Get know to it and learn how to avoid getting harm from it
 
<div className="paperWrap">
            <img src={exp} alt="" />
            <section>
                <p className="BM14">The phenomena of an eclipse</p>
                <div className="BR18">
                    <h4>
                        A solar eclipse occurs when the Moon passes directly between the Earth and the Sun,
                        blocking the Sun's light and creating a dark shadow on the Earth. A lunar eclipse occurs when
                        the Earth's shadow falls on the Moon, causing it to appear darker during this period.
                        Depending on the location, the duration of the eclipse can range from a few minutes
                        to several hours.</h4>
                    <h4>
                        The phenomenon of an eclipse refers to the event when the Moon passes between the Earth
                        and Sun and blocks the light that reaches the Earth. Eclipses can be categorized into
                        two types: solar and lunar.</h4>
                </div>
            </section>
        </div>


Intro
Mechanics of an eclipse 
Solar vs lunar
Safety while watching an eclipse





 */