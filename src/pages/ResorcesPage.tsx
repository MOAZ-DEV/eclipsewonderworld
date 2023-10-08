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
                <h3>Resources</h3>
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
            
               
            </div>
        </div>

        <PNL />
        <Footer />
    </div>;
}
