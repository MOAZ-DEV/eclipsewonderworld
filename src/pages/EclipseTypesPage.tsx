import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";


import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

export const EclipseTypesPage = (_props: any) => {
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
                <h3>What are the</h3>
                <h3>types of eclipses?</h3>
            </div>
            <div>
                <h5 className="HB24">
                    A solar eclipse happens when the Moon passes between the Sun and Earth,
                    casting a shadow on Earth that either fully or partially blocks the Sun’s light in some areas.
                    This only happens occasionally, because the Moon doesn't orbit in the exact same plane as the Sun and Earth do</h5>
                <h5 className="HB24">
                    Total Solar Eclipse:</h5>
                <p className="BM14">
                    A total solar eclipse happens when the Moon passes between the Sun and Earth,
                    completely blocking the face of the Sun. People located in the center of the
                    Moon’s shadow when it hits Earth will experience a total eclipse. The sky will
                    darken, as if it were dawn or dusk. Weather permitting, people in the path of
                    a total solar eclipse can see the Sun’s corona, the outer atmosphere, which is
                    otherwise usually obscured by the bright face of the Sun. A total solar eclipse
                    is the only type of solar eclipse where viewers can momentarily remove their
                    eclipse glasses (which are not the same as regular sunglasses) for the brief
                    period of time when the Moon is completely blocking the Sun.</p>
                <h5 className="HB24">
                    Partial Solar Eclipse:</h5>
                <p className="BM14">
                    A partial solar eclipse happens when the Moon passes between the Sun and Earth but the Sun,
                    Moon, and Earth are not perfectly lined up. Only a part of the Sun will appear to be covered,
                    giving it a crescent shape. During a total or annular solar eclipse, people outside the area
                    covered by the Moon’s inner shadow see a partial solar eclipse.</p>
                <h5 className="HB24">
                    Annular Solar Eclipse:</h5>
                <p className="BM14">
                    An annular solar eclipse happens when the Moon passes between the Sun and Earth,
                    but when it is at or near its farthest point from Earth. Because the Moon is
                    farther away from Earth, it appears smaller than the Sun and does not completely
                    cover the Sun. As a result, the Moon appears as a dark disk on top of a larger,
                    bright disk, creating what looks like a ring around the Moon.</p>
                <h5 className="HB24">Hybrid Solar Eclipse:</h5>
                <p className="BM14">
                    Because Earth's surface is curved, sometimes an eclipse can shift between annular
                    and total as the Moon’s shadow moves across the globe. This is called a hybrid solar eclipse.</p>
                <h5 className="HB24">
                    Lunar Eclipses occur at the full moon phase. When Earth is positioned precisely between the Moon and Sun,
                    Earth’s shadow falls upon the surface of the Moon, dimming it and sometimes turning the lunar surface a
                    striking red over the course of a few hours. Each lunar eclipse is visible from half of Earth.</h5>
                <h5 className="HB24">
                    Total Lunar Eclipse:</h5>
                <p className="BM14">
                    A total lunar eclipse occurs when the Earth comes between the Sun and the Full Moon,
                    blocking the Sun's direct rays from lighting up the Moon. This alignment causes the Moon to be darkened as it
                    moves into the Earth's shadow. During a total lunar eclipse, the Moon may appear reddish or coppery in color
                    due to the scattering of sunlight through Earth's atmosphere. Unlike a total solar eclipse,
                    a total lunar eclipse is safe to view with the naked eye without the need for special glasses.</p>
                <h5 className="HB24">
                    Patial Lunar Eclipse:</h5>
                <p className="BM14">
                    A partial lunar eclipse occurs when the Sun, Earth, and Moon are not perfectly aligned,
                    resulting in only a portion of the Moon passing into Earth's shadow . As the Moon moves into the Earth's
                    umbra during a partial lunar eclipse, it appears as if a "bite" has been taken out of it.
                    Unlike a total lunar eclipse, where the Moon is completely enveloped in Earth's shadow,
                    a partial lunar eclipse only obscures a part of the Moon. During a partial lunar eclipse,
                    the Moon may not appear as dark or reddish as it does during a total lunar eclipse.</p>
                <h5 className="HB24">
                    Penumbral Lunar Eclipse:</h5>
                <p className="BM14">
                    A penumbral lunar eclipse occurs when the Moon moves through the more diffuse outer shadow of the Earth known
                    as the penumbra [1]. During this type of eclipse, the Moon does not fully enter the Earth's darker umbra shadow,
                    resulting in a subtle darkening or shading effect on the Moon's face [1]. Unlike a total lunar eclipse,
                    the Moon does not appear significantly reddish or coppery during a penumbral lunar eclipse</p>
                <h5 className="HB24">
                    Understanding these eclipse types allows us to appreciate the beauty and significance of these celestial events.</h5>

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