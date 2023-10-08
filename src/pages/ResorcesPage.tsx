import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";

import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

import vid from "../assets/DesignRes/lnv.mp4";

export const ResorcesPage = (_props: any) => {
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
                <h3>Resorces</h3>
            </div>
            <div>
                <h5 className="HB24">
                    Articles:</h5>
                <a className="BM14" href="https://moon.nasa.gov/news/185/what-you-need-to-know-about-the-lunar-eclipse/#:~:text=The%20last%20total%20lunar%20eclipse,Moon%20passes%20into%20Earth's%20shadow">
                    <p className="BM14">
                        What You Need to Know About the Lunar Eclipse – Moon: NASA Science
                    </p>
                </a>
                <a href="https://solarsystem.nasa.gov/eclipses/science/nasa-research/#:~:text=For%20over%20a%20century%2C%20solar,Earth%2C%20and%20our%20space%20environment" className="BM14">
                    <p>NASA Eclipse Science - NASA Science</p>
                </a><a href="https://solarsystem.nasa.gov/eclipses-tabs/eclipse-types/#:~:text=Know%20your%20eclipses!,the%20Moon%20is%20from%20Earth" className="BM14">
                    <p>Types of Solar Eclipses - NASA Science</p>
                </a><a href="https://moon.nasa.gov/moon-in-motion/phases-eclipses-supermoons/eclipses/" className="BM14">
                    <p>Eclipses</p>
                </a><a href="https://www.weather.gov/fsd/suneclipse#:~:text=A%20solar%20eclipse%20occurs%20when,Earth's%20orbit%20around%20the%20Sun" className="BM14">
                    <p>Solar and Lunar Eclipses
                        US Department of Commerce</p>
                </a><a href="https://spaceplace.nasa.gov/eclipses/#:~:text=Getting%20a%20chance%20to%20see,path%20of%20the%20Moon's%20shadow" className="BM14">
                    <p>Lunar Eclipses and Solar Eclipses</p>
                </a><a href="https://www.astronomy.com/observing/how-often-do-solar-eclipses-occur/" className="BM14">
                    <p>How often do solar eclipses occur?
                        Bakich</p>
                </a><a href="https://www.britannica.com/science/eclipse/The-frequency-of-solar-and-lunar-eclipses" className="BM14">
                    <p>
                        The frequency of solar and lunar eclipses

                    </p>
                </a><a href="https://www.skyatnightmagazine.com/space-science/how-predict-eclipses#:~:text=The%20clockwork%20nature%20of%20the,appear%20at%20a%20certain%20time" className="BM14">
                    <p>How scientists can predict when the next eclipse will occur</p>
                </a><a href="https://stardate.org/nightsky/eclipses" className="BM14">
                    <p>Lunar and Solar Eclipses</p>
                </a><a href="https://solarsystem.nasa.gov/eclipses/home/" className="BM14">
                    <p>Eclipses - NASA Science</p>
                </a><a href="https://solarsystem.nasa.gov/eclipses/science/nasa-research/" className="BM14">
                    <p>NASA Eclipse Science - NASA Science</p>
                </a><a href="https://solarsystem.nasa.gov/eclipses/about-eclipses/faq/" className="BM14">
                    <p>FAQ - NASA Science
                    </p>
                </a><a href="https://solarsystem.nasa.gov/eclipses/about-eclipses/history/" className="BM14">
                    <p>History - NASA Science
                    </p>
                </a><a href="https://moon.nasa.gov/news/185/what-you-need-to-know-about-the-lunar-eclipse/#:~:text=The%20last%20total%20lunar%20eclipse,Moon%20passes%20into%20Earth's%20shadow" className="BM14">
                    <p>What You Need to Know About the Lunar Eclipse – Moon: NASA Science</p>
                </a><a href="https://spaceplace.nasa.gov/search/eclipse/sp/" className="BM14">
                    <p>Eclipse</p>
                </a><a href="https://science.nasa.gov/solar-system/planets/what-is-a-planet" className="BM14">
                    <p>What is a Planet? - NASA Science
                        The More We Learn, the More It Changes This seemingly simple question doesn’t have a simple answer. Everyone knows that Earth, Mars and Jupiter are planets. But both Pluto and Ceres were once considered planets until new discoveries triggered scientific debate about how to best describe them – a vigorous debate that continues to this</p>
                </a><a href="https://spaceplace.nasa.gov/eclipse-snap/en" className="BM14">
                    <p>What Is a Solar Eclipse? | NASA Space Place – NASA Science for Kids
                        Whoa! It’s the middle of the day—so why is the sky getting dark? It’s a solar eclipse! A solar eclipse happens when, at just the right moment, the Moon passes between the Sun and Earth. Sometimes the Moon only blocks part of the Sun’s light. This is called a partial solar eclipse. Other times, the Moon blocks all of the Sun’s light.</p>
                </a><a href="" className="BM14">
                    <p>In Depth | Earth - Solar System Exploration: NASA Science
With a radius of 1,080 miles (1,738 kilometers), the Moon is the fifth largest moon in our solar system (after Ganymede, Titan, Callisto and Io). The Moon is farther away from Earth than most people realize. The Moon is an average of 238,855 miles (384,400 kilometers) away. That means 30 Earth-sized planets could fit in between Earth and the ...</p>
                </a>
                <video src={vid} controls autoPlay={true} playsInline={true} loop={true}></video>
            </div>
        </div>

        <PNL />
        <Footer />
    </div>;
}
