import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";

import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

export const EclipsesThroughoutHistory = (_props: any) => {
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
    return <div className="FamousEclipsesThroughoutHistory ContentPage" ref={el => etp = el} onLoad={() => {
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
                <h3>Famous Eclipses</h3>
                <h3>Throughout</h3>
                <h3>History</h3>
            </div>
            <div>
                <h5 className="HB24">
                    One of the most significant solar eclipses in history occurred on May 29, 1919. During this eclipse, observations were made that confirmed Albert Einstein's theory of general relativity. Sir Arthur Eddington led an expedition to Principe and Sobral, where they photographed the eclipse to measure the deflection of starlight by the Sun's gravity, providing experimental evidence for Einstein's revolutionary ideas.</h5>
                <h5 className="HB24">
                    Ancient Eclipses in Mythology:</h5>
                <p className="BM14">
                    Eclipses have fascinated cultures throughout history, often finding their place in mythology and folklore. In ancient Chinese mythology, solar eclipses were believed to occur when a celestial dragon devoured the Sun, while in Norse mythology, a pair of wolves chased the Sun and Moon, causing eclipses. Exploring these myths helps us understand the cultural significance people attached to eclipses and their efforts to explain these celestial phenomena.</p>
                <h5 className="HB24">
                    The Eclipse That United America:</h5>
                <p className="BM14">
                    On August 21, 2017, a total solar eclipse traversed the United States from coast to coast, capturing the nation's attention. Millions of people flocked to the path of totality, creating a shared experience that united Americans from diverse backgrounds. This eclipse emphasized the power of celestial events to bring people together in awe and wonder, fostering a sense of unity and appreciation for the natural world.</p>
                <h5 className="HB24">
                    Eclipses as Historical Markers:</h5>
                <p className="BM14">
                    Throughout history, eclipses have served as important markers for dating and recording historical events. The ancient Greek historian Herodotus used a solar eclipse to determine the date of a battle between the Lydians and the Medes. By studying historical records of eclipses, astronomers and historians can piece together the timeline of past events and gain insights into ancient civilizations.</p>
                <h5 className="HB24">
                    The Legacy of Eclipse Chasers:</h5>
                <p className="BM14">
                    Eclipse chasers, passionate individuals who journey around the world to witness and document eclipses, have made significant contributions to our understanding of these celestial events. Their meticulous observations and data collection have added valuable insights to scientific studies, aiding in the advancement of eclipse prediction models and expanding our knowledge of the Sun, Moon, and Earth's interactions.</p>
                <h5 className="HB24">
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