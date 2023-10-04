import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";


import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

export const YouAreLost = (_props: any) => {
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

        <div className="contentWrap lostPage">
            <div className="HB36 lost">
                <h2 className="">We think that</h2>
                <h2 className="">you're Lost or</h2>
                <h2 className="">that place is no</h2>
                <h2 className="">more exist!</h2>
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